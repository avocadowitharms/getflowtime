import { isRetainedEvent } from "../scripts/ai-traffic-core.mjs";

const WINDOWS = [
  { label: "Last 24 hours", days: 1 },
  { label: "Last 7 days", days: 7 },
  { label: "Last 30 days", days: 30 },
];

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function htmlResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex, nofollow, noarchive",
    },
  });
}

function isAuthorized(request, env) {
  if (!env.AI_TRAFFIC_REPORT_TOKEN) {
    return env.CF_PAGES !== "1";
  }

  const url = new URL(request.url);
  const authHeader = request.headers.get("authorization") || "";
  const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

  return (
    bearerToken === env.AI_TRAFFIC_REPORT_TOKEN ||
    url.searchParams.get("token") === env.AI_TRAFFIC_REPORT_TOKEN
  );
}

function increment(map, key) {
  map.set(key, (map.get(key) || 0) + 1);
}

function eventsWithinWindow(events, now, days) {
  const cutoff = now.getTime() - days * 24 * 60 * 60 * 1000;
  return events.filter((event) => Date.parse(event.timestampUtc) >= cutoff);
}

function topRows(map, limit = 12) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit);
}

function summarize(events, now, days) {
  const windowEvents = eventsWithinWindow(events, now, days);
  const byProvider = new Map();
  const byAgent = new Map();
  const byEventType = new Map();
  const byCategory = new Map();
  const byPath = new Map();

  for (const event of windowEvents) {
    increment(byProvider, event.provider || "Unknown");
    increment(byEventType, event.eventType || "unknown");
    increment(byPath, event.path || "/");

    if (event.agentName) {
      increment(byAgent, `${event.provider || "Unknown"} / ${event.agentName}`);
    }

    if (event.agentCategory) {
      increment(byCategory, event.agentCategory);
    }

    if (event.referrerDomain) {
      increment(byAgent, `${event.provider || "Unknown"} / ${event.referrerDomain} referral`);
    }
  }

  return {
    total: windowEvents.length,
    byProvider,
    byAgent,
    byEventType,
    byCategory,
    byPath,
  };
}

function renderRows(title, rows, emptyText = "No activity recorded.") {
  const items = rows
    .map(([label, count]) => `<tr><td>${escapeHtml(label)}</td><td>${count}</td></tr>`)
    .join("");

  return `
    <section>
      <h2>${escapeHtml(title)}</h2>
      ${
        items
          ? `<table><thead><tr><th>Group</th><th>Events</th></tr></thead><tbody>${items}</tbody></table>`
          : `<p class="muted">${escapeHtml(emptyText)}</p>`
      }
    </section>
  `;
}

function renderWindow(windowConfig, summary) {
  return `
    <article class="window">
      <header>
        <h2>AI Activity - ${escapeHtml(windowConfig.label)}</h2>
        <p>${summary.total} total AI traffic events. Crawler requests, user-triggered fetches, and human referrals are listed separately below.</p>
      </header>
      ${renderRows("By provider", topRows(summary.byProvider))}
      ${renderRows("By agent or referral source", topRows(summary.byAgent))}
      ${renderRows("By event type", topRows(summary.byEventType))}
      ${renderRows("By agent category", topRows(summary.byCategory))}
      ${renderRows("Top AI-accessed pages", topRows(summary.byPath))}
    </article>
  `;
}

async function loadEvents(env) {
  if (!env.AI_TRAFFIC_EVENTS) {
    return [];
  }

  const events = [];
  const retentionDays = Number(env.AI_TRAFFIC_RETENTION_DAYS || 45);
  let cursor;

  do {
    const list = await env.AI_TRAFFIC_EVENTS.list({ cursor });
    cursor = list.cursor;

    for (const key of list.keys) {
      const event = await env.AI_TRAFFIC_EVENTS.get(key.name, "json");

      if (isRetainedEvent(event, new Date(), retentionDays)) {
        events.push(event);
      } else {
        await env.AI_TRAFFIC_EVENTS.delete(key.name);
      }
    }
  } while (cursor);

  return events;
}

function renderPage(events) {
  const now = new Date();
  const windows = WINDOWS.map((windowConfig) =>
    renderWindow(windowConfig, summarize(events, now, windowConfig.days)),
  ).join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Flowtime AI Traffic</title>
  <style>
    body { color: #1f2933; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height: 1.5; margin: 0; background: #f7f5ef; }
    main { margin: 0 auto; max-width: 1120px; padding: 32px 20px 56px; }
    h1 { font-size: 32px; margin: 0 0 8px; }
    h2 { font-size: 20px; margin: 0 0 12px; }
    p { margin: 0 0 16px; }
    .muted { color: #667085; }
    .window { background: #fff; border: 1px solid #ded8ca; border-radius: 8px; margin-top: 24px; padding: 20px; }
    section { margin-top: 20px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border-bottom: 1px solid #ece7dc; padding: 10px 8px; text-align: left; }
    th:last-child, td:last-child { text-align: right; width: 120px; }
  </style>
</head>
<body>
  <main>
    <h1>Flowtime AI Traffic</h1>
    <p class="muted">Privacy-friendly aggregate report for known AI crawlers, user-triggered AI fetches, and human visits referred by AI assistants.</p>
    ${windows}
  </main>
</body>
</html>`;
}

export async function onRequestGet(context) {
  if (!isAuthorized(context.request, context.env)) {
    return htmlResponse("Unauthorized", 401);
  }

  const events = await loadEvents(context.env);
  return htmlResponse(renderPage(events));
}
