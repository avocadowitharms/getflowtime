const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const routes = ['', 'blog', 'buy', 'faq', 'press', 'learn', 'pricing', 'support', 'download', 'updates', 'about-flowtime', 'guides', 'comparison'];
for (const category of ['guides', 'comparison']) {
  for (const entry of fs.readdirSync(path.join(root, category), { withFileTypes: true })) {
    if (entry.isDirectory()) routes.push(`${category}/${entry.name}`);
  }
}
routes.push('blog/interrupting-autopilot-conscious-app-blocking', 'de/blog/autopilot-unterbrechen-apps-bewusst-blockieren', 'fr/blog/interrompre-pilote-automatique-blocage-applications');
let checked = 0;
for (const route of routes) {
  const file = route ? `${route}/index.html` : 'index.html';
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${file}: one main heading`);
  assert(!/http-equiv="refresh"/i.test(html), `${file}: must be a usable page`);
  assert(html.includes('id="main-content"'), `${file}: skip link target`);
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(raw)) continue;
    const url = new URL(raw.replaceAll('&amp;', '&'), `https://flowtime-app.com/${file}`);
    let local = path.join(root, decodeURIComponent(url.pathname));
    if (fs.existsSync(local) && fs.statSync(local).isDirectory()) local = path.join(local, 'index.html');
    assert(fs.existsSync(local), `${file}: missing resource ${raw}`);
    if (url.hash && local.endsWith('.html')) {
      const target = fs.readFileSync(local, 'utf8');
      assert(target.includes(`id="${url.hash.slice(1)}"`), `${file}: missing anchor ${raw}`);
    }
    checked++;
  }
}
const pressHtml = fs.readFileSync(path.join(root, 'press/index.html'), 'utf8');
assert(pressHtml.includes('content="noindex, nofollow"'), 'Press must remain unlisted');
for (const file of ['sections/header.js', 'sections/footer.js', 'sitemap.xml', 'llms.txt']) {
  assert(!fs.readFileSync(path.join(root, file), 'utf8').includes('/press/'), `Press exposed in ${file}`);
}
const homeHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert(!homeHtml.includes('id="try"') && !homeHtml.includes('home-timer.js'), 'Removed timer demo must not return');
const faq = fs.readFileSync(path.join(root, 'faq/index.html'), 'utf8');
const updatesHtml = fs.readFileSync(path.join(root, 'updates/index.html'), 'utf8');
const updateContent = require('./update-content');
const published = updateContent.published(require('../data/social-updates.json'));
assert.equal((updatesHtml.match(/data-update-id=/g) || []).length, published.length, 'All published updates must be rendered');
for (const entry of published) {
  assert(updatesHtml.includes(`data-update-id="${entry.id}"`), `Missing update ${entry.id}`);
  assert(updatesHtml.includes(entry.originalUrl.replaceAll('&', '&amp;')), `Missing original post link for ${entry.id}`);
}
assert(!/newsletter|type="email"|build_42|Subscribe for updates/i.test(updatesHtml), 'No signup or demo posts on the build journal');
assert.equal(updateContent.published([{id:'draft',status:'draft'}, {id:'mock_1',status:'published'}]).length, 0, 'Draft and mock entries stay private');
const escapedCard = updateContent.card({id:'test',title:'<img onerror=alert(1)>',body:'<script>alert(1)</script>',originalUrl:'javascript:alert(1)'},0);
assert(!escapedCard.includes('<script>') && !escapedCard.includes('href="javascript:'), 'Update text and links must be escaped');
assert.equal((faq.match(/<details>/g) || []).length, require('../data/faq.json').length);
for (const kit of Object.values(require('../data/press-kit-config').zipPacks)) {
  const bytes = fs.readFileSync(path.resolve(root, 'press', kit.url));
  assert.equal(bytes.subarray(0, 2).toString(), 'PK', `Invalid ZIP: ${kit.url}`);
}
console.log(`Public pages passed: ${routes.length} routes, ${checked} local links/assets, FAQ answers and press archives.`);
