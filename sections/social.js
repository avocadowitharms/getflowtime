(function () {
  var root = window.flowtimeRoot || "";
  var allowedPlatforms = ["manual", "x", "instagram", "threads", "bluesky", "linkedin"];

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getSafeHttpUrl(url) {
    if (!url) return null;
    try {
      var parsed = new URL(String(url), window.location.origin);
      return parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed.href : null;
    } catch (e) {
      return null;
    }
  }

  function getSafePlatform(platform) {
    return allowedPlatforms.indexOf(platform) >= 0 ? platform : "manual";
  }

  function bindImageFallbacks() {
    document.querySelectorAll(".social-post img").forEach(function (img) {
      img.addEventListener("error", function () {
        var card = img.closest(".social-post");
        if (card) card.classList.add("has-no-image");
        img.remove();
      }, { once: true });
    });
  }

  // Dynamic updates loading
  var updates = [];
  try {
    var sourceUpdates = Array.isArray(window.FlowtimeUpdatesData) && window.FlowtimeUpdatesData.length > 0
      ? window.FlowtimeUpdatesData
      : [];

    if (sourceUpdates.length === 0) {
      var rawData = localStorage.getItem('flowtime-updates-data');
      sourceUpdates = rawData ? JSON.parse(rawData) : [];
    }

    updates = sourceUpdates
      .filter(function (u) { return u.status === 'published'; })
      .sort(function (a, b) {
        return new Date(b.publishedAt || b.createdAt) - new Date(a.publishedAt || a.createdAt);
      })
      .slice(0, 5);
  } catch (e) {
    console.error("Failed to load updates for homepage gallery:", e);
  }

  // Compile list of exactly 5 cards to show in the gallery grid
  var cardsToRender = [];

  // Add published updates
  updates.forEach(function (u) {
    var platform = getSafePlatform(u.platform || "manual");
    var platformName = platform === "x" ? "X" : platform.charAt(0).toUpperCase() + platform.slice(1);
    var thumb = getSafeHttpUrl(u.thumbnailUrl);
    var isGeneratedInstagramThumb = thumb && thumb.indexOf("images.weserv.nl") >= 0 && thumb.indexOf("instagram.com") >= 0;
    var embedUrl = (!thumb || isGeneratedInstagramThumb) && platform === "instagram" && u.externalPostId
      ? `https://www.instagram.com/p/${encodeURIComponent(u.externalPostId)}/embed/captioned/`
      : null;
    
    cardsToRender.push({
      href: `${root}updates/index.html#${encodeURIComponent(u.slug || "")}`,
      platformName: platformName,
      title: u.title,
      description: u.description || "",
      platform: platform,
      thumbnailUrl: embedUrl ? null : (thumb || null),
      embedUrl: embedUrl,
      target: ""
    });
  });

  // Fallbacks to pad the gallery so it always has 5 items
  var fallbacks = [
    {
      href: root + "updates/index.html",
      platformName: "Product Feed",
      title: "Read our official updates log",
      description: "Keep track of our design milestones, versions, and new features.",
      platform: "manual",
      thumbnailUrl: null,
      embedUrl: null,
      target: ""
    },
    {
      href: root + "updates/index.html",
      platformName: "X",
      title: "Follow launch notes on X",
      description: "Short notes, release updates, and build-in-public progress from Flowtime.",
      platform: "x",
      thumbnailUrl: null,
      embedUrl: null,
      target: ""
    },
    {
      href: root + "updates/index.html",
      platformName: "Community",
      title: "Connect with other users",
      description: "Join focus sessions, share your templates, and provide feedback.",
      platform: "manual",
      thumbnailUrl: null,
      embedUrl: null,
      target: ""
    },
    {
      href: root + "updates/index.html",
      platformName: "Design",
      title: "See design progress",
      description: "Interface snapshots, feature experiments, and small polish notes.",
      platform: "manual",
      thumbnailUrl: null,
      embedUrl: null,
      target: ""
    },
    {
      href: root + "updates/index.html",
      platformName: "Launch",
      title: "Track release milestones",
      description: "A quick view of what shipped and what is coming next.",
      platform: "manual",
      thumbnailUrl: null,
      embedUrl: null,
      target: ""
    }
  ];

  // Add fallbacks until we have 5 items
  for (var i = 0; i < fallbacks.length; i++) {
    if (cardsToRender.length >= 5) break;
    cardsToRender.push(fallbacks[i]);
  }

  var galleryHtml = "";
  cardsToRender.forEach(function (card, index) {
    var isLarge = index === 0 ? " social-post-large" : "";
    var imgHtml = card.thumbnailUrl
      ? `<img src="${escapeHtml(card.thumbnailUrl)}" alt="" loading="lazy" decoding="async" />`
      : "";
    var embedHtml = card.embedUrl
      ? `<iframe class="social-post-embed" src="${escapeHtml(card.embedUrl)}" loading="lazy" scrolling="no" tabindex="-1" aria-hidden="true" title="${escapeHtml(card.title)}" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`
      : "";
    var hasEmbedClass = card.embedUrl ? " has-embed" : "";
    var hasNoImgClass = card.thumbnailUrl || card.embedUrl ? "" : " has-no-image";
    var platformClass = card.platform ? " social-post-" + escapeHtml(card.platform) : "";
    
    var descHtml = card.description
      ? `<p class="social-post-desc">${escapeHtml(card.description)}</p>`
      : "";

    var targetAttr = card.target ? ` target="${escapeHtml(card.target)}" rel="noopener noreferrer"` : "";

    galleryHtml += `
      <a href="${escapeHtml(card.href)}"${targetAttr} class="social-post${isLarge}${hasEmbedClass}${hasNoImgClass}${platformClass}">
        ${imgHtml}${embedHtml}
        ${descHtml}
        <div>
          <span>${escapeHtml(card.platformName)} Update</span>
          <strong>${escapeHtml(card.title)}</strong>
        </div>
      </a>
    `;
  });

  window.renderSection("social", `
  <section id="social" class="section social-section">
    <div class="section-heading">
      <p class="eyebrow">${window.t("social.eyebrow")}</p>
      <h2>${window.t("social.title")}</h2>
      <p>${window.t("social.description")}</p>
    </div>

    <div class="social-gallery" aria-label="${window.t("social.gallery")}">
      ${galleryHtml}
    </div>
  </section>
  `);
  bindImageFallbacks();
})();
