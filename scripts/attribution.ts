/**
 * First-touch attribution tracking for Flowtime.
 *
 * The module is framework-agnostic and safe to import in browser-focused apps.
 * It stores attribution once, on the user's first visit, and never overwrites
 * existing values unless clearAttribution() is called.
 */

export type AttributionData = {
  source: string | null;
  medium: string | null;
  campaign: string | null;
  content: string | null;
  term: string | null;
  landingPage: string;
  referrer: string | null;
  firstVisit: string;
};

const STORAGE_KEY = "flowtime_attribution";

type BrowserLike = {
  location?: Location;
  document?: Document;
  localStorage?: Storage;
};

function getBrowser(): BrowserLike | null {
  if (typeof window === "undefined") {
    return null;
  }

  let localStorage: Storage | undefined;

  try {
    localStorage = window.localStorage;
  } catch (_error) {
    localStorage = undefined;
  }

  return {
    location: window.location,
    document: window.document,
    localStorage,
  };
}

function readStoredAttribution(storage: Storage): AttributionData | null {
  const rawValue = storage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as AttributionData;
  } catch (_error) {
    return null;
  }
}

function getSearchParam(params: URLSearchParams, key: string): string | null {
  const value = params.get(key);

  if (value === null || value.trim() === "") {
    return null;
  }

  return value;
}

function buildAttributionData(location: Location, documentRef: Document): AttributionData {
  const params = new URLSearchParams(location.search);
  const referrer = documentRef.referrer.trim();

  return {
    source: getSearchParam(params, "utm_source"),
    medium: getSearchParam(params, "utm_medium"),
    campaign: getSearchParam(params, "utm_campaign"),
    content: getSearchParam(params, "utm_content"),
    term: getSearchParam(params, "utm_term"),
    landingPage: location.href,
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
export function captureAttribution(): AttributionData | null {
  const browser = getBrowser();

  if (!browser?.location || !browser.document || !browser.localStorage) {
    return null;
  }

  try {
    const existingAttribution = readStoredAttribution(browser.localStorage);

    if (existingAttribution) {
      return existingAttribution;
    }

    const attribution = buildAttributionData(browser.location, browser.document);
    browser.localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));

    return attribution;
  } catch (_error) {
    return null;
  }
}

/**
 * Return stored attribution data, or null when nothing has been captured.
 */
export function getAttribution(): AttributionData | null {
  const browser = getBrowser();

  if (!browser?.localStorage) {
    return null;
  }

  try {
    const attribution = readStoredAttribution(browser.localStorage);
    return attribution ? { ...attribution } : null;
  } catch (_error) {
    return null;
  }
}

/**
 * Remove stored attribution data.
 */
export function clearAttribution(): void {
  const browser = getBrowser();

  if (!browser?.localStorage) {
    return;
  }

  try {
    browser.localStorage.removeItem(STORAGE_KEY);
  } catch (_error) {
    // localStorage can be blocked in privacy-restricted contexts.
  }
}

/**
 * Check whether attribution has already been captured.
 */
export function hasAttribution(): boolean {
  return getAttribution() !== null;
}

declare global {
  interface Window {
    FlowtimeAttribution?: {
      captureAttribution: typeof captureAttribution;
      getAttribution: typeof getAttribution;
      clearAttribution: typeof clearAttribution;
      hasAttribution: typeof hasAttribution;
    };
  }
}

if (typeof window !== "undefined") {
  window.FlowtimeAttribution = {
    captureAttribution,
    getAttribution,
    clearAttribution,
    hasAttribution,
  };

  captureAttribution();
}
