/**
 * First-touch attribution tracking for Flowtime.
 *
 * Stores attribution once, on the user's first visit, and exposes helpers on
 * window.FlowtimeAttribution for simple integration with forms or analytics.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "flowtime_attribution";

  function getStorage() {
    try {
      return window.localStorage || null;
    } catch (_error) {
      return null;
    }
  }

  function readStoredAttribution(storage) {
    var rawValue = storage.getItem(STORAGE_KEY);

    if (!rawValue) {
      return null;
    }

    try {
      return JSON.parse(rawValue);
    } catch (_error) {
      return null;
    }
  }

  function getSearchParam(params, key) {
    var value = params.get(key);

    if (value === null || value.trim() === "") {
      return null;
    }

    return value;
  }

  function buildAttributionData() {
    var params = new URLSearchParams(window.location.search);
    var referrer = document.referrer.trim();

    return {
      source: getSearchParam(params, "utm_source"),
      medium: getSearchParam(params, "utm_medium"),
      campaign: getSearchParam(params, "utm_campaign"),
      content: getSearchParam(params, "utm_content"),
      term: getSearchParam(params, "utm_term"),
      landingPage: window.location.href,
      referrer: referrer === "" ? null : referrer,
      firstVisit: new Date().toISOString(),
    };
  }

  /**
   * Capture first-touch attribution for the current browser visit.
   *
   * If attribution already exists, it is returned unchanged. If localStorage is
   * unavailable or blocked, the function returns null instead of throwing.
   */
  function captureAttribution() {
    var storage = getStorage();

    if (!storage) {
      return null;
    }

    try {
      var existingAttribution = readStoredAttribution(storage);

      if (existingAttribution) {
        return existingAttribution;
      }

      var attribution = buildAttributionData();
      storage.setItem(STORAGE_KEY, JSON.stringify(attribution));

      return attribution;
    } catch (_error) {
      return null;
    }
  }

  /**
   * Return stored attribution data, or null when nothing has been captured.
   */
  function getAttribution() {
    var storage = getStorage();

    if (!storage) {
      return null;
    }

    try {
      var attribution = readStoredAttribution(storage);
      return attribution ? Object.assign({}, attribution) : null;
    } catch (_error) {
      return null;
    }
  }

  /**
   * Remove stored attribution data.
   */
  function clearAttribution() {
    var storage = getStorage();

    if (!storage) {
      return;
    }

    try {
      storage.removeItem(STORAGE_KEY);
    } catch (_error) {
      // localStorage can be blocked in privacy-restricted contexts.
    }
  }

  /**
   * Check whether attribution has already been captured.
   */
  function hasAttribution() {
    return getAttribution() !== null;
  }

  window.FlowtimeAttribution = {
    captureAttribution: captureAttribution,
    getAttribution: getAttribution,
    clearAttribution: clearAttribution,
    hasAttribution: hasAttribution,
  };

  captureAttribution();
}());
