# Flowtime Blog System

The blog is static and GitHub Pages friendly. There is no database, server-side content storage, or runtime Markdown rendering.

## Routes

- Blog index: `/blog/`
- Article pages: `/blog/post-slug/`
- Markdown source: `content/blog/post-slug.md`

For local VS Code file preview, open `blog/index.html` or `blog.html`. Plain `file://` previews often do not resolve a folder URL like `blog/` to `blog/index.html`.

## Add a New Post

1. Create a Markdown file in `content/blog/`.
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

3. Add the post metadata to `scripts/blog-posts.js` so the blog index search and filters can list it.
4. Create `blog/post-slug/index.html` using an existing article page as the template.
5. Include a summary section, clear H2/H3 headings, FAQ entries, and comparison tables where useful.
6. Add previous/next links and related articles based on shared tags.
7. Run `node scripts/generate-sitemap.js` to regenerate `sitemap.xml`.

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
