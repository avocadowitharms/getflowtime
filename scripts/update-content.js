// Shared by the static build and the browser, so editor updates use the same cards.
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FlowtimeUpdateContent = api;
}(typeof window !== 'undefined' ? window : this, function () {
  const escape = value => String(value || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function safeUrl(value) {
    try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; }
    catch { return ''; }
  }
  function published(entries) {
    return (Array.isArray(entries) ? entries : []).filter(entry => entry && entry.status === 'published' && entry.id && !String(entry.id).startsWith('mock_'))
      .sort((a,b) => (Date.parse(b.publishedAt) || 0) - (Date.parse(a.publishedAt) || 0));
  }
  function paragraphs(text) {
    return String(text || '').trim().split(/\n\s*\n/).filter(Boolean).map(p => `<p>${escape(p).replace(/\n/g, '<br>')}</p>`).join('');
  }
  function artwork(entry) {
    const title = String(entry.title || '');
    const milestone = title.match(/([\d,]+)\s+(downloads|active Flowtime users|people|followers)/i);
    const kind = /mock|today/i.test(title) ? 'evolution' : /group|organized|templates/i.test(title) ? 'stack' : /bug/i.test(title) ? 'debug' : /color|yours/i.test(title) ? 'palette' : /review|featured/i.test(title) ? 'voices' : /version/i.test(title) ? 'release' : /stop focusing/i.test(title) ? 'pause' : 'timer';
    if (!milestone) {
      const shot = /group|organized/i.test(title) ? 'projects.png' : /template/i.test(title) ? 'quickstart.png' : /stop focusing/i.test(title) ? 'blocking.png' : /color|yours/i.test(title) ? 'flowmodorro.png' : /version|bug/i.test(title) ? 'hero-pomodoro-phone.png' : 'juststart.png';
      return `<div class="build-shot-art build-shot-${kind}" aria-hidden="true"><img src="/assets/images/${shot}" alt="" loading="lazy"></div>`;
    }
    const label = /download/i.test(title) ? 'DOWNLOADS & COUNTING' : /followers/i.test(title) ? 'FOLLOWING ALONG' : 'PEOPLE FINDING THEIR FLOW';
    const graphic = `<strong class="build-art-number">${escape(milestone[1])}</strong><span class="build-art-caption">${label}</span><i class="build-art-orbit"></i>`;
    return `<div class="build-post-placeholder build-art-milestone" aria-hidden="true"><div class="build-art-composition">${graphic}</div></div>`;

  }
  function card(entry, index) {
    const platform = entry.platform === 'instagram' ? 'Instagram' : entry.platform === 'threads' ? 'Threads' : 'Original post';
    const url = safeUrl(entry.originalUrl);
    const thumbnail = safeUrl(entry.thumbnailUrl);
    const date = new Date(entry.publishedAt);
    const dateHtml = Number.isNaN(date.getTime()) ? '' : `<time datetime="${escape(entry.publishedAt)}">${date.toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric',timeZone:'UTC'})}</time>`;
    const body = String(entry.body || '').trim();
    const lead = String(entry.description || '').trim();
    const content = `${paragraphs(lead || body.split(/\n\s*\n/)[0])}${(body || lead) ? `<details class="build-post-details"><summary>Read full update</summary><div>${paragraphs(body || lead)}</div></details>` : ''}`;
    const tone = index % 4;
    const classes = ['','update-card-reverse','update-card-dark','update-card-pink update-card-reverse'][tone];
    return `<article class="update-card ${classes}" id="detail-${escape(entry.id)}" data-update-id="${escape(entry.id)}" data-platform="${escape(entry.platform)}" data-slug="${escape(entry.slug)}"><div class="update-card-copy"><div class="meta">${dateHtml} · ${platform}</div><h2>${escape(entry.title)}</h2>${content}<div class="update-links">${url ? `<a class="text-link" href="${escape(url)}" target="_blank" rel="noopener noreferrer">View on ${platform} ↗</a>` : ''}<a class="update-permalink" href="#detail-${escape(entry.id)}" aria-label="Link to ${escape(entry.title)}">Link to update ↗</a></div></div><div class="update-card-preview"><div class="build-post-visual">${artwork(entry)}${thumbnail ? `<img src="${escape(thumbnail)}" alt="Preview of ${escape(entry.title)}" loading="lazy" decoding="async" data-update-thumbnail>` : ''}</div></div></article>`;
  }
  return { published, card };
}));
