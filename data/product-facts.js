(function (root, factory) {
  var facts = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = facts;
  }
  root.FlowtimeProductFacts = facts;
}(typeof self !== "undefined" ? self : this, function () {
  var siteUrl = "https://flowtime-app.com";
  var appStoreUrl = "https://apps.apple.com/ch/app/flowtime/id6768056969";
  var googlePlayUrl = "https://play.google.com/store/apps/details?id=com.avocadowitharms.flowtime";

  return {
    name: "Flowtime",
    styledName: "Flowtime\u00b0",
    storeName: "Flowtime - Time Tracker",
    siteUrl: siteUrl,
    canonicalUrl: siteUrl + "/",
    aboutUrl: siteUrl + "/about-flowtime/",
    guidesUrl: siteUrl + "/guides/",
    comparisonUrl: siteUrl + "/comparison/",
    privacyPolicyUrl: siteUrl + "/docs/privacy-policy.html",
    termsUrl: siteUrl + "/docs/terms-of-use.html",
    supportUrl: siteUrl + "/docs/support.html",
    appStoreUrl: appStoreUrl,
    googlePlayUrl: googlePlayUrl,
    logoUrl: siteUrl + "/assets/logo-classic.png",
    appIconUrl: siteUrl + "/assets/logo-classic.png",
    socialImageUrl: siteUrl + "/og-image.png",
    screenshotUrls: [
      siteUrl + "/assets/phone-mono2-opt.webp",
      siteUrl + "/assets/classic-timer-mono-opt.webp",
      siteUrl + "/assets/pomodoro-mono-opt.webp",
      siteUrl + "/assets/flow-session-mono-opt.webp",
      siteUrl + "/assets/reports-mono-opt.webp"
    ],
    shortDescription: "Flowtime is a focus timer and time-awareness app for iPhone and Android.",
    summary: "Flowtime is a focus timer and time-awareness app for iPhone and Android. It combines flexible focus sessions, Pomodoro, focus reminders, personal time tracking, projects, and optional app blocking. It is designed especially around ADHD time blindness, hyperfocus, and reducing distracting context switches. No account is required.",
    fullDescription: "Flowtime is a focus timer and time-awareness app for iPhone and Android. It combines flexible focus sessions, Pomodoro, focus reminders, personal time tracking, projects, session history, and optional app blocking. It is designed especially around ADHD time blindness, hyperfocus, and reducing distracting context switches. Flowtime does not require an account, and timer and project data are stored locally on the device.",
    applicationCategory: "ProductivityApplication",
    supportedPlatforms: ["iPhone", "Android"],
    operatingSystems: ["iOS", "Android"],
    accountRequired: "No",
    dataStorage: "Timer and project data are stored locally on the device.",
    cloudSync: "No cloud sync is described on the website.",
    analytics: "The website uses privacy-friendly Plausible analytics. The app privacy policy states that tracking data is not used for advertising, analytics, or personal data collection.",
    appBlockingData: "The privacy policy states that accessibility data is only used to provide optional app blocking and is not used for advertising, analytics, or personal data collection.",
    creatorName: "Ava Thalheim",
    creatorUrl: "https://avathalheim.dev/",
    publisherName: "Ava Thalheim",
    officialSocialProfiles: [
      "https://www.instagram.com/flowtimefocus/",
      "https://x.com/Flowtime_app"
    ],
    sameAs: [
      appStoreUrl,
      googlePlayUrl,
      "https://www.instagram.com/flowtimefocus/",
      "https://x.com/Flowtime_app",
      "https://avathalheim.dev/"
    ],
    coreFeatures: [
      "Flexible focus sessions",
      "Standard timer",
      "Pomodoro",
      "Focus reminders",
      "Optional app blocking",
      "Personal time tracking",
      "Projects",
      "Session history",
      "Reports"
    ],
    designedFor: [
      "Flexible focus",
      "Time awareness",
      "ADHD time blindness",
      "Hyperfocus",
      "Work",
      "Study",
      "Reducing digital distractions"
    ],
    ids: {
      website: siteUrl + "/#website",
      software: siteUrl + "/#software",
      publisher: siteUrl + "/#publisher",
      aboutPage: siteUrl + "/about-flowtime/#webpage",
      aboutFaq: siteUrl + "/about-flowtime/#faq"
    }
  };
}));
