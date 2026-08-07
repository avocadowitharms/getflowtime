const fs = require("fs");
const path = require("path");
const facts = require("../data/product-facts");

const root = path.resolve(__dirname, "..");
const siteUrl = facts.siteUrl;
const comparisonDir = path.join(root, "content", "comparison");
const guidesDir = path.join(root, "content", "guides");
const adhdDir = path.join(root, "content", "adhd");

function frontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    return {};
  }

  return match[1].split("\n").reduce((data, line) => {
    const separator = line.indexOf(":");
    if (separator < 0) {
      return data;
    }

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^"|"$/g, "");
    data[key] = value;
    return data;
  }, {});
}

function formatDate(value) {
  return value.toISOString().slice(0, 10);
}

function maxDateString(values) {
  const dates = values
    .filter(Boolean)
    .map((value) => new Date(`${value}T00:00:00Z`))
    .filter((value) => !Number.isNaN(value.getTime()));

  if (!dates.length) {
    return null;
  }

  return formatDate(new Date(Math.max(...dates.map((value) => value.getTime()))));
}

function fileLastmod(relativePath, fallback) {
  const filePath = path.join(root, relativePath);

  if (!fs.existsSync(filePath)) {
    return fallback;
  }

  return formatDate(fs.statSync(filePath).mtime);
}

function contentLastmod(filePath, data, generatedRelativePath) {
  return maxDateString([
    data.dateModified,
    data.updated,
    data.date,
    formatDate(fs.statSync(filePath).mtime),
    fs.existsSync(path.join(root, generatedRelativePath))
      ? formatDate(fs.statSync(path.join(root, generatedRelativePath)).mtime)
      : null
  ]) || "2026-06-06";
}

function getUrlsFromDir(dir, category) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(dir, file);
      const markdown = fs.readFileSync(filePath, "utf8");
      const data = frontmatter(markdown);
      const slug = file.replace(/\.md$/, "");
      return {
        loc: `${siteUrl}/${category}/${slug}/`,
        lastmod: contentLastmod(filePath, data, `${category}/${slug}/index.html`),
        changefreq: "monthly",
        priority: "0.7",
        draft: data.draft === "true"
      };
    })
    .filter((url) => !url.draft);
}

const urls = [
  { loc: `${siteUrl}/`, lastmod: fileLastmod("index.html", "2026-06-06"), changefreq: "weekly", priority: "1.0" },
  { loc: `${siteUrl}/about-flowtime/`, lastmod: fileLastmod("about-flowtime/index.html", "2026-07-13"), changefreq: "monthly", priority: "0.8" },
  { loc: `${siteUrl}/press/`, lastmod: fileLastmod("press/index.html", "2026-08-07"), changefreq: "monthly", priority: "0.8" },
  { loc: `${siteUrl}/llms.txt`, lastmod: fileLastmod("llms.txt", "2026-07-13"), changefreq: "monthly", priority: "0.2" },
  { loc: `${siteUrl}/llms-full.txt`, lastmod: fileLastmod("llms-full.txt", "2026-07-21"), changefreq: "monthly", priority: "0.2" },
  { loc: `${siteUrl}/comparison/`, lastmod: fileLastmod("comparison/index.html", "2026-06-06"), changefreq: "weekly", priority: "0.8" },
  { loc: `${siteUrl}/guides/`, lastmod: fileLastmod("guides/index.html", "2026-06-06"), changefreq: "weekly", priority: "0.8" },
  { loc: `${siteUrl}/adhd/`, lastmod: fileLastmod("adhd/index.html", "2026-07-14"), changefreq: "weekly", priority: "0.8" },
  ...getUrlsFromDir(comparisonDir, "comparison"),
  ...getUrlsFromDir(guidesDir, "guides"),
  ...getUrlsFromDir(adhdDir, "adhd"),
  { loc: `${siteUrl}/blog/interrupting-autopilot-conscious-app-blocking/`, lastmod: "2026-07-20", changefreq: "monthly", priority: "0.7" },
  { loc: `${siteUrl}/de/blog/autopilot-unterbrechen-apps-bewusst-blockieren/`, lastmod: "2026-07-20", changefreq: "monthly", priority: "0.7" },
  { loc: `${siteUrl}/fr/blog/interrompre-pilote-automatique-blocage-applications/`, lastmod: "2026-07-20", changefreq: "monthly", priority: "0.7" },
  { loc: `${siteUrl}/docs/privacy-policy.html`, lastmod: fileLastmod("docs/privacy-policy.html", "2026-06-01"), changefreq: "yearly", priority: "0.3" },
  { loc: `${siteUrl}/docs/terms-of-use.html`, lastmod: fileLastmod("docs/terms-of-use.html", "2026-06-01"), changefreq: "yearly", priority: "0.3" },
  { loc: `${siteUrl}/docs/support.html`, lastmod: fileLastmod("docs/support.html", "2026-06-01"), changefreq: "monthly", priority: "0.4" }
].sort((a, b) => a.loc.localeCompare(b.loc));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => [
    "  <url>",
    `    <loc>${url.loc}</loc>`,
    `    <lastmod>${url.lastmod}</lastmod>`,
    `    <changefreq>${url.changefreq}</changefreq>`,
    `    <priority>${url.priority}</priority>`,
    "  </url>"
  ].join("\n")),
  "</urlset>",
  ""
].join("\n");

fs.writeFileSync(path.join(root, "sitemap.xml"), xml);
console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
