import assert from "node:assert/strict";
import {
  AI_AGENT_CATEGORIES,
  AI_TRAFFIC_EVENT_TYPES,
  createAiTrafficEvent,
  detectAiAgent,
  detectAiReferral,
  isStaticAssetPath,
  normalizePathname,
} from "./ai-traffic-core.mjs";

function headers(values = {}) {
  return {
    get(name) {
      return values[name.toLowerCase()] || "";
    },
  };
}

function agentEvent(userAgent) {
  return createAiTrafficEvent({
    url: "https://flowtime-app.com/comparison/flowtime-vs-toggl/?utm_source=test",
    method: "GET",
    statusCode: 200,
    userAgent,
    headers: headers({ accept: "text/html" }),
    timestampUtc: "2026-07-14T12:00:00.000Z",
  });
}

const agentCases = [
  ["ClaudeBot", "Anthropic", "ClaudeBot", AI_AGENT_CATEGORIES.SEARCH_CRAWLER],
  ["Claude-SearchBot", "Anthropic", "Claude-SearchBot", AI_AGENT_CATEGORIES.SEARCH_CRAWLER],
  ["Claude-User", "Anthropic", "Claude-User", AI_AGENT_CATEGORIES.USER_TRIGGERED_FETCH],
  ["GPTBot", "OpenAI", "GPTBot", AI_AGENT_CATEGORIES.TRAINING_CRAWLER],
  ["OAI-SearchBot", "OpenAI", "OAI-SearchBot", AI_AGENT_CATEGORIES.SEARCH_CRAWLER],
  ["ChatGPT-User", "OpenAI", "ChatGPT-User", AI_AGENT_CATEGORIES.USER_TRIGGERED_FETCH],
  ["PerplexityBot", "Perplexity", "PerplexityBot", AI_AGENT_CATEGORIES.SEARCH_CRAWLER],
  ["Perplexity-User", "Perplexity", "Perplexity-User", AI_AGENT_CATEGORIES.USER_TRIGGERED_FETCH],
];

for (const [userAgent, provider, agentName, category] of agentCases) {
  const detected = detectAiAgent(`Mozilla/5.0; ${userAgent}; +https://example.com`);
  assert.equal(detected.provider, provider);
  assert.equal(detected.agentName, agentName);
  assert.equal(detected.category, category);

  const event = agentEvent(`Mozilla/5.0; ${userAgent}`);
  assert.equal(event.eventType, AI_TRAFFIC_EVENT_TYPES.AGENT_REQUEST);
  assert.equal(event.provider, provider);
  assert.equal(event.agentName, agentName);
  assert.equal(event.agentCategory, category);
}

const referral = detectAiReferral("https://chatgpt.com/c/abc123?secret=value");
assert.deepEqual(referral, {
  provider: "OpenAI",
  domain: "chatgpt.com",
});

const referralEvent = createAiTrafficEvent({
  url: "https://flowtime-app.com/guides/adhd-hyperfocus-how-to-stop-without-killing-your-focus/?utm_source=test",
  method: "GET",
  statusCode: 200,
  userAgent: "Mozilla/5.0 Safari/605.1.15",
  referrer: "https://chatgpt.com/c/abc123?secret=value",
  headers: headers({ accept: "text/html" }),
  timestampUtc: "2026-07-14T12:00:00.000Z",
});

assert.equal(referralEvent.eventType, AI_TRAFFIC_EVENT_TYPES.AI_REFERRAL);
assert.equal(referralEvent.provider, "OpenAI");
assert.equal(referralEvent.referrerDomain, "chatgpt.com");
assert.equal(referralEvent.path, "/guides/adhd-hyperfocus-how-to-stop-without-killing-your-focus/");
assert.equal(referralEvent.agentName, null);

assert.equal(
  normalizePathname("https://flowtime-app.com/comparison/flowtime-vs-toggl/?utm_source=test"),
  "/comparison/flowtime-vs-toggl/",
);
assert.equal(normalizePathname("/docs/privacy-policy.html?lang=de"), "/docs/privacy-policy.html");

assert.equal(isStaticAssetPath("/assets/logo.png"), true);
assert.equal(isStaticAssetPath("/scripts/i18n.js"), true);
assert.equal(isStaticAssetPath("/css/base.css"), true);
assert.equal(isStaticAssetPath("/favicon.ico"), true);
assert.equal(isStaticAssetPath("/assets/app.js.map"), true);

assert.equal(
  createAiTrafficEvent({
    url: "https://flowtime-app.com/assets/logo.png?cache=1",
    method: "GET",
    statusCode: 200,
    userAgent: "ClaudeBot",
    headers: headers({ accept: "image/png" }),
  }),
  null,
);

assert.equal(
  createAiTrafficEvent({
    url: "https://flowtime-app.com/",
    method: "GET",
    statusCode: 200,
    userAgent: "Mozilla/5.0 Safari/605.1.15",
    referrer: "",
    headers: headers({ accept: "text/html" }),
  }),
  null,
);

assert.equal(
  createAiTrafficEvent({
    url: "https://flowtime-app.com/",
    method: "GET",
    statusCode: 200,
    userAgent: "Mozilla/5.0 Safari/605.1.15",
    referrer: "https://www.google.com/search?q=flowtime",
    headers: headers({ accept: "text/html" }),
  }),
  null,
);

assert.equal(
  createAiTrafficEvent({
    url: "https://flowtime-app.com/ai-traffic-report?token=secret",
    method: "GET",
    statusCode: 200,
    userAgent: "ClaudeBot",
    headers: headers({ accept: "text/html" }),
  }),
  null,
);
assert.equal(referralEvent.referrerDomain.includes("/c/abc123"), false);

console.log("AI traffic tests passed.");
