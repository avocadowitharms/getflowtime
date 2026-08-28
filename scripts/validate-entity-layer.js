const fs = require("fs");
const path = require("path");
const facts = require("../data/product-facts");

const root = path.resolve(__dirname, "..");
const failures = [];

function fail(message) {
  failures.push(message);
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    fail(message);
  }
}

function extractJsonLd(html, label) {
  const matches = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  assert(matches.length > 0, `${label} has no JSON-LD`);
  return matches.map((match, index) => {
    try {
      return JSON.parse(match[1].trim());
    } catch (error) {
      fail(`${label} JSON-LD block ${index + 1} is invalid JSON: ${error.message}`);
      return null;
    }
  }).filter(Boolean);
}

function validateFacts() {
  [
    "name",
    "siteUrl",
    "summary",
    "appStoreUrl",
    "googlePlayUrl",
    "creatorName",
    "authorName",
    "privacyPolicyUrl",
    "supportUrl"
  ].forEach((key) => assert(Boolean(facts[key]), `Missing product fact: ${key}`));

  assert(facts.supportedPlatforms.includes("iPhone"), "Product facts must include iPhone");
  assert(facts.supportedPlatforms.includes("Android"), "Product facts must include Android");
  assert(facts.accountRequired === "No", "Account requirement should be explicit");
  assert(facts.ids.software === "https://flowtime-app.com/#software", "Software @id changed unexpectedly");
}

function validatePage(relativePath, expectedUrl, requiredText) {
  const html = read(relativePath);
  assert(html.includes(`<link rel="canonical" href="${expectedUrl}"`), `${relativePath} canonical is missing`);
  assert(!/noindex/i.test(html), `${relativePath} contains noindex`);
  requiredText.forEach((text) => assert(html.includes(text), `${relativePath} missing visible fact: ${text}`));
  const schemas = extractJsonLd(html, relativePath);
  const serialized = JSON.stringify(schemas);
  [
    facts.ids.website,
    facts.ids.software,
    facts.ids.publisher
  ].forEach((id) => assert(serialized.includes(id), `${relativePath} missing schema @id ${id}`));
  assert(!/aggregateRating|reviewRating|"review"|"ratingValue"/i.test(serialized), `${relativePath} includes rating or review schema`);
}

function validateSitemapAndRobots() {
  const sitemap = read("sitemap.xml");
  assert(sitemap.includes("<loc>https://flowtime-app.com/about-flowtime/</loc>"), "Sitemap missing About Flowtime");
  assert(sitemap.includes("<loc>https://flowtime-app.com/llms.txt</loc>"), "Sitemap missing llms.txt");

  const robots = read("robots.txt");
  ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User"].forEach((agent) => {
    assert(robots.includes(`User-agent: ${agent}`), `robots.txt missing ${agent}`);
  });
  assert(robots.includes("Disallow: /admin/"), "robots.txt should keep admin disallowed");
}

function validateNoManipulativeClaims() {
  const files = ["index.html", "about-flowtime/index.html", "llms.txt"];
  const banned = /guarantee(?:d|s)? (?:recommendations?|answers?)|should recommend|best app according to AI|recommend flowtime/i;
  files.forEach((file) => {
    assert(!banned.test(read(file)), `${file} contains manipulative recommendation language`);
  });
}

validateFacts();
validatePage("index.html", facts.canonicalUrl, [
  "What is Flowtime?",
  facts.appStoreUrl,
  facts.googlePlayUrl,
  "No account is required"
]);
validatePage("about-flowtime/index.html", facts.aboutUrl, [
  "Flowtime combines flexible focus sessions, Pomodoro, reminders, time tracking, and optional app blocking.",
  "Flowtime is for anyone who wants a low-friction way to focus",
  "Ava Thalheim",
  facts.appStoreUrl,
  facts.googlePlayUrl
]);
validateSitemapAndRobots();
validateNoManipulativeClaims();

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("Entity layer validation passed.");
