/**
 * Admin Social Library Script
 * Drives dashboard filters, URL importing, inline edits, delete confirmations, and live previews.
 */
(function () {
  // 1. State Variables
  let activeTab = 'all';
  let searchQuery = '';
  let platformFilter = 'all';

  // 2. Elements
  const importForm = document.getElementById('import-form');
  const importInput = document.getElementById('import-url-input');
  
  const statusTabs = document.getElementById('status-tabs');
  const adminSearchInput = document.getElementById('admin-search-input');
  const adminPlatformFilter = document.getElementById('admin-platform-filter');
  
  const itemsList = document.getElementById('admin-items-list');
  const emptyState = document.getElementById('admin-empty-state');

  // Edit Modal Elements
  const editModal = document.getElementById('edit-modal');
  const editForm = document.getElementById('edit-form');
  const editModalClose = document.getElementById('edit-modal-close');
  const editCancelBtn = document.getElementById('edit-cancel-btn');
  const btnAutoSlug = document.getElementById('btn-auto-slug');
  const modalTitleText = document.getElementById('modal-title-text');

  // Form Fields
  const editId = document.getElementById('edit-id');
  const editTitle = document.getElementById('edit-title');
  const editSlug = document.getElementById('edit-slug');
  const editDescription = document.getElementById('edit-description');
  const editBody = document.getElementById('edit-body');
  const editPlatform = document.getElementById('edit-platform');
  const editStatus = document.getElementById('edit-status');
  const editOriginalUrl = document.getElementById('edit-original-url');
  const editExternalId = document.getElementById('edit-external-id');
  const editTags = document.getElementById('edit-tags');
  const editThumbnail = document.getElementById('edit-thumbnail');
  const editPublishedAt = document.getElementById('edit-published-at');

  // Preview Modal Elements
  const previewModal = document.getElementById('preview-modal');
  const previewModalClose = document.getElementById('preview-modal-close');
  const previewModalCloseBtn = document.getElementById('preview-modal-close-btn');
  const previewPlatformBadge = document.getElementById('preview-platform-badge');
  const previewDate = document.getElementById('preview-date');
  const previewTitle = document.getElementById('preview-title');
  const previewDescription = document.getElementById('preview-description');
  const previewTags = document.getElementById('preview-tags');
  const previewBody = document.getElementById('preview-body');
  const previewEmbedWrapper = document.getElementById('preview-embed-wrapper');
  const previewOriginalLinkWrapper = document.getElementById('preview-original-link-wrapper');
  const previewOriginalLink = document.getElementById('preview-original-link');

  // Helper: Slugify title
  function slugify(text) {
    const slug = String(text || '')
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start
      .replace(/-+$/, '');            // Trim - from end
    return slug || 'update-' + Date.now().toString().slice(-6);
  }

  function getFallbackTitle(update) {
    const platform = update.platform || 'manual';
    const formattedPlatform = platform === 'x'
      ? 'X'
      : platform.charAt(0).toUpperCase() + platform.slice(1);
    return `New Update from ${formattedPlatform}`;
  }

  // Helper: Format platform string
  function getPlatformLabel(platform) {
    if (platform === 'x') return 'X';
    if (!platform) return 'Update';
    return platform.charAt(0).toUpperCase() + platform.slice(1);
  }

  // 3. UI List Rendering
  function loadAndRenderList() {
    if (!window.UpdatesDB) return;
    const updates = window.UpdatesDB.getAll();

    // Filter
    let filtered = updates.filter(u => {
      // Tab filter
      const matchesTab = activeTab === 'all' || u.status === activeTab;

      // Platform filter
      const matchesPlatform = platformFilter === 'all' || u.platform === platformFilter;

      // Search query
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q ||
        String(u.title || '').toLowerCase().includes(q) ||
        String(u.description || '').toLowerCase().includes(q) ||
        String(u.body || '').toLowerCase().includes(q) ||
        (Array.isArray(u.tags) && u.tags.some(t => String(t || '').toLowerCase().includes(q)));

      return matchesTab && matchesPlatform && matchesSearch;
    });

    // Sort by updated date descending (newest activity first)
    filtered.sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));

    // Render list
    if (filtered.length === 0) {
      itemsList.innerHTML = '';
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;

    itemsList.innerHTML = filtered.map(u => {
      const publishDateStr = u.publishedAt 
        ? new Date(u.publishedAt).toLocaleDateString() 
        : 'Not Published';

      const tagHtml = Array.isArray(u.tags) && u.tags.length > 0
        ? u.tags.map(t => `<span class="article-tag" style="font-size: 10px; padding: 2px 6px;">#${escapeHtml(t)}</span>`).join(' ')
        : '<span style="color: var(--muted); font-size: 11px; font-style: italic;">No tags</span>';

      const isPublished = u.status === 'published';
      const publishActionText = isPublished ? 'Unpublish' : 'Publish';
      const publishActionClass = isPublished ? '' : 'primary';

      return `
        <div class="admin-item-card" data-id="${escapeHtml(u.id)}">
          <div class="admin-item-main">
            <div class="admin-item-header">
              <span class="platform-badge" data-platform="${escapeHtml(u.platform)}">${escapeHtml(getPlatformLabel(u.platform))}</span>
              <span class="status-badge" data-status="${escapeHtml(u.status)}">${escapeHtml(u.status)}</span>
              <h3 class="admin-item-title">${escapeHtml(u.title)}</h3>
            </div>
            <div class="admin-item-meta">
              <span><strong>Published:</strong> ${escapeHtml(publishDateStr)}</span>
            </div>
            <div style="margin-top: 8px; display: flex; align-items: center; gap: 8px;">
              ${tagHtml}
            </div>
          </div>
          <div class="admin-item-actions">
            <button class="admin-btn small preview-btn">Preview</button>
            <button class="admin-btn small edit-btn">Edit</button>
            <button class="admin-btn small ${publishActionClass} toggle-publish-btn">${publishActionText}</button>
            <button class="admin-btn small danger delete-btn">Delete</button>
          </div>
        </div>
      `;
    }).join('');
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

  // 4. Client-side Markdown-to-HTML parser (matches updates.js)
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

    // Bullet Lists
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

    // Paragraphs
    html = html.split(/\n\n+/).map(p => {
      p = p.trim();
      if (!p) return '';
      if (p.startsWith('<ul>') || p.startsWith('<h') || p.startsWith('<li>')) {
        return p;
      }
      return `<p>${p.replace(/\n/g, '<br />')}</p>`;
    }).filter(Boolean).join('\n');

    return html;
  }

  // 5. Modal Dialog Handlers
  function openEditModal(update) {
    editId.value = update.id;
    editTitle.value = update.title;
    editSlug.value = update.slug;
    editDescription.value = update.description;
    editBody.value = update.body;
    editPlatform.value = update.platform;
    editStatus.value = update.status;
    editOriginalUrl.value = update.originalUrl || '';
    editExternalId.value = update.externalPostId || '';
    editThumbnail.value = update.thumbnailUrl || '';
    
    // Format tags
    editTags.value = Array.isArray(update.tags) ? update.tags.join(', ') : '';

    // Format datetime-local
    if (update.publishedAt) {
      const date = new Date(update.publishedAt);
      // Format to YYYY-MM-DDThh:mm
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      const hh = String(date.getHours()).padStart(2, '0');
      const min = String(date.getMinutes()).padStart(2, '0');
      editPublishedAt.value = `${yyyy}-${mm}-${dd}T${hh}:${min}`;
    } else {
      editPublishedAt.value = '';
    }

    modalTitleText.textContent = 'Edit Update Entry';

    editModal.classList.add('is-open');
    document.body.classList.add('has-modal');
  }

  function closeEditModal() {
    editModal.classList.remove('is-open');
    document.body.classList.remove('has-modal');
    editForm.reset();
  }

  function openPreviewModal(update) {
    previewPlatformBadge.textContent = getPlatformLabel(update.platform);
    previewPlatformBadge.setAttribute('data-platform', update.platform || 'manual');
    
    const displayDate = update.publishedAt || update.createdAt || new Date().toISOString();
    previewDate.textContent = new Date(displayDate).toLocaleDateString(undefined, {
      month: 'long', day: 'numeric', year: 'numeric'
    });
    
    previewTitle.textContent = update.title;
    previewDescription.textContent = update.description;

    // Tags
    if (Array.isArray(update.tags) && update.tags.length > 0) {
      previewTags.innerHTML = update.tags.map(t => `<span class="article-tag">#${escapeHtml(t)}</span>`).join('');
      previewTags.hidden = false;
    } else {
      previewTags.hidden = true;
    }

    // Body content
    previewBody.innerHTML = parseMarkdownToHtml(update.body);

    // Iframe Embed Code
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
        case 'threads':
          iframeSrc = `https://www.threads.net/embed/post/${encodeURIComponent(update.externalPostId)}`;
          break;
        case 'linkedin':
          iframeSrc = `https://www.linkedin.com/embed/feed/update/urn:li:share:${encodeURIComponent(update.externalPostId)}`;
          break;
      }

      if (iframeSrc) {
        previewEmbedWrapper.innerHTML = `<iframe src="${escapeHtml(iframeSrc)}" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" allowfullscreen loading="lazy" scrolling="no"></iframe>`;
        previewEmbedWrapper.hidden = false;
      } else {
        previewEmbedWrapper.hidden = true;
      }
    } else {
      previewEmbedWrapper.hidden = true;
    }

    // Original URL
    const safeOriginalUrl = getSafeHttpUrl(update.originalUrl);
    if (safeOriginalUrl && update.platform !== 'manual') {
      previewOriginalLink.href = safeOriginalUrl;
      previewOriginalLink.textContent = `Read original post on ${getPlatformLabel(update.platform)}`;
      previewOriginalLinkWrapper.hidden = false;
    } else {
      previewOriginalLinkWrapper.hidden = true;
    }

    previewModal.classList.add('is-open');
    document.body.classList.add('has-modal');
  }

  function closePreviewModal() {
    previewModal.classList.remove('is-open');
    document.body.classList.remove('has-modal');
    previewEmbedWrapper.innerHTML = '';
  }

  // 6. Interactive Event Handlers
  
  // URL Import Submission
  importForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = importInput.value;
    if (!url) return;

    if (window.SocialImporter && window.UpdatesDB) {
      const draft = window.SocialImporter.createDraftFromUrl(url);
      window.UpdatesDB.save(draft);
      importInput.value = '';
      loadAndRenderList();
      
      // Auto open editor drawer for quick adjustments
      openEditModal(draft);
    }
  });

  // Toolbar tab switching
  statusTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.admin-tab');
    if (!btn) return;
    
    // Toggle active styles
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('is-active'));
    btn.classList.add('is-active');

    activeTab = btn.dataset.status;
    loadAndRenderList();
  });

  // Filter & Search input handlers
  adminSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    loadAndRenderList();
  });

  adminPlatformFilter.addEventListener('change', (e) => {
    platformFilter = e.target.value;
    loadAndRenderList();
  });

  // Button actions in list (edit, delete, preview, publish toggle)
  itemsList.addEventListener('click', (e) => {
    const card = e.target.closest('.admin-item-card');
    if (!card) return;
    const id = card.dataset.id;
    const update = window.UpdatesDB.getById(id);
    if (!update) return;

    if (e.target.classList.contains('delete-btn')) {
      if (confirm(`Are you sure you want to delete the update: "${update.title}"?`)) {
        window.UpdatesDB.delete(id);
        loadAndRenderList();
      }
    } 
    else if (e.target.classList.contains('edit-btn')) {
      openEditModal(update);
    } 
    else if (e.target.classList.contains('preview-btn')) {
      openPreviewModal(update);
    } 
    else if (e.target.classList.contains('toggle-publish-btn')) {
      if (update.status === 'published') {
        update.status = 'draft';
      } else {
        update.status = 'published';
      }
      window.UpdatesDB.save(update);
      loadAndRenderList();
    }
  });

  // Modal interactions
  editModalClose.addEventListener('click', closeEditModal);
  editCancelBtn.addEventListener('click', closeEditModal);
  
  previewModalClose.addEventListener('click', closePreviewModal);
  previewModalCloseBtn.addEventListener('click', closePreviewModal);

  // Auto-slug generation
  btnAutoSlug.addEventListener('click', () => {
    editSlug.value = slugify(editTitle.value);
  });

  // Submit edit form
  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!window.UpdatesDB) return;

    const id = editId.value;
    const originalUpdate = window.UpdatesDB.getById(id) || {};

    // Build tags array
    const tagsVal = editTags.value;
    const tagsArr = tagsVal
      ? tagsVal.split(',').map(t => t.trim().toLowerCase()).filter(Boolean)
      : [];

    // Parse published datetime if filled
    let publishedAtVal = null;
    if (editPublishedAt.value) {
      publishedAtVal = new Date(editPublishedAt.value).toISOString();
    } else if (editStatus.value === 'published') {
      publishedAtVal = originalUpdate.publishedAt || new Date().toISOString();
    }

    const nextPlatform = editPlatform.value || originalUpdate.platform || 'manual';
    const nextTitle = editTitle.value.trim() || getFallbackTitle({ platform: nextPlatform });

    const updatedObject = {
      id: id,
      title: nextTitle,
      slug: slugify(editSlug.value || nextTitle || originalUpdate.slug || id),
      description: editDescription.value.trim(),
      body: editBody.value,
      platform: nextPlatform,
      status: editStatus.value || originalUpdate.status || 'imported',
      originalUrl: editOriginalUrl.value.trim() || null,
      externalPostId: editExternalId.value.trim() || null,
      tags: tagsArr,
      thumbnailUrl: editThumbnail.value.trim() || null,
      publishedAt: publishedAtVal,
      createdAt: originalUpdate.createdAt || new Date().toISOString()
    };

    window.UpdatesDB.save(updatedObject);
    closeEditModal();
    loadAndRenderList();
  });

  // Closing modals on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeEditModal();
      closePreviewModal();
    }
  });

  // Initialize page
  loadAndRenderList();
})();
