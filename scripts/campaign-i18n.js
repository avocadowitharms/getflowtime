/* Localize campaign copy without replacing markup, links or event handlers. */
(async function () {
  const locale = window.flowtimeLocale || 'en';
  const root = window.flowtimeRoot || '/';
  const response = await fetch(root + 'data/campaign-translations.json');
  if (!response.ok) throw new Error('Unable to load campaign translations');
  const entries = await response.json();
  const normalize = value => value.replace(/\s+/g, ' ').trim();
  const dictionary = new Map();
  const legacy = window.flowtimeTranslations || {};
  Object.entries(legacy.en || {}).forEach(([key, value]) => {
    if (typeof value === 'string' && legacy[locale]?.[key]) dictionary.set(normalize(value), legacy[locale][key]);
  });
  Object.entries(entries).forEach(([key, value]) => dictionary.set(normalize(key), value[locale] || key));
  function translate(value) {
    const key = normalize(value);
    if (locale === 'en') return value;
    if (/^\$\d+(?:\.\d+)?$/.test(key)) return value.replace(key, new Intl.NumberFormat(locale, {style:'currency',currency:'USD',maximumFractionDigits:2,minimumFractionDigits:0}).format(Number(key.slice(1))));
    let translated = dictionary.get(key);
    if (!translated) {
      const arrow = key.match(/^(.*?)\s*([↗→↓])$/);
      if (arrow && dictionary.has(arrow[1])) translated = dictionary.get(arrow[1]) + ' ' + arrow[2];
      const count = key.match(/^(\d+) (articles?|updates?)$/);
      if (count) translated = count[1] + ' ' + (locale === 'de' ? (/article/.test(count[2]) ? 'Artikel' : (+count[1] === 1 ? 'Update' : 'Updates')) : (/article/.test(count[2]) ? (+count[1] === 1 ? 'article' : 'articles') : (+count[1] === 1 ? 'publication' : 'publications')));
      const read = key.match(/^(.*?) · (\d+) min read$/);
      if (read) translated = translate(read[1]) + ' · ' + read[2] + (locale === 'de' ? ' Min. Lesezeit' : ' min de lecture');
      const review = key.match(/^(\d+) of (\d+)$/);
      if (review) translated = review[1] + (locale === 'de' ? ' von ' : ' sur ') + review[2];
      const view = key.match(/^View on (.+?)( ↗)?$/);
      if (view) translated = (locale === 'de' ? 'Auf ' + view[1] + ' ansehen' : 'Voir sur ' + view[1]) + (view[2] || '');
      const prefix = key.match(/^(Link to |Preview of )(.+)$/);
      if (prefix) translated = (locale === 'de' ? (prefix[1] === 'Link to ' ? 'Link zu: ' : 'Vorschau: ') : (prefix[1] === 'Link to ' ? 'Lien vers : ' : 'Aperçu : ')) + translate(prefix[2]);
      if (key.endsWith(' — Flowtime')) translated = translate(key.slice(0, -11)) + ' — Flowtime';
    }
    return translated ? value.replace(value.trim(), translated) : value;
  }
  window.flowtimeTranslateText = translate;
  const skip = 'script,style,code,pre,blockquote,[translate="no"],[data-i18n],.blog-article .article-body,.article-summary,.article-toc';
  function apply() {
    observer.disconnect();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement.closest(skip)) continue;
      const next = translate(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    }
    document.querySelectorAll('[aria-label],[aria-roledescription],[alt],[placeholder],[title]').forEach(el => {
      ['aria-label','aria-roledescription','alt','placeholder','title'].forEach(attr => {
        if (el.hasAttribute(attr)) {
          const value = el.getAttribute(attr), next = translate(value);
          if (next !== value) el.setAttribute(attr, next);
        }
      });
    });
    document.querySelectorAll('time[datetime]').forEach(el => {
      const date = new Date(el.getAttribute('datetime'));
      if (!Number.isNaN(date.getTime())) el.textContent = new Intl.DateTimeFormat(locale, {day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(date);
    });
    // The journal redesign retains existing article translations and stable URLs.
    document.querySelectorAll('.learn-entry').forEach(card => {
      const slug = card.getAttribute('href').split('/').filter(Boolean).pop();
      [['h2','blog.title.'],['p','blog.desc.']].forEach(([selector,prefix]) => {
        const key = prefix + slug, value = window.t?.(key), el = card.querySelector(selector);
        if (el && value && value !== key) el.textContent = value;
      });
    });
    document.title = translate(document.title);
    document.querySelectorAll('meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[property="og:image:alt"],meta[name="twitter:title"],meta[name="twitter:description"]').forEach(el => el.content = translate(el.content));
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.content = {en:'en_US',de:'de_DE',fr:'fr_FR'}[locale];
    // Preserve source screenshots and review quotations; translate their surrounding UI.
    document.querySelectorAll('img[src*="en_badge_web_generic.png"]').forEach(img => {
      if (locale !== 'en') img.src = img.src.replace('en_badge_web_generic.png', locale + '_badge_web_generic.png');
    });
    document.querySelectorAll('.press-section a[href*="Flowtime-Press-Fact-Sheet-EN.txt"]').forEach(a => {
      if (locale !== 'en') a.href = '/assets/press/' + {de:'Flowtime-Presse-Faktenblatt-DE.txt',fr:'Flowtime-Fiche-Technique-FR.txt'}[locale];
    });
    observer.observe(document.body, {childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['aria-label']});
  }
  let queued = false;
  const observer = new MutationObserver(records => {
    if (records.every(record => (record.target.nodeType === 1 ? record.target : record.target.parentElement)?.closest(".timer-digits"))) return;
    if (queued) return;
    queued = true;
    queueMicrotask(() => { queued = false; apply(); });
  });
  window.flowtimeLocalizeCampaign = apply;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, {once:true});
  else apply();
}()).catch(error => console.error('Flowtime localization:', error));
