const facts = require("../data/product-facts");

function publisherNode() {
  return {
    "@type": "Person",
    "@id": facts.ids.publisher,
    "name": facts.creatorName,
    "url": facts.creatorUrl,
    "sameAs": facts.officialSocialProfiles,
    "jobTitle": "Creator of Flowtime"
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

function articleSchema(post, url, description, socialImage, type) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      publisherNode(),
      websiteNode(),
      softwareNode(),
      {
        "@type": type,
        "headline": post.data.title,
        "description": description,
        "datePublished": post.data.date,
        "dateModified": post.data.dateModified || post.data.updated || post.data.date,
        "author": { "@id": facts.ids.publisher },
        "publisher": { "@id": facts.ids.publisher },
        "mainEntityOfPage": url,
        "image": socialImage,
        "isPartOf": { "@id": facts.ids.website },
        "about": { "@id": facts.ids.software }
      },
      breadcrumbNode([
        { name: facts.name, url: facts.canonicalUrl },
        { name: post.category === "guides" ? "Guides" : "Comparisons", url: `${facts.siteUrl}/${post.category}/` },
        { name: post.data.title, url }
      ])
    ]
  };
}

module.exports = {
  facts,
  publisherNode,
  websiteNode,
  softwareNode,
  breadcrumbNode,
  articleSchema
};
