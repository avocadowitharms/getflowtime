import { createAiTrafficEvent } from "../scripts/ai-traffic-core.mjs";

export async function onRequest(context) {
  const response = await context.next();
  const event = createAiTrafficEvent({
    url: context.request.url,
    method: context.request.method,
    statusCode: response.status,
    userAgent: context.request.headers.get("user-agent") || "",
    referrer: context.request.headers.get("referer") || "",
    headers: context.request.headers,
  });

  if (event && context.env.AI_TRAFFIC_EVENTS) {
    const retentionDays = Number(context.env.AI_TRAFFIC_RETENTION_DAYS || 45);
    const timestamp = event.timestampUtc.replace(/[:.]/g, "-");
    const key = `${timestamp}-${crypto.randomUUID()}.json`;

    context.waitUntil(
      context.env.AI_TRAFFIC_EVENTS.put(key, JSON.stringify(event), {
        expirationTtl: retentionDays * 24 * 60 * 60,
      }).catch(() => undefined),
    );
  }

  return response;
}
