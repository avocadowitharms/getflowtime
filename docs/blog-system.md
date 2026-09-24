# Flowtime Blog System

The blog is static and GitHub Pages friendly. There is no database, server-side content storage, or runtime Markdown rendering.

## Routes

- Blog index: `/blog/`
- Article pages: `/guides/post-slug/` and `/comparison/post-slug/`
- Markdown sources: `content/guides/` and `content/comparison/`

For local VS Code file preview, open `blog/index.html` or `blog.html`. Plain `file://` previews often do not resolve a folder URL like `blog/` to `blog/index.html`.

## Add a New Post

1. Create a Markdown file in `content/guides/` or `content/comparison/`.
2. Use this frontmatter:

```md
---
title: "Post title"
description: "One sentence search description."
date: "2026-06-06"
author: "Ava Thalheim"
tags: ["tag one", "tag two"]
featuredImage: ""
draft: false
---
```

3. Include clear H2/H3 headings and comparison tables where useful.
4. Run `npm run build`. This renders article pages, related articles, the searchable blog index, discovery files and sitemap. Draft articles are excluded.
5. Run `npm test` and inspect the local preview with `npm run dev`.

The build generates `scripts/blog-posts.js`; do not edit it by hand. Set `featuredImage` to a local `/assets/...` path to display an article image. Articles without a local image receive a decorative placeholder. Existing translated article URLs are preserved.

## SEO Checklist

Each article page should include:

- Unique `<title>`
- Meta description
- Canonical URL
- Open Graph tags
- Twitter/X tags
- Article schema JSON-LD
- Semantic `<article>` structure
- Author card for Ava Thalheim, Developer of Flowtime

## AI Discoverability

Use:

- A short summary near the top
- Descriptive H2/H3 headings
- FAQ sections with direct answers
- Comparison tables for evaluative posts
- Internal links to related posts

The project does not use TypeScript, so no TypeScript content types are generated.
