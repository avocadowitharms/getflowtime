export const AI_AGENT_CATEGORIES = {
  TRAINING_CRAWLER: "training_crawler",
  SEARCH_CRAWLER: "search_crawler",
  USER_TRIGGERED_FETCH: "user_triggered_fetch",
  UNKNOWN_AI_AGENT: "unknown_ai_agent",
};

export const AI_TRAFFIC_EVENT_TYPES = {
  AGENT_REQUEST: "agent_request",
  AI_REFERRAL: "ai_referral",
};

export const AI_AGENT_REGISTRY = [
  {
    provider: "Anthropic",
    agentName: "Claude-SearchBot",
    matcher: "Claude-SearchBot",
    category: AI_AGENT_CATEGORIES.SEARCH_CRAWLER,
  },
  {
    provider: "Anthropic",
    agentName: "Claude-User",
    matcher: "Claude-User",
    category: AI_AGENT_CATEGORIES.USER_TRIGGERED_FETCH,
  },
  {
    provider: "Anthropic",
    agentName: "ClaudeBot",
    matcher: "ClaudeBot",
    category: AI_AGENT_CATEGORIES.SEARCH_CRAWLER,
  },
  {
    provider: "OpenAI",
    agentName: "OAI-SearchBot",
    matcher: "OAI-SearchBot",
    category: AI_AGENT_CATEGORIES.SEARCH_CRAWLER,
  },
  {
    provider: "OpenAI",
    agentName: "ChatGPT-User",
    matcher: "ChatGPT-User",
    category: AI_AGENT_CATEGORIES.USER_TRIGGERED_FETCH,
  },
  {
    provider: "OpenAI",
    agentName: "GPTBot",
    matcher: "GPTBot",
    category: AI_AGENT_CATEGORIES.TRAINING_CRAWLER,
  },
  {
    provider: "Perplexity",
    agentName: "Perplexity-User",
    matcher: "Perplexity-User",
    category: AI_AGENT_CATEGORIES.USER_TRIGGERED_FETCH,
  },
  {
    provider: "Perplexity",
    agentName: "PerplexityBot",
    matcher: "PerplexityBot",
    category: AI_AGENT_CATEGORIES.SEARCH_CRAWLER,
  },
  {
    provider: "Google",
    agentName: "GoogleOther",
    matcher: "GoogleOther",
    category: AI_AGENT_CATEGORIES.SEARCH_CRAWLER,
  },
  {
    provider: "ByteDance",
    agentName: "Bytespider",
    matcher: "Bytespider",
    category: AI_AGENT_CATEGORIES.TRAINING_CRAWLER,
  },
  {
    provider: "Apple",
    agentName: "Applebot-Extended",
    matcher: "Applebot-Extended",
    category: AI_AGENT_CATEGORIES.TRAINING_CRAWLER,
  },
  {
    provider: "Apple",
    agentName: "Applebot",
    matcher: "Applebot",
    category: AI_AGENT_CATEGORIES.SEARCH_CRAWLER,
  },
  {
    provider: "Meta",
    agentName: "meta-externalagent",
    matcher: "meta-externalagent",
    category: AI_AGENT_CATEGORIES.TRAINING_CRAWLER,
  },
  {
    provider: "Meta",
    agentName: "meta-externalfetcher",
    matcher: "meta-externalfetcher",
    category: AI_AGENT_CATEGORIES.USER_TRIGGERED_FETCH,
  },
  {
    provider: "Amazon",
    agentName: "Amazonbot",
    matcher: "Amazonbot",
    category: AI_AGENT_CATEGORIES.TRAINING_CRAWLER,
  },
  {
    provider: "Cohere",
    agentName: "cohere-ai",
    matcher: "cohere-ai",
    category: AI_AGENT_CATEGORIES.TRAINING_CRAWLER,
  },
  {
    provider: "You.com",
    agentName: "YouBot",
    matcher: "YouBot",
    category: AI_AGENT_CATEGORIES.SEARCH_CRAWLER,
  },
  {
    provider: "Diffbot",
    agentName: "Diffbot",
    matcher: "Diffbot",
    category: AI_AGENT_CATEGORIES.UNKNOWN_AI_AGENT,
  },
];

export const AI_REFERRAL_REGISTRY = [
  { provider: "OpenAI", domain: "chatgpt.com" },
  { provider: "OpenAI", domain: "chat.openai.com" },
  { provider: "Anthropic", domain: "claude.ai" },
  { provider: "Perplexity", domain: "perplexity.ai" },
  { provider: "Google", domain: "gemini.google.com" },
  { provider: "Microsoft", domain: "copilot.microsoft.com" },
  { provider: "Quora", domain: "poe.com" },
  { provider: "You.com", domain: "you.com" },
];

const STATIC_PATH_PREFIXES = [
  "/assets/",
  "/css/",
  "/scripts/",
  "/sections/",
  "/data/",
];

const STATIC_EXTENSIONS = new Set([
  ".avif",
  ".css",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".js",
  ".json",
  ".map",
  ".png",
  ".svg",
  ".webp",
  ".woff",
  ".woff2",
  ".ttf",
  ".otf",
  ".eot",
]);

function hasDomainMatch(hostname, expectedDomain) {
  return hostname === expectedDomain || hostname.endsWith(`.${expectedDomain}`);
}

function extensionForPath(pathname) {
  const lastSegment = pathname.split("/").pop() || "";
  const dotIndex = lastSegment.lastIndexOf(".");
  return dotIndex === -1 ? "" : lastSegment.slice(dotIndex).toLowerCase();
}

export function normalizePathname(inputUrl) {
  try {
    const url = new URL(inputUrl, "https://flowtime-app.com");
    return url.pathname || "/";
  } catch (_error) {
    return "/";
  }
}

export function normalizeReferrerDomain(referrer) {
  if (!referrer || referrer.trim() === "") {
    return null;
  }

  try {
    return new URL(referrer).hostname.toLowerCase().replace(/^www\./, "");
  } catch (_error) {
    return null;
  }
}

export function detectAiAgent(userAgent) {
  if (!userAgent) {
    return null;
  }

  const normalizedUserAgent = userAgent.toLowerCase();

  return (
    AI_AGENT_REGISTRY.find((agent) =>
      normalizedUserAgent.includes(agent.matcher.toLowerCase()),
    ) || null
  );
}

export function detectAiReferral(referrer) {
  const domain = normalizeReferrerDomain(referrer);

  if (!domain) {
    return null;
  }

  const referral = AI_REFERRAL_REGISTRY.find((entry) =>
    hasDomainMatch(domain, entry.domain),
  );

  return referral ? { ...referral, domain } : null;
}

export function isStaticAssetPath(pathname) {
  const normalizedPath = normalizePathname(pathname);

  if (
    normalizedPath === "/favicon.ico" ||
    normalizedPath === "/robots.txt" ||
    normalizedPath === "/sitemap.xml" ||
    normalizedPath === "/llms.txt"
  ) {
    return true;
  }

  if (STATIC_PATH_PREFIXES.some((prefix) => normalizedPath.startsWith(prefix))) {
    return true;
  }

  return STATIC_EXTENSIONS.has(extensionForPath(normalizedPath));
}

export function isTrackablePageRequest({ url, method = "GET", headers } = {}) {
  if (method !== "GET" && method !== "HEAD") {
    return false;
  }

  const pathname = normalizePathname(url || "/");

  if (
    pathname.startsWith("/admin/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/ai-traffic-report") ||
    pathname.startsWith("/cdn-cgi/")
  ) {
    return false;
  }

  if (isStaticAssetPath(pathname)) {
    return false;
  }

  const accept = headers?.get?.("accept") || headers?.accept || "";
  return accept === "" || accept.includes("text/html") || accept.includes("*/*");
}

export function createAiTrafficEvent({
  url,
  method = "GET",
  statusCode = null,
  userAgent = "",
  referrer = "",
  timestampUtc,
  headers,
} = {}) {
  if (!isTrackablePageRequest({ url, method, headers })) {
    return null;
  }

  const path = normalizePathname(url || "/");
  const agent = detectAiAgent(userAgent);

  if (agent) {
    return {
      timestampUtc: timestampUtc || new Date().toISOString(),
      path,
      provider: agent.provider,
      agentName: agent.agentName,
      eventType: AI_TRAFFIC_EVENT_TYPES.AGENT_REQUEST,
      agentCategory: agent.category,
      referrerDomain: null,
      httpMethod: method,
      httpStatusCode: statusCode,
    };
  }

  const referral = detectAiReferral(referrer);

  if (!referral) {
    return null;
  }

  return {
    timestampUtc: timestampUtc || new Date().toISOString(),
    path,
    provider: referral.provider,
    agentName: null,
    eventType: AI_TRAFFIC_EVENT_TYPES.AI_REFERRAL,
    agentCategory: null,
    referrerDomain: referral.domain,
    httpMethod: method,
    httpStatusCode: statusCode,
  };
}

export function isRetainedEvent(event, now = new Date(), retentionDays = 45) {
  const timestamp = Date.parse(event?.timestampUtc || "");

  if (!Number.isFinite(timestamp)) {
    return false;
  }

  return now.getTime() - timestamp <= retentionDays * 24 * 60 * 60 * 1000;
}
