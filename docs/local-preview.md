# Local preview

This is a static website. To preview it in Antigravity or any editor with web preview support, run:

```sh
npm run dev
```

The preview server prints the local URL, by default:

```text
http://127.0.0.1:5500/
```

Antigravity can use that running dev server for its built-in preview. If port 5500 is busy, run with another port:

```sh
$env:PORT=5501; npm run dev
```

Before publishing content changes, regenerate article pages and the sitemap:

```sh
npm run build
```