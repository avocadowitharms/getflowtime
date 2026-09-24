# Flowtime website

Static website, with a dependency-free Node.js build.

```sh
npm run build
npm test
npm run dev
```

Preview: http://127.0.0.1:5500. If npm is unavailable, run the Node commands in `package.json` directly.

## Sources

- `templates/home.html`: homepage markup. The build preserves this design and refreshes structured product data.
- `scripts/build-public-pages.js`: Blog, Buy, FAQ, Press, Download, About and article indexes.
- `content/guides/` and `content/comparison/`: Markdown articles. `scripts/render-content-pages.js` renders English and existing localized articles.
- `data/product-facts.js`: shared product facts and prices.
- `data/faq.json`: FAQ categories and answers.
- `data/social-updates.json`: published Follow the Build entries. The static build and browser share `scripts/update-content.js`; `scripts/build-updates-client.js` handles platform filters, entry links and image fallbacks. Original social links and complete post text are preserved.
- `data/press-kit-config.js` and `assets/press/`: press resources in English, German and French.
- `css/design.css` and `css/pages.css`: campaign and editorial layouts.
- `scripts/design.js`: filters, search, billing selector, copy buttons and homepage interactions.
- `data/campaign-translations.json`: German and French translations keyed by the English campaign copy. `scripts/campaign-i18n.js` applies them without replacing links or controls, including dynamic labels, metadata and accessible text. Existing article translations remain in `scripts/blog-i18n-data.js`.
- `scripts/test-localization.js`: checks campaign copy coverage, FAQ answers, build entries, journal metadata and dynamic pricing labels. Runs as part of `npm test`.

Edit sources, then rebuild the checked-in HTML. The former competing Python and campaign generators have been retired so rebuilding cannot restore an outdated layout.

`/learn/`, `/pricing/` and `/support/` remain usable compatibility pages, with canonical URLs pointing to `/blog/`, `/buy/` and `/faq/`. Published article URLs remain intact. Article cards use their actual titles inside colored artwork when no local featured image exists.

Existing administration, update publishing, attribution and traffic tools are retained. See `admin/README.md` and `docs/` for their workflows.

## Cleanup and retained tooling

The homepage timer demo, integrated section mockups, unused analytics initializer, old HTML fragments and superseded screenshot PNGs have been removed. Article pages no longer load the retired theme selector; the local admin still uses it.

The TypeScript analytics modules, C# launchers, security audit, article publishing helpers and local server implementations are maintained tooling, not public-page dependencies. Keep them alongside their JavaScript/browser counterparts. Unused achievement artwork is retained as source artwork. Ignored browser profiles and root preview screenshots are local development state and are not deployed source assets.

The press page is intentionally unlisted (no navigation, sitemap or AI-index links; `noindex`). It is accessible at `/press/`, without authentication. Public-page checks enforce this and verify homepage links too.
