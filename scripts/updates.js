/**
 * Public Updates Client Script
 * Handles page rendering, tag filtering, text searching, and SPA routing.
 */
(function () {
  // 1. Localization Strings
  const translations = {
    en: {
      "updates.eyebrow": "Product Updates",
      "updates.title": "What's new in Flowtime.",
      "updates.description": "A log of our latest releases, design iterations, milestones, and news curated from our social channels.",
      "updates.searchPlaceholder": "Search updates...",
      "updates.empty": "No updates match your search parameters.",
      "updates.back": "Back to updates",
      "updates.readOriginal": "Read original post on {platform}",
      "updates.count": "{count} updates",
      "updates.countSingle": "1 update",
      "updates.all": "All",
      "updates.readMore": "Read full update →",
      "updates.curated": "This update was curated from a social media post."
    },
    de: {
      "updates.eyebrow": "Produkt-Updates",
      "updates.title": "Neues bei Flowtime.",
      "updates.description": "Ein Protokoll unserer neuesten Veröffentlichungen, Design-Iterationen, Meilensteine und Nachrichten aus unseren sozialen Kanälen.",
      "updates.searchPlaceholder": "Updates durchsuchen...",
      "updates.empty": "Keine Updates entsprechen Ihren Suchkriterien.",
      "updates.back": "Zurück zu den Updates",
      "updates.readOriginal": "Originalen Beitrag auf {platform} lesen",
      "updates.count": "{count} Updates",
      "updates.countSingle": "1 Update",
      "updates.all": "Alle",
      "updates.readMore": "Vollständiges Update lesen →",
      "updates.curated": "Dieses Update wurde aus einem Social-Media-Beitrag kuratiert."
    },
    fr: {
      "updates.eyebrow": "Mises à jour",
      "updates.title": "Quoi de neuf chez Flowtime.",
      "updates.description": "Un journal de nos dernières versions, itérations de design, étapes clés et actualités issues de nos réseaux sociaux.",
      "updates.searchPlaceholder": "Rechercher...",
      "updates.empty": "Aucune mise à jour ne correspond à vos critères de recherche.",
      "updates.back": "Retour aux mises à jour",
      "updates.readOriginal": "Lire le post original sur {platform}",
      "updates.count": "{count} mises à jour",
      "updates.countSingle": "1 mise à jour",
      "updates.all": "Tous",
      "updates.readMore": "Lire la mise à jour complète →",
      "updates.curated": "Cette mise à jour a été sélectionnée à partir d'une publication sur les réseaux sociaux."
    }
  };

  // Register translations with global i18n system
  if (window.flowtimeAddTranslations) {
    Object.keys(translations).forEach(locale => {
      window.flowtimeAddTranslations(locale, translations[locale]);
    });
  }

  // Local helper to translate key
  function getTxt(key, replacements) {
    const locale = window.flowtimeLocale || "en";
    let text = (translations[locale] && translations[locale][key]) || translations.en[key] || key;
    if (replacements) {
      Object.keys(replacements).forEach(r => {
        text = text.replace(new RegExp(`\\{${r}\\}`, 'g'), replacements[r]);
      });
    }
    return text;
  }

  // Local helper to scan elements and translate page text
  function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = getTxt(key);
      if (text && text !== key) {
        if (el.tagName === 'INPUT') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });
  }

  // 2. State Variables
  let allUpdates = [];
  let currentFilterTag = '';
  let currentSearchQuery = '';
  let currentSort = 'newest';

  // 3. Elements
  const updatesListView = document.getElementById('updates-list-view');
  const updatesDetailView = document.getElementById('updates-detail-view');
  const updatesGrid = document.getElementById('updates-grid');
  const searchInput = document.getElementById('updates-search-input');
  const sortSelect = document.getElementById('updates-sort-select');
  const tagsContainer = document.getElementById('updates-tags-container');
  const countDisplay = document.getElementById('updates-count-display');
  const emptyDisplay = document.getElementById('updates-empty-display');

  // Detail View elements
  const detailPlatformBadge = document.getElementById('detail-platform-badge');
  const detailDate = document.getElementById('detail-date');
  const detailTitle = document.getElementById('detail-title');
  const detailDescription = document.getElementById('detail-description');
  const detailTags = document.getElementById('detail-tags');
  const detailBody = document.getElementById('detail-body');
  const detailEmbedWrapper = document.getElementById('detail-embed-wrapper');
  const detailOriginalLinkWrapper = document.getElementById('detail-original-link-wrapper');
  const detailOriginalLink = document.getElementById('detail-original-link');
  const backBtn = document.getElementById('back-to-updates-btn');

  // 4. Client-side Markdown-to-HTML parser
  function parseMarkdownToHtml(markdown) {
    if (!markdown) return '';
    let html = markdown;
    
    // Escape HTML entities to prevent XSS
    html = html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Headings
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

    // Bold text (**word**)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Markdown Links [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, url) => {
      const safeUrl = getSafeMarkdownUrl(url);
      return safeUrl
        ? `<a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">${label}</a>`
        : label;
    });

    // Bullet Lists (- line or * line)
    // Replace contiguous lists with <ul><li>...</li></ul>
    let lines = html.split('\n');
    let inList = false;
    let newLines = [];

    lines.forEach(line => {
      let trimmed = line.trim();
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        if (!inList) {
          newLines.push('<ul>');
          inList = true;
        }
        newLines.push(`<li>${trimmed.slice(2)}</li>`);
      } else {
        if (inList) {
          newLines.push('</ul>');
          inList = false;
        }
        newLines.push(line);
      }
    });
    if (inList) newLines.push('</ul>');
    html = newLines.join('\n');

    // Paragraphs (double newlines)
    html = html.split(/\n\n+/).map(p => {
      p = p.trim();
      if (!p) return '';
      // Skip wrapping list tags and headers inside paragraphs
      if (p.startsWith('<ul>') || p.startsWith('<h') || p.startsWith('<li>')) {
        return p;
      }
      return `<p>${p.replace(/\n/g, '<br />')}</p>`;
    }).filter(Boolean).join('\n');

    return html;
  }

  // Formats Dates in human readable form depending on local
  function formatPublishDate(dateStr) {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat(window.flowtimeLocale || 'en', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(date);
    } catch(e) {
      return dateStr;
    }
  }

  // Gets platform labels
  function getPlatformLabel(platform) {
    if (platform === 'x') return 'X';
    if (!platform) return 'Update';
    return platform.charAt(0).toUpperCase() + platform.slice(1);
  }

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getSafeHttpUrl(url) {
    if (!url) return null;
    try {
      const parsed = new URL(String(url), window.location.origin);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:' ? parsed.href : null;
    } catch (e) {
      return null;
    }
  }

  function getSafeMarkdownUrl(url) {
    if (!url) return null;
    try {
      const parsed = new URL(String(url), window.location.origin);
      return ['http:', 'https:', 'mailto:'].includes(parsed.protocol) ? parsed.href : null;
    } catch (e) {
      return null;
    }
  }

  function bindPreviewImageFallbacks(scope) {
    (scope || document).querySelectorAll('.update-gallery-preview img').forEach(img => {
      img.addEventListener('error', () => {
        const preview = img.closest('.update-gallery-preview');
        if (preview) preview.classList.add('has-no-media');
        img.remove();
      }, { once: true });
    });
  }

  function getThreadsEmbedHtml(update) {
    const safeOriginalUrl = getSafeHttpUrl(update.originalUrl);
    if (!safeOriginalUrl || update.platform !== 'threads') return '';
    return `<blockquote class="text-post-media" data-text-post-permalink="${escapeHtml(safeOriginalUrl)}" data-text-post-version="0"><a href="${escapeHtml(safeOriginalUrl)}" target="_blank" rel="noopener noreferrer"></a></blockquote>`;
  }

  function loadThreadsEmbed() {
    document.querySelectorAll('script[data-flowtime-threads-embed]').forEach(script => script.remove());
    const script = document.createElement('script');
    script.async = true;
    script.dataset.flowtimeThreadsEmbed = 'true';
    script.src = `https://www.threads.com/embed.js?refresh=${Date.now()}`;
    document.body.appendChild(script);
  }

  function getUpdatePreviewMarkup(update) {
    const thumbnail = getSafeHttpUrl(update.thumbnailUrl) || '';
    const isGeneratedInstagramThumb =
      thumbnail.includes('images.weserv.nl') && thumbnail.includes('instagram.com');

    if (update.platform === 'instagram' && update.externalPostId && (!thumbnail || isGeneratedInstagramThumb)) {
      return `
        <iframe
          class="update-gallery-embed"
          src="https://www.instagram.com/p/${escapeHtml(update.externalPostId)}/embed/captioned/"
          loading="lazy"
          scrolling="no"
          tabindex="-1"
          aria-hidden="true"
          title="${escapeHtml(update.title)}"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
      `;
    }

    if (thumbnail) {
      return `
        <img
          src="${escapeHtml(thumbnail)}"
          alt=""
          loading="lazy"
          decoding="async"
        />
      `;
    }

    return '';
  }

  // 5. Routing Logic (Router)
  function getSlugFromUrl() {
    // Priority 1: Pathname routing (production rewrite fallback)
    // URL structure e.g. /updates/slug-name
    const pathname = window.location.pathname;
    const parts = pathname.split('/').filter(Boolean);
    const updatesIndex = parts.indexOf('updates');
    if (updatesIndex >= 0 && parts.length > updatesIndex + 1) {
      const potentialSlug = parts[updatesIndex + 1];
      if (potentialSlug && potentialSlug !== 'index.html') {
        return potentialSlug;
      }
    }

    // Priority 2: Query param (?slug=...)
    const params = new URLSearchParams(window.location.search);
    if (params.has('slug')) {
      return params.get('slug');
    }

    // Priority 3: Hash fallback (#...)
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      return hash.substring(1);
    }

    return null;
  }

  function handleRoute() {
    translatePage();
    const slug = getSlugFromUrl();
    if (slug) {
      // Find update
      const update = window.UpdatesDB ? window.UpdatesDB.getBySlug(slug) : null;
      if (update && update.status === 'published') {
        renderDetailView(update);
      } else {
        // Fallback to list
        renderListView();
      }
    } else {
      renderListView();
    }
  }

  // 6. View Rendering
  function renderListView() {
    updatesDetailView.hidden = true;
    updatesListView.hidden = false;
    document.title = getTxt("updates.eyebrow") + " - Flowtime";

    // Load from DB
    if (window.UpdatesDB) {
      allUpdates = window.UpdatesDB.getAll().filter(u => u.status === 'published');
    } else {
      allUpdates = [];
    }

    renderFilters();
    filterAndRenderUpdates();
  }

  function renderFilters() {
    if (!tagsContainer) return;
    
    // Find all tags in published updates
    const tags = new Set();
    allUpdates.forEach(u => {
      if (Array.isArray(u.tags)) {
        u.tags.forEach(t => tags.add(t.trim().toLowerCase()));
      }
    });

    const sortedTags = Array.from(tags).sort();
    
    // Create Tag buttons
    let html = `<button class="blog-tag-button" data-tag="" aria-pressed="${currentFilterTag === '' ? 'true' : 'false'}">${getTxt('updates.all')}</button>`;
    
    sortedTags.forEach(tag => {
      const isPressed = currentFilterTag === tag;
      html += `<button class="blog-tag-button" data-tag="${escapeHtml(tag)}" aria-pressed="${isPressed ? 'true' : 'false'}">#${escapeHtml(tag)}</button>`;
    });

    tagsContainer.innerHTML = html;
  }

  function filterAndRenderUpdates() {
    // Filter
    let filtered = allUpdates.filter(u => {
      // Search matches title, description, content or platform
      const q = currentSearchQuery.toLowerCase();
      const matchesSearch = !q || 
        String(u.title || '').toLowerCase().includes(q) ||
        String(u.description || '').toLowerCase().includes(q) ||
        String(u.body || '').toLowerCase().includes(q) ||
        getPlatformLabel(u.platform).toLowerCase().includes(q);

      // Tag filter matches
      const matchesTag = !currentFilterTag || 
        (Array.isArray(u.tags) && u.tags.some(t => String(t || '').toLowerCase() === currentFilterTag));

      return matchesSearch && matchesTag;
    });

    // Sort
    filtered.sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.createdAt);
      const dateB = new Date(b.publishedAt || b.createdAt);
      return currentSort === 'newest' ? dateB - dateA : dateA - dateB;
    });

    // Count
    if (countDisplay) {
      if (filtered.length === 1) {
        countDisplay.textContent = getTxt('updates.countSingle');
      } else {
        countDisplay.textContent = getTxt('updates.count', { count: filtered.length });
      }
    }

    // Grid rendering
    if (filtered.length === 0) {
      updatesGrid.innerHTML = '';
      emptyDisplay.hidden = false;
      return;
    }
    emptyDisplay.hidden = true;

    updatesGrid.classList.add('updates-gallery-grid');
    updatesGrid.innerHTML = filtered.map(u => {
      const tagHtml = Array.isArray(u.tags) 
        ? u.tags.map(t => `<span class="article-tag">#${escapeHtml(t)}</span>`).join('')
        : '';
      
      // Determine links
      // We will link using hash #slug so that SPA transition works seamlessly
      const linkHref = `#${encodeURIComponent(u.slug || '')}`;
      const thumbnail = getSafeHttpUrl(u.thumbnailUrl);
      const isTextOnly = u.platform === 'threads' && !thumbnail;
      const previewMarkup = getUpdatePreviewMarkup(u);
      const previewClass = previewMarkup ? '' : ' has-no-media';
      const publishedDate = u.publishedAt || u.createdAt;
      const summary = u.description || (isTextOnly ? u.body : '');

      if (isTextOnly) {
        return `
          <a class="update-gallery-card update-gallery-card-text" href="${linkHref}">
            <div class="update-gallery-copy">
              <span class="platform-badge" data-platform="${escapeHtml(u.platform)}">${escapeHtml(getPlatformLabel(u.platform))}</span>
              <h2>${escapeHtml(u.title)}</h2>
              <time class="update-gallery-date" datetime="${escapeHtml(publishedDate)}">${formatPublishDate(publishedDate)}</time>
              ${summary ? `<p>${escapeHtml(summary)}</p>` : ''}
            </div>
            <div class="update-gallery-tags">
              ${tagHtml}
            </div>
          </a>
        `;
      }

      return `
        <a class="update-gallery-card" href="${linkHref}">
          <div class="update-gallery-preview${previewClass}">
            ${previewMarkup}
            <div class="update-gallery-fallback" aria-hidden="true">
              <span>${escapeHtml(getPlatformLabel(u.platform))}</span>
            </div>
          </div>
          <div class="update-gallery-copy">
            <h2>${escapeHtml(u.title)}</h2>
            <time class="update-gallery-date" datetime="${escapeHtml(publishedDate)}">${formatPublishDate(publishedDate)}</time>
            ${summary ? `<p>${escapeHtml(summary)}</p>` : ''}
          </div>
          <div class="update-gallery-tags">
            ${tagHtml}
          </div>
        </a>
      `;
    }).join('');
    bindPreviewImageFallbacks(updatesGrid);
  }

  function renderDetailView(update) {
    updatesListView.hidden = true;
    updatesDetailView.hidden = false;
    document.title = update.title + " - Flowtime";

    // Header values
    detailPlatformBadge.textContent = getPlatformLabel(update.platform);
    detailPlatformBadge.setAttribute('data-platform', update.platform || 'manual');
    detailDate.textContent = formatPublishDate(update.publishedAt || update.createdAt);
    detailDate.setAttribute('datetime', update.publishedAt || update.createdAt);
    detailTitle.textContent = update.title;
    detailDescription.textContent = update.description;

    // Tags
    if (Array.isArray(update.tags) && update.tags.length > 0) {
      detailTags.innerHTML = update.tags.map(t => `<span class="article-tag">#${escapeHtml(t)}</span>`).join('');
      detailTags.hidden = false;
    } else {
      detailTags.hidden = true;
    }

    // Body text (parsed markdown)
    detailBody.innerHTML = parseMarkdownToHtml(update.body);

    // Social Embed Iframe
    if (update.externalPostId) {
      let iframeSrc = '';
      switch (update.platform) {
        case 'x':
          iframeSrc = `https://platform.twitter.com/embed/Tweet.html?id=${encodeURIComponent(update.externalPostId)}&theme=light`;
          break;
        case 'bluesky':
          iframeSrc = update.originalUrl ? `https://embed.bsky.app/static/embed.html?url=${encodeURIComponent(update.originalUrl)}` : '';
          break;
        case 'instagram':
          iframeSrc = `https://www.instagram.com/p/${encodeURIComponent(update.externalPostId)}/embed/captioned/`;
          break;
        case 'linkedin':
          iframeSrc = `https://www.linkedin.com/embed/feed/update/urn:li:share:${encodeURIComponent(update.externalPostId)}`;
          break;
      }

      const safeThumbnailUrl = getSafeHttpUrl(update.thumbnailUrl);
      if (iframeSrc) {
        detailEmbedWrapper.innerHTML = `<iframe src="${escapeHtml(iframeSrc)}" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" allowfullscreen loading="lazy" scrolling="no"></iframe>`;
        detailEmbedWrapper.hidden = false;
      } else if (safeThumbnailUrl) {
        detailEmbedWrapper.innerHTML = `<img src="${escapeHtml(safeThumbnailUrl)}" alt="" loading="lazy" decoding="async" />`;
        detailEmbedWrapper.hidden = false;
      } else if (update.platform === 'threads') {
        const threadsEmbedHtml = getThreadsEmbedHtml(update);
        detailEmbedWrapper.innerHTML = threadsEmbedHtml;
        detailEmbedWrapper.hidden = !threadsEmbedHtml;
        if (threadsEmbedHtml) loadThreadsEmbed();
      } else {
        detailEmbedWrapper.innerHTML = '';
        detailEmbedWrapper.hidden = true;
      }
    } else {
      const safeThumbnailUrl = getSafeHttpUrl(update.thumbnailUrl);
      if (safeThumbnailUrl) {
        detailEmbedWrapper.innerHTML = `<img src="${escapeHtml(safeThumbnailUrl)}" alt="" loading="lazy" decoding="async" />`;
        detailEmbedWrapper.hidden = false;
      } else if (update.platform === 'threads') {
        const threadsEmbedHtml = getThreadsEmbedHtml(update);
        detailEmbedWrapper.innerHTML = threadsEmbedHtml;
        detailEmbedWrapper.hidden = !threadsEmbedHtml;
        if (threadsEmbedHtml) loadThreadsEmbed();
      } else {
        detailEmbedWrapper.innerHTML = '';
        detailEmbedWrapper.hidden = true;
      }
    }

    // Original Link
    const safeOriginalUrl = getSafeHttpUrl(update.originalUrl);
    if (safeOriginalUrl && update.platform !== 'manual') {
      detailOriginalLink.href = safeOriginalUrl;
      detailOriginalLink.textContent = getTxt('updates.readOriginal', { platform: getPlatformLabel(update.platform) });
      detailOriginalLinkWrapper.hidden = false;
    } else {
      detailOriginalLinkWrapper.hidden = true;
    }

    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // 7. Event Listeners
  if (searchInput) {
    searchInput.placeholder = getTxt('updates.searchPlaceholder');
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      filterAndRenderUpdates();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      filterAndRenderUpdates();
    });
  }

  if (tagsContainer) {
    tagsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.blog-tag-button');
      if (!btn) return;
      currentFilterTag = btn.dataset.tag;
      renderFilters();
      filterAndRenderUpdates();
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Remove hash or params to go back
      window.location.hash = '';
      // Also clean up slug query param if present
      if (new URLSearchParams(window.location.search).has('slug')) {
        const url = new URL(window.location.href);
        url.searchParams.delete('slug');
        window.history.pushState({}, '', url.pathname + url.search);
      }
      renderListView();
    });
  }

  // Routing events
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('popstate', handleRoute);

  // Initialize
  handleRoute();
})();
