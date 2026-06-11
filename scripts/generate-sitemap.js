const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const siteUrl = "https://flowtime-app.com";
const comparisonDir = path.join(root, "content", "comparison");
const guidesDir = path.join(root, "content", "guides");

function frontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    return {};
  }

  return match[1].split("\n").reduce((data, line) => {
    const separator = line.indexOf(":");
    if (separator < 0) {
      return data;
    }

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^"|"$/g, "");
    data[key] = value;
    return data;
  }, {});
}

function getUrlsFromDir(dir, category) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const markdown = fs.readFileSync(path.join(dir, file), "utf8");
      const data = frontmatter(markdown);
      return {
        loc: `${siteUrl}/${category}/${file.replace(/\.md$/, "")}/`,
        lastmod: data.date || "2026-06-06",
        changefreq: "monthly",
        priority: "0.7",
        draft: data.draft === "true"
      };
    })
    .filter((url) => !url.draft);
}

const urls = [
  { loc: `${siteUrl}/`, lastmod: "2026-06-06", changefreq: "weekly", priority: "1.0" },
  { loc: `${siteUrl}/comparison/`, lastmod: "2026-06-06", changefreq: "weekly", priority: "0.8" },
  { loc: `${siteUrl}/guides/`, lastmod: "2026-06-06", changefreq: "weekly", priority: "0.8" },
  ...getUrlsFromDir(comparisonDir, "comparison"),
  ...getUrlsFromDir(guidesDir, "guides"),
  { loc: `${siteUrl}/docs/privacy-policy.html`, lastmod: "2026-06-01", changefreq: "yearly", priority: "0.3" },
  { loc: `${siteUrl}/docs/terms-of-use.html`, lastmod: "2026-06-01", changefreq: "yearly", priority: "0.3" },
  { loc: `${siteUrl}/docs/support.html`, lastmod: "2026-06-01", changefreq: "monthly", priority: "0.4" }
].sort((a, b) => a.loc.localeCompare(b.loc));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => [
    "  <url>",
    `    <loc>${url.loc}</loc>`,
    `    <lastmod>${url.lastmod}</lastmod>`,
    `    <changefreq>${url.changefreq}</changefreq>`,
    `    <priority>${url.priority}</priority>`,
    "  </url>"
  ].join("\n")),
  "</urlset>",
  ""
].join("\n");

fs.writeFileSync(path.join(root, "sitemap.xml"), xml);
console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
