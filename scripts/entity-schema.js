const facts = require("../data/product-facts");

function publisherNode() {
  return {
    "@type": "Organization",
    "@id": facts.ids.publisher,
    "name": facts.creatorName,
    "url": facts.creatorUrl,
    "sameAs": facts.officialSocialProfiles
  };
}

function authorNode() {
  return {
    "@type": "Person",
    "@id": facts.ids.author,
    "name": facts.authorName,
    "url": facts.authorUrl,
    "jobTitle": "Founder of Flowtime"
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": facts.ids.website,
    "name": facts.name,
    "url": facts.canonicalUrl,
    "description": facts.summary,
    "publisher": { "@id": facts.ids.publisher }
  };
}

function softwareNode() {
  return {
    "@type": "SoftwareApplication",
    "@id": facts.ids.software,
    "name": facts.name,
    "alternateName": facts.storeName,
    "description": facts.summary,
    "url": facts.canonicalUrl,
    "applicationCategory": facts.applicationCategory,
    "operatingSystem": facts.operatingSystems,
    "downloadUrl": [facts.appStoreUrl, facts.googlePlayUrl],
    "installUrl": [facts.appStoreUrl, facts.googlePlayUrl],
    "image": facts.appIconUrl,
    "screenshot": facts.screenshotUrls,
    "featureList": facts.coreFeatures,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": facts.pricingOffers.currency,
      "lowPrice": facts.pricingOffers.lowPrice,
      "highPrice": facts.pricingOffers.highPrice,
      "offerCount": facts.pricingOffers.offerCount,
      "offers": [
        {
          "@type": "Offer",
          "name": facts.pricingOffers.free.name,
          "price": facts.pricingOffers.free.price,
          "priceCurrency": facts.pricingOffers.currency,
          "description": facts.pricingOffers.free.description
        },
        {
          "@type": "Offer",
          "name": facts.pricingOffers.monthly.name,
          "price": facts.pricingOffers.monthly.price,
          "priceCurrency": facts.pricingOffers.currency,
          "description": facts.pricingOffers.monthly.description
        },
        {
          "@type": "Offer",
          "name": facts.pricingOffers.yearly.name,
          "price": facts.pricingOffers.yearly.price,
          "priceCurrency": facts.pricingOffers.currency,
          "description": facts.pricingOffers.yearly.description
        },
        {
          "@type": "Offer",
          "name": facts.pricingOffers.lifetime.name,
          "price": facts.pricingOffers.lifetime.price,
          "priceCurrency": facts.pricingOffers.currency,
          "description": facts.pricingOffers.lifetime.description
        }
      ]
    },
    "creator": { "@id": facts.ids.publisher },
    "publisher": { "@id": facts.ids.publisher },
    "sameAs": facts.sameAs
  };
}

function breadcrumbNode(items) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

function faqPageNode(post, url) {
  const keyword = String(post.data.primaryKeyword || "").toLowerCase();
  const title = String(post.data.title || "").toLowerCase();
  const tags = new Set(post.data.tags || []);
  const mainEntity = [];

  function add(name, text) {
    mainEntity.push({
      "@type": "Question",
      "name": name,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": text
      }
    });
  }

  if (post.category === "adhd" || tags.has("adhd") || keyword.includes("adhd") || title.includes("adhd")) {
    add(
      "Is Flowtime good for ADHD time blindness?",
      "Flowtime can support people who benefit from visible timers, focus reminders, flexible session boundaries, and low-friction project switching. It is not a medical product, diagnostic tool, or ADHD treatment."
    );
    add(
      "Can Flowtime help with hyperfocus?",
      "Flowtime can act as a hyperfocus timer by making session time visible and adding reminders that create check-in points without forcing every session into a rigid interval."
    );
  }

  if (post.category === "comparison" || keyword.includes("pomodoro") || title.includes("pomodoro")) {
    add(
      "Is Flowtime a Pomodoro alternative?",
      "Flowtime includes Pomodoro and also supports flexible Flow Sessions, so it can work as a Pomodoro timer or a flexible Pomodoro alternative depending on the task."
    );
  }

  if (post.category === "comparison" || tags.has("app blocking") || keyword.includes("app blocker")) {
    add(
      "Can Flowtime block distracting apps?",
      "Flowtime includes optional app blocking where available, so distracting apps can be made less available during intentional focus sessions."
    );
  }

  if (post.category === "comparison" || post.category === "guides" || post.category === "adhd") {
    add(
      "Does Flowtime require an account?",
      "No account is required to use Flowtime. Timer and project data are stored locally on the device according to the Flowtime privacy policy."
    );
    add(
      "Does Flowtime work on iPhone and Android?",
      "Yes. Flowtime is available for iPhone on the App Store and for Android on Google Play."
    );
  }

  if (!mainEntity.length) {
    return null;
  }

  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    "mainEntity": mainEntity
  };
}

function articleSchema(post, url, description, socialImage, type, language = "en") {
  const graph = [
    publisherNode(),
    authorNode(),
    websiteNode(),
    softwareNode(),
    {
      "@type": type,
      "headline": post.data.title,
      "description": description,
      "datePublished": post.data.date,
      "dateModified": post.data.dateModified || post.data.updated || post.data.date,
      "author": { "@id": facts.ids.author },
      "publisher": { "@id": facts.ids.publisher },
      "mainEntityOfPage": url,
      "image": socialImage,
      "inLanguage": language,
      "isPartOf": { "@id": facts.ids.website },
      "about": { "@id": facts.ids.software }
    },
    breadcrumbNode([
      { name: facts.name, url: facts.canonicalUrl },
      { name: post.category === "comparison" ? "Comparisons" : (post.category === "adhd" ? "ADHD" : "Guides"), url: `${facts.siteUrl}/${post.category}/` },
      { name: post.data.title, url }
    ])
  ];
  const faq = faqPageNode(post, url);
  if (faq) {
    graph.push(faq);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

module.exports = {
  facts,
  publisherNode,
  authorNode,
  websiteNode,
  softwareNode,
  breadcrumbNode,
  articleSchema
};
