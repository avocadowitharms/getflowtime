/**
 * Conversion analytics bridge for Flowtime.
 *
 * This file does not install or require a specific analytics vendor. It emits a
 * consistent conversion payload, then forwards it to common provider globals
 * when they are present: gtag, dataLayer, plausible, and posthog.
 */

type AttributionData = {
  source: string | null;
  medium: string | null;
  campaign: string | null;
  content: string | null;
  term: string | null;
  landingPage: string;
  referrer: string | null;
  firstVisit: string;
};

type ConversionProperties = Record<string, string | number | boolean | null | undefined>;

type ConversionPayload = {
  event: string;
  properties: ConversionProperties;
  attribution: AttributionData | null;
  page: {
    url: string;
    path: string;
    title: string;
  };
  timestamp: string;
};

declare global {
  interface Window {
    FlowtimeAttribution?: {
      getAttribution: () => AttributionData | null;
    };
    FlowtimeAnalytics?: {
      trackConversion: typeof trackConversion;
    };
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: "event", eventName: string, params?: Record<string, unknown>) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
    posthog?: {
      capture?: (eventName: string, properties?: Record<string, unknown>) => void;
    };
  }
}

function getAttribution(): AttributionData | null {
  try {
    return window.FlowtimeAttribution?.getAttribution() || null;
  } catch (_error) {
    return null;
  }
}

function flattenAttribution(attribution: AttributionData | null): Record<string, string | null> {
  return {
    attribution_source: attribution?.source ?? null,
    attribution_medium: attribution?.medium ?? null,
    attribution_campaign: attribution?.campaign ?? null,
    attribution_content: attribution?.content ?? null,
    attribution_term: attribution?.term ?? null,
    attribution_landing_page: attribution?.landingPage ?? null,
    attribution_referrer: attribution?.referrer ?? null,
    attribution_first_visit: attribution?.firstVisit ?? null,
  };
}

function buildPayload(eventName: string, properties: ConversionProperties): ConversionPayload {
  return {
    event: eventName,
    properties,
    attribution: getAttribution(),
    page: {
      url: window.location.href,
      path: window.location.pathname,
      title: document.title,
    },
    timestamp: new Date().toISOString(),
  };
}

function isStoreClickEvent(eventName: string): boolean {
  return eventName === "app_store_click" || eventName === "play_store_click";
}

function storeClickProperties(element: HTMLElement): ConversionProperties {
  return {
    source_page_type: element.dataset.sourcePageType || "other",
    content_cluster: element.dataset.contentCluster || "general",
    platform_target: element.dataset.platformTarget || element.dataset.analyticsPlatform,
  };
}

function sendToProviders(payload: ConversionPayload): void {
  const providerProperties = isStoreClickEvent(payload.event)
    ? { ...payload.properties }
    : {
        ...payload.properties,
        ...flattenAttribution(payload.attribution),
        page_url: payload.page.url,
        page_path: payload.page.path,
        page_title: payload.page.title,
        event_timestamp: payload.timestamp,
      };

  try {
    window.dataLayer?.push({
      event: payload.event,
      ...providerProperties,
    });
  } catch (_error) {
    // Ignore provider failures so conversion clicks are never blocked.
  }

  try {
    window.gtag?.("event", payload.event, providerProperties);
  } catch (_error) {
    // Ignore provider failures so conversion clicks are never blocked.
  }

  try {
    window.plausible?.(payload.event, { props: providerProperties });
  } catch (_error) {
    // Ignore provider failures so conversion clicks are never blocked.
  }

  try {
    window.posthog?.capture?.(payload.event, providerProperties);
  } catch (_error) {
    // Ignore provider failures so conversion clicks are never blocked.
  }
}

/**
 * Track a conversion event with the stored first-touch attribution attached.
 */
export function trackConversion(
  eventName: string,
  properties: ConversionProperties = {},
): ConversionPayload | null {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return null;
  }

  const payload = buildPayload(eventName, properties);

  window.dispatchEvent(
    new CustomEvent("flowtime:conversion", {
      detail: payload,
    }),
  );

  sendToProviders(payload);

  return payload;
}

function upsertHiddenInput(form: HTMLFormElement, name: string, value: string): void {
  var selector = 'input[type="hidden"][name="' + name.replace(/"/g, '\\"') + '"]';
  var input = form.querySelector<HTMLInputElement>(selector);

  if (!input) {
    input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    form.appendChild(input);
  }

  input.value = value;
}

function attachAttributionToForm(form: HTMLFormElement): void {
  const attribution = getAttribution();

  if (!attribution) {
    return;
  }

  const hiddenFields: Record<string, string | null> = {
    "fields[utm_source]": attribution.source,
    "fields[utm_medium]": attribution.medium,
    "fields[utm_campaign]": attribution.campaign,
    "fields[utm_content]": attribution.content,
    "fields[utm_term]": attribution.term,
    "fields[landing_page]": attribution.landingPage,
    "fields[referrer]": attribution.referrer,
    "fields[first_visit]": attribution.firstVisit,
  };

  Object.keys(hiddenFields).forEach(function (name) {
    upsertHiddenInput(form, name, hiddenFields[name] || "");
  });
}

function propertiesFromElement(element: HTMLElement): ConversionProperties {
  const eventName = element.dataset.analyticsEvent;

  if (eventName && isStoreClickEvent(eventName)) {
    return storeClickProperties(element);
  }

  return {
    platform: element.dataset.analyticsPlatform,
    location: element.dataset.analyticsLocation,
    label: element.getAttribute("aria-label") || element.textContent?.trim() || undefined,
    href: element instanceof HTMLAnchorElement ? element.href : undefined,
  };
}

function bindAutomaticTracking(): void {
  document.addEventListener("click", function (event) {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const element = target.closest<HTMLElement>("[data-analytics-event]");

    if (!element) {
      return;
    }

    const eventName = element.dataset.analyticsEvent;

    if (!eventName) {
      return;
    }

    trackConversion(eventName, propertiesFromElement(element));
  });

  document.addEventListener("submit", function (event) {
    const form = event.target;

    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    const formName = form.dataset.analyticsForm;

    if (!formName) {
      return;
    }

    attachAttributionToForm(form);
    trackConversion(formName + "_submit", {
      form: formName,
      location: "download_panel",
    });
  });
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  window.FlowtimeAnalytics = {
    trackConversion,
  };

  bindAutomaticTracking();
}
