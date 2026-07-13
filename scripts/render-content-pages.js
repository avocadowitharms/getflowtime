const fs = require("fs");
const path = require("path");
const { facts, articleSchema } = require("./entity-schema");

const root = path.resolve(__dirname, "..");
const siteUrl = facts.siteUrl;
const socialImage = facts.socialImageUrl;
const categories = ["guides", "comparison"];

function securityMeta() {
  return [
    '<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; base-uri \'self\'; object-src \'none\'; img-src \'self\' data: https://flowtime-app.com; script-src \'self\' https://plausible.io \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\'; connect-src \'self\' https://plausible.io; form-action \'self\'; upgrade-insecure-requests" />',
    '<meta name="referrer" content="strict-origin-when-cross-origin" />',
    '<meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), payment=()" />'
  ].join("\n  ");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { data: {}, body: markdown };
  }

  const data = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const separator = line.indexOf(":");
    if (separator < 0) {
      return;
    }
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
    } else {
      value = value.replace(/^"|"$/g, "");
    }
    data[key] = value;
  });

  return { data, body: markdown.slice(match[0].length) };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

function isSafeHref(value) {
  const normalized = String(value).trim().replace(/[\u0000-\u001f\u007f\s]+/g, "");
  if (!normalized) {
    return false;
  }
  if (/^(#|\/(?!\/)|\.{1,2}\/)/.test(normalized)) {
    return true;
  }
  return /^(https?:|mailto:)/i.test(normalized);
}

function inlineText(value) {
  return escapeHtml(value).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function inlineMarkdown(value) {
  const source = String(value);
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let output = "";
  let lastIndex = 0;
  let match;

  while ((match = linkPattern.exec(source)) !== null) {
    output += inlineText(source.slice(lastIndex, match.index));
    output += isSafeHref(match[2])
      ? `<a href="${escapeAttribute(match[2])}">${inlineText(match[1])}</a>`
      : inlineText(match[1]);
    lastIndex = linkPattern.lastIndex;
  }

  return output + inlineText(source.slice(lastIndex));
}

function safeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function markdownToHtml(markdown) {
  const lines = markdown.trim().split(/\r?\n/);
  const html = [];
  let paragraph = [];
  let list = [];
  let table = [];

  function flushParagraph() {
    if (!paragraph.length) {
      return;
    }
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!list.length) {
      return;
    }
    html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
    list = [];
  }

  function flushTable() {
    if (!table.length) {
      return;
    }
    const rows = table
      .filter((row) => !/^\|\s*-+/.test(row))
      .map((row) => row.split("|").slice(1, -1).map((cell) => cell.trim()));
    const head = rows.shift() || [];
    html.push([
      "<table>",
      `<thead><tr>${head.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead>`,
      `<tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody>`,
      "</table>"
    ].join(""));
    table = [];
  }

  function flushAll() {
    flushParagraph();
    flushList();
    flushTable();
  }

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushAll();
      return;
    }

    if (trimmed.startsWith("|")) {
      flushParagraph();
      flushList();
      table.push(trimmed);
      return;
    }

    flushTable();

    const heading = trimmed.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = slugify(text.replace(/\?$/g, ""));
      html.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
      return;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      list.push(trimmed.replace(/^[-*]\s+/, ""));
      return;
    }

    paragraph.push(trimmed);
  });

  flushAll();
  return html.join("\n");
}

function headings(markdown) {
  return markdown
    .split(/\r?\n/)
    .map((line) => line.match(/^##\s+(.+)$/))
    .filter(Boolean)
    .slice(0, 7)
    .map((match) => match[1].trim())
    .map((text) => ({ text, id: slugify(text.replace(/\?$/g, "")) }));
}

function wordCount(markdown) {
  return (markdown.replace(/^---[\s\S]*?---/, "").match(/\b[\w']+\b/g) || []).length;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" })
    .format(new Date(`${value}T00:00:00`));
}

function readingTime(markdown) {
  const minutes = Math.max(4, Math.ceil(wordCount(markdown) / 220));
  return `${minutes} min read`;
}

function relatedArticles(current, posts) {
  const currentTags = new Set(current.data.tags || []);
  return posts
    .filter((post) => post.slug !== current.slug)
    .map((post) => ({
      ...post,
      score: (post.data.tags || []).filter((tag) => currentTags.has(tag)).length
    }))
    .sort((a, b) => b.score - a.score || new Date(b.data.date) - new Date(a.data.date))
    .slice(0, 3);
}

function renderPage(post, posts) {
  const title = post.data.seoTitle || `${post.data.title} - Flowtime`;
  const description = post.data.metaDescription || post.data.description;
  const tags = post.data.tags || [];
  const toc = headings(post.body);
  const bodyHtml = markdownToHtml(post.body);
  const related = relatedArticles(post, posts);
  const url = `${siteUrl}/${post.category}/${post.slug}/`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${securityMeta()}
  <title>${escapeHtml(title)}</title>
  <link rel="icon" type="image/png" href="../../assets/logo-classic.png" />
  <link rel="apple-touch-icon" href="../../assets/logo-classic.png" />
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Flowtime" />
  <meta property="og:title" content="${escapeHtml(post.data.title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${socialImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${escapeHtml(post.data.title)} - Flowtime article preview" />
  <meta property="article:published_time" content="${post.data.date}" />
  <meta property="article:modified_time" content="${post.data.dateModified || post.data.updated || post.data.date}" />
  <meta property="article:author" content="${escapeHtml(post.data.author || "Ava Thalheim")}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(post.data.title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${socialImage}" />
  <meta name="twitter:image:alt" content="${escapeHtml(post.data.title)} - Flowtime article preview" />
  <link rel="stylesheet" href="../../style.css" />
  <link rel="stylesheet" href="../../css/blog.css" />
  <script type="application/ld+json">
    ${safeJsonLd(articleSchema(post, url, description, socialImage, post.category === "guides" ? "BlogPosting" : "Article"))}
  </script>
  <script src="../../scripts/attribution.js"></script>
  <!-- Privacy-friendly analytics by Plausible -->
  <script async src="https://plausible.io/js/pa-0aTxMuaeWykhlYbR-knZ5.js"></script>
  <script>
    window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
    plausible.init()
  </script>
  <script src="../../scripts/conversion-analytics.js"></script>
</head>
<body id="top" data-theme="mono" data-blog-category="${post.category}">
  <div id="site-header"></div>
  <main class="blog-main">
    <article class="blog-article">
      <header class="article-header">
        <p class="eyebrow">${escapeHtml(post.category === "comparison" ? "Comparison" : "Guide")}</p>
        <h1>${escapeHtml(post.data.title)}</h1>
        <p class="article-description">${escapeHtml(post.data.description)}</p>
        <div class="article-meta"><span>By ${escapeHtml(post.data.author || "Ava Thalheim")}</span><time datetime="${post.data.date}">${formatDate(post.data.date)}</time><span>${readingTime(post.raw)}</span></div>
        <div class="article-tags">${tags.map((tag) => `<span class="article-tag">${escapeHtml(tag)}</span>`).join("")}</div>
      </header>
      <div class="article-layout">
        <aside class="article-aside" aria-label="Article details">
          <div class="author-card"><img class="author-avatar" src="../../assets/ava-icon.png" alt="" width="180" height="180" loading="lazy" decoding="async" /><p><strong>Ava Thalheim</strong><span>Developer of Flowtime</span></p></div>
          <nav class="article-toc" aria-label="Table of contents"><h2>Table of contents</h2><ol>${toc.map((item) => `<li><a href="#${item.id}">${escapeHtml(item.text)}</a></li>`).join("")}</ol></nav>
        </aside>
        <div class="article-content">
          <div class="article-body">
${bodyHtml}
          </div>
        </div>
      </div>
    </article>
    <section class="blog-related" aria-labelledby="related-title"><h2 id="related-title">Related articles</h2><div class="related-grid">${related.map((item) => `<a class="related-card" href="../../${item.category}/${item.slug}/index.html"><strong>${escapeHtml(item.data.title)}</strong><span>${escapeHtml(item.data.description)}</span></a>`).join("")}</div></section>
  </main>
  <div id="site-footer"></div>
  <script>window.flowtimeRoot = "../../"; window.flowtimePreserveTitle = true; window.flowtimeNoWaitlist = true; window.renderSection = function (id, markup) { document.getElementById(id).outerHTML = markup; };</script>
  <script src="../../scripts/i18n.js"></script>
  <script src="../../sections/header.js"></script>
  <script src="../../sections/footer.js"></script>
  <script src="../../scripts/theme.js"></script>
</body>
</html>
`;
}

function readPosts() {
  return categories.flatMap((category) => {
    const dir = path.join(root, "content", category);
    return fs.readdirSync(dir)
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const raw = fs.readFileSync(path.join(dir, file), "utf8");
        const parsed = parseFrontmatter(raw);
        return {
          category,
          slug: file.replace(/\.md$/, ""),
          raw,
          body: parsed.body,
          data: parsed.data
        };
      })
      .filter((post) => post.data.draft !== "true");
  });
}

function renderPostsIndex(posts) {
  const entries = posts
    .slice()
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    .map((post) => ({
      slug: post.slug,
      category: post.category,
      title: post.data.title,
      description: post.data.description,
      date: post.data.date,
      author: post.data.author || "Ava Thalheim",
      authorRole: "Developer of Flowtime",
      tags: post.data.tags || [],
      featuredImage: post.data.featuredImage || "",
      readingTime: readingTime(post.raw)
    }));

  fs.writeFileSync(
    path.join(root, "scripts", "blog-posts.js"),
    `window.flowtimeBlogPosts = ${JSON.stringify(entries, null, 2)};\n`
  );
}

function main() {
  const posts = readPosts();
  posts.forEach((post) => {
    const dir = path.join(root, post.category, post.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), renderPage(post, posts));
  });
  renderPostsIndex(posts);
}

main();
