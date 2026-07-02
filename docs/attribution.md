# Attribution Tracking

Flowtime stores first-touch attribution in `localStorage` under:

```text
flowtime_attribution
```

The browser-ready script is loaded on every HTML page:

```html
<script src="scripts/attribution.js"></script>
<!-- Privacy-friendly analytics by Plausible -->
<script async src="https://plausible.io/js/pa-0aTxMuaeWykhlYbR-knZ5.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()
</script>
<script src="scripts/conversion-analytics.js"></script>
```

Nested pages use the appropriate relative path, such as `../scripts/attribution.js`
or `../../scripts/attribution.js`.

## Stored Data

The stored object uses normalized field names:

```json
{
  "source": "threads",
  "medium": "social",
  "campaign": "launch",
  "content": "reel",
  "term": null,
  "landingPage": "https://flowtime-app.com/",
  "referrer": "https://threads.net/",
  "firstVisit": "2026-07-02T10:15:00.000Z"
}
```

The captured URL parameters are:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

Values are captured only once. Later visits do not overwrite existing
attribution unless `clearAttribution()` is called.

The first page view is captured even when no UTM parameters are present. In
that case the UTM fields are stored as `null`, while `landingPage`, `referrer`,
and `firstVisit` still preserve the original first-touch context.

## TypeScript Usage

Use the framework-agnostic TypeScript helpers from
`scripts/attribution.ts`:

```ts
import {
  captureAttribution,
  getAttribution,
  hasAttribution,
  clearAttribution,
} from "./scripts/attribution";

captureAttribution();

const attribution = getAttribution();
```

## Static Site Usage

The browser script exposes the helpers on `window.FlowtimeAttribution`:

```js
const attribution = window.FlowtimeAttribution.getAttribution();
```

Available helpers:

- `captureAttribution()`
- `getAttribution()`
- `hasAttribution()`
- `clearAttribution()`

All helpers include null checks and fail safely when `localStorage` is blocked
or unavailable.

## Conversion Analytics

`scripts/conversion-analytics.js` attaches stored attribution to conversion
events. It exposes:

```js
window.FlowtimeAnalytics.trackConversion("custom_event_name", {
  location: "example",
});
```

Each payload includes:

- `event`
- `properties`
- `attribution`
- `page`
- `timestamp`

It also dispatches a browser event you can listen to:

```js
window.addEventListener("flowtime:conversion", function (event) {
  console.log(event.detail);
});
```

When these analytics globals are present, the payload is forwarded
automatically:

- `window.gtag`
- `window.dataLayer`
- `window.plausible` (active provider)
- `window.posthog`

Plausible is currently installed with:

```html
<!-- Privacy-friendly analytics by Plausible -->
<script async src="https://plausible.io/js/pa-0aTxMuaeWykhlYbR-knZ5.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()
</script>
```

The current website tracks:

- `app_store_click`
- `google_play_click`
- `newsletter_open`
- `newsletter_signup_submit`
- `newsletter_success`

The MailerLite signup form also receives hidden attribution fields before
submission:

- `fields[utm_source]`
- `fields[utm_medium]`
- `fields[utm_campaign]`
- `fields[utm_content]`
- `fields[utm_term]`
- `fields[landing_page]`
- `fields[referrer]`
- `fields[first_visit]`
