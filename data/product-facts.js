(function (root, factory) {
  var facts = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = facts;
  }
  root.FlowtimeProductFacts = facts;
}(typeof self !== "undefined" ? self : this, function () {
  var siteUrl = "https://flowtime-app.com";
  var appStoreUrl = "https://apps.apple.com/ch/app/flowtime-adhs-fokus-timer/id6768056969";
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
    privacyPolicyUrl: "https://gugus.software/privacy/flowtime/",
    termsUrl: "https://gugus.software/terms/flowtime/",
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
    shortDescription: "Flowtime is a flexible focus timer and personal time tracker with Pomodoro, reminders, projects, and optional app blocking on iPhone and Android.",
    summary: "Flowtime is a flexible, friction-free focus timer and personal time tracker for iPhone and Android. It combines open-ended focus sessions, Pomodoro, reminders, projects, reports, and optional app blocking. No account is required.",
    fullDescription: "Flowtime is a flexible, friction-free focus timer and personal time tracker for iPhone and Android. It combines open-ended Flow Sessions, Pomodoro, focus reminders, projects, session history, reports, and optional app blocking. Flowtime does not require an account, and timer and project data are stored locally on the device.",
    applicationCategory: "ProductivityApplication",
    supportedPlatforms: ["iPhone", "Android"],
    operatingSystems: ["iOS", "Android"],
    accountRequired: "No",
    dataStorage: "Timer and project data are stored locally on the device.",
    cloudSync: "No cloud sync is described on the website.",
    analytics: "The website uses privacy-friendly Plausible analytics. The app privacy policy states that tracking data is not used for advertising, analytics, or personal data collection.",
    appBlockingData: "The privacy policy states that accessibility data is only used to provide optional app blocking and is not used for advertising, analytics, or personal data collection.",
    creatorName: "gugus. Software&Things",
    creatorUrl: "https://gugus.software/",
    publisherName: "gugus. Software&Things",
    authorName: "Ava Thalheim",
    authorUrl: "https://gugus.software/",
    officialSocialProfiles: [
      "https://www.instagram.com/flowtimefocus/",
      "https://x.com/Flowtime_app"
    ],
    sameAs: [
      appStoreUrl,
      googlePlayUrl,
      "https://www.instagram.com/flowtimefocus/",
      "https://x.com/Flowtime_app",
      "https://gugus.software/"
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
      "Deep work",
      "Intentional breaks",
      "Work",
      "Study",
      "Reducing digital distractions"
    ],
    pricingOffers: {
      currency: "USD",
      lowPrice: "0",
      highPrice: "49.99",
      offerCount: "4",
      free: { price: "0", name: "Flowtime Free", description: "Standard Timer, standard notifications, Pomodoro with fixed intervals, 1 Project, and 1 day of History" },
      monthly: { price: "3.99", name: "Flowtime Pro Monthly", description: "Monthly Pro subscription with Flow Sessions, Flowmodoro, custom Pomodoro intervals, unlimited Projects and History, App Blocking, Quick Start Templates, Reminder Profiles, UI customization, Reports and Exports, and all future Pro features" },
      yearly: { price: "24.99", name: "Flowtime Pro Yearly", description: "Yearly Pro subscription with Flow Sessions, Flowmodoro, custom Pomodoro intervals, unlimited Projects and History, App Blocking, Quick Start Templates, Reminder Profiles, UI customization, Reports and Exports, and all future Pro features" },
      lifetime: { price: "49.99", name: "Flowtime Pro Lifetime", description: "Lifetime Pro access with Flow Sessions, Flowmodoro, custom Pomodoro intervals, unlimited Projects and History, App Blocking, Quick Start Templates, Reminder Profiles, UI customization, Reports and Exports, and all future Pro features" }
    },
    ids: {
      website: siteUrl + "/#website",
      software: siteUrl + "/#software",
      publisher: siteUrl + "/#publisher",
      author: siteUrl + "/#author",
      aboutPage: siteUrl + "/about-flowtime/#webpage",
      aboutFaq: siteUrl + "/about-flowtime/#faq"
    }
  };
}));
