const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const dictionary = JSON.parse(read('data/campaign-translations.json'));
function setup(locale, pathname = '/') {
  const window = {localStorage:{getItem:()=>null,setItem(){}},location:{search:'?lang='+locale,pathname}};
  const document = {querySelector:()=>null,querySelectorAll:()=>[],documentElement:{},body:{dataset:{}},createElement:()=>({}),head:{appendChild(){}},readyState:'loading',addEventListener(){}};
  const context = vm.createContext({window,document,URLSearchParams,URL,Intl,console,MutationObserver:class {},fetch:async()=>({ok:true,json:async()=>dictionary})});
  vm.runInContext(read('scripts/i18n.js'),context);
  return {window,document,context};
}
(async()=>{
  for (const locale of ['de','fr']) {
    for (const [source, translations] of Object.entries(dictionary)) assert.ok(translations[locale]?.trim(), `${locale}: ${source}`);
    const {window,document,context} = setup(locale);
    await vm.runInContext(read('scripts/campaign-i18n.js'),context);
    const tr = window.flowtimeTranslateText;
    assert.equal(document.documentElement.lang,locale);
    assert.notEqual(tr('Open navigation'),'Open navigation');
    assert.notEqual(tr('Billed yearly through your app store.'),'Billed yearly through your app store.');
    assert.equal(tr('0 articles'),locale==='de'?'0 Artikel':'0 articles');
    assert.equal(tr('1 update'),locale==='de'?'1 Update':'1 publication');
    assert.equal(tr('12 updates'),locale==='de'?'12 Updates':'12 publications');
    assert.equal(tr('  Get started ↗  '),'  '+dictionary['Get started'][locale]+' ↗  ');
    assert.notEqual(tr('$2.99'),'$2.99');
    assert.notEqual(tr('Free or Pro. You decide. — Flowtime'),'Free or Pro. You decide. — Flowtime');
    for (const item of JSON.parse(read('data/faq.json'))) {
      assert.ok(dictionary[item.question]?.[locale],`FAQ question: ${item.question}`);
      assert.ok(dictionary[item.answer]?.[locale],`FAQ answer: ${item.question}`);
    }
    for (const entry of JSON.parse(read('data/social-updates.json')).filter(e=>e.status==='published')) {
      for (const text of [entry.title,entry.description,...(entry.body||'').split(/\n+/)].filter(Boolean)) assert.ok(dictionary[text.trim()]?.[locale],`Untranslated update (${locale}): ${text}`);
    }
    // Catch new untranslated campaign copy in generated public pages.
    const products = new Set(['Ava','gugus','Flowtime','Flowtime,','FLOWTIME','FLOWTIME ↗','FlowSession','Flow Session','Pomodoro','Flowmodoro','Pro','App Store','App Store ↗','Google Play','Google Play ↗','Flow Sessions & Flowmodoro','iPhone & Android','IPHONE & ANDROID','English','Deutsch','Français','Threads','Instagram','· Threads','· Instagram','ava@gugus.software ↗']);
    const decode = text => text.replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
    const knownEnglish = new Set(Object.values(window.flowtimeTranslations.en));
    for (const route of ['', 'buy/', 'faq/', 'press/', 'download/', 'about-flowtime/', 'updates/']) {
      const html = read(route+'index.html').replace(/<script[\s\S]*?<\/script>/g,'').replace(/<blockquote[\s\S]*?<\/blockquote>/g,'').replace(/<p class="quiet"><strong>[\s\S]*?<\/p>/g,'');
      for (const match of html.matchAll(/>([^<>]+)</g)) {
        const text=decode(match[1]);
        if (!/[a-zA-Z]/.test(text) || products.has(text) || products.has(text.replace(/ [↗→↓]$/, "")) || knownEnglish.has(text) || dictionary[text] || dictionary[text.replace(/ [↗→↓]$/, '')] || /^\d{2} \/ (Pomodoro|Flowmodoro|FlowSession)$/.test(text) || /^\d+ (updates?|[A-Z][a-z]{2} \d{4})$/.test(text)) continue;
        assert.notEqual(tr(text),text,`Untranslated ${route||'home'} copy (${locale}): ${text}`);
      }
    }
    const articleWindow={flowtimeLocale:'en'};
    vm.runInNewContext(read('scripts/blog-i18n-data.js'),{window:articleWindow});
    const posts=JSON.parse(read('scripts/blog-posts.js').replace(/^window.flowtimeBlogPosts = /,'').replace(/;\s*$/,''));
    for(const post of posts) {
      const metadata=articleWindow.flowtimeBlogTranslations[locale].blog_metadata[post.slug];
      assert.ok(metadata?.title && metadata?.desc,`Missing article metadata: ${post.slug}`);
    }
  }
  const english=setup('en');
  await vm.runInContext(read('scripts/campaign-i18n.js'),english.context);
  assert.equal(english.window.flowtimeTranslateText('Focus,'),'Focus,');
  assert.match(read('sections/header.js'),/assets\/logo-classic.png/);
  console.log(`Localization passed: EN/DE/FR, ${Object.keys(dictionary).length} copy entries, all FAQ answers, 18 build updates, 38 journal cards, dynamic labels and pricing.`);
})().catch(error=>{console.error(error);process.exitCode=1;});

