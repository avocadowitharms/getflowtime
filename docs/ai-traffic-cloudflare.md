# AI traffic tracking on Cloudflare Pages

Flowtime records privacy-friendly AI traffic events with Cloudflare Pages Functions.

## Required Cloudflare setup

1. In Cloudflare, create a KV namespace for AI traffic events.
2. In the Flowtime Pages project, bind that KV namespace with this variable name:

   `AI_TRAFFIC_EVENTS`

3. Add an environment variable:

   `AI_TRAFFIC_REPORT_TOKEN`

4. Optionally add:

   `AI_TRAFFIC_RETENTION_DAYS`

   If omitted, raw events expire after 45 days.

## Report URL

Open:

`https://flowtime-app.com/ai-traffic-report?token=YOUR_AI_TRAFFIC_REPORT_TOKEN`

## Stored data

Events include only timestamp, pathname, provider, agent name/category, event type, referrer domain, HTTP method, and HTTP status code.

The system does not store full IP addresses, cookies, visitor IDs, full referrer URLs, query parameter values, request bodies, or browser fingerprints.
