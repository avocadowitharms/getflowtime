/**
 * Conversion analytics bridge for Flowtime.
 *
 * Emits a consistent conversion payload, then forwards it to common provider
 * globals when they are present: gtag, dataLayer, plausible, and posthog.
 */
(function () {
  "use strict";

  function getAttribution() {
    try {
      return window.FlowtimeAttribution && window.FlowtimeAttribution.getAttribution
        ? window.FlowtimeAttribution.getAttribution()
        : null;
    } catch (_error) {
      return null;
    }
  }

  function flattenAttribution(attribution) {
    return {
      attribution_source: attribution && attribution.source ? attribution.source : null,
      attribution_medium: attribution && attribution.medium ? attribution.medium : null,
      attribution_campaign: attribution && attribution.campaign ? attribution.campaign : null,
      attribution_content: attribution && attribution.content ? attribution.content : null,
      attribution_term: attribution && attribution.term ? attribution.term : null,
      attribution_landing_page: attribution && attribution.landingPage ? attribution.landingPage : null,
      attribution_referrer: attribution && attribution.referrer ? attribution.referrer : null,
      attribution_first_visit: attribution && attribution.firstVisit ? attribution.firstVisit : null,
    };
  }

  function assign(target, source) {
    Object.keys(source).forEach(function (key) {
      if (source[key] !== undefined) {
        target[key] = source[key];
      }
    });

    return target;
  }

  function buildPayload(eventName, properties) {
    return {
      event: eventName,
      properties: properties || {},
      attribution: getAttribution(),
      page: {
        url: window.location.href,
        path: window.location.pathname,
        title: document.title,
      },
      timestamp: new Date().toISOString(),
    };
  }

  function sendToProviders(payload) {
    var providerProperties = assign(
      assign(
        assign({}, payload.properties),
        flattenAttribution(payload.attribution)
      ),
      {
        page_url: payload.page.url,
        page_path: payload.page.path,
        page_title: payload.page.title,
        event_timestamp: payload.timestamp,
      }
    );

    try {
      if (window.dataLayer && window.dataLayer.push) {
        window.dataLayer.push(assign({ event: payload.event }, providerProperties));
      }
    } catch (_error) {
      // Ignore provider failures so conversion clicks are never blocked.
    }

    try {
      if (window.gtag) {
        window.gtag("event", payload.event, providerProperties);
      }
    } catch (_error) {
      // Ignore provider failures so conversion clicks are never blocked.
    }

    try {
      if (window.plausible) {
        window.plausible(payload.event, { props: providerProperties });
      }
    } catch (_error) {
      // Ignore provider failures so conversion clicks are never blocked.
    }

    try {
      if (window.posthog && window.posthog.capture) {
        window.posthog.capture(payload.event, providerProperties);
      }
    } catch (_error) {
      // Ignore provider failures so conversion clicks are never blocked.
    }
  }

  /**
   * Track a conversion event with the stored first-touch attribution attached.
   */
  function trackConversion(eventName, properties) {
    if (!eventName) {
      return null;
    }

    var payload = buildPayload(eventName, properties || {});

    window.dispatchEvent(
      new CustomEvent("flowtime:conversion", {
        detail: payload,
      })
    );

    sendToProviders(payload);

    return payload;
  }

  function upsertHiddenInput(form, name, value) {
    var input = form.querySelector('input[type="hidden"][name="' + name.replace(/"/g, '\\"') + '"]');

    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      form.appendChild(input);
    }

    input.value = value;
  }

  function attachAttributionToForm(form) {
    var attribution = getAttribution();

    if (!attribution) {
      return;
    }

    var hiddenFields = {
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

  function propertiesFromElement(element) {
    return {
      platform: element.dataset.analyticsPlatform,
      location: element.dataset.analyticsLocation,
      label: element.getAttribute("aria-label") || (element.textContent || "").trim() || undefined,
      href: element instanceof HTMLAnchorElement ? element.href : undefined,
    };
  }

  function bindAutomaticTracking() {
    document.addEventListener("click", function (event) {
      var target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      var element = target.closest("[data-analytics-event]");

      if (!element) {
        return;
      }

      var eventName = element.dataset.analyticsEvent;

      if (!eventName) {
        return;
      }

      trackConversion(eventName, propertiesFromElement(element));
    });

    document.addEventListener("submit", function (event) {
      var form = event.target;

      if (!(form instanceof HTMLFormElement)) {
        return;
      }

      var formName = form.dataset.analyticsForm;

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

  window.FlowtimeAnalytics = {
    trackConversion: trackConversion,
  };

  bindAutomaticTracking();
}());
