const fs = require('node:fs');
const path = require('node:path');
const redirects = require('../data/article-redirects.json');
const {siteUrl} = require('../data/product-facts');
const root = path.resolve(__dirname, '..');

// Static-host fallback; supported hosts use the permanent redirects below.
for (const [from, to] of Object.entries(redirects)) {
  if (![from, to].every(route => /^\/(guides|comparison|blog)\/[a-z0-9-]+\/$/.test(route))) {
    throw new Error(`Invalid article redirect: ${from}`);
  }
  if (!fs.existsSync(path.join(root, to, 'index.html'))) throw new Error(`Missing redirect target: ${to}`);
  const dir = path.join(root, from);
  fs.mkdirSync(dir, {recursive: true});
  fs.writeFileSync(path.join(dir, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow">
<title>Article moved — Flowtime</title><link rel="canonical" href="${siteUrl}${to}">
<script>location.replace(${JSON.stringify(to)} + location.search + location.hash);</script>
<noscript><meta http-equiv="refresh" content="0;url=${to}"></noscript>
</head><body><p>This article has moved. <a href="${to}">Read the article</a>.</p></body></html>\n`);
}
fs.writeFileSync(path.join(root, '_redirects'), '# Generated article redirects. Edit data/article-redirects.json.\n' +
  Object.entries(redirects).flatMap(([from, to]) => [
    `${from} ${to} 301!`, `${from.slice(0, -1)} ${to} 301!`, `${from}index.html ${to} 301!`
  ]).join('\n') + '\n');
console.log(`Generated ${Object.keys(redirects).length} article redirects.`);
