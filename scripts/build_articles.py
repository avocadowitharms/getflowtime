"""
Script to render all Flowtime markdown guides and comparison articles
into Swiss/editorial formatted HTML pages with readable column, sticky TOC,
oversized section numbers, and visual breakouts.
"""

import os
import re
import html
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE_URL = "https://flowtime-app.com"

def base_head(title, description, canonical_url, schema_json=""):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Security-Policy"
    content="default-src 'self'; base-uri 'self'; object-src 'none'; img-src 'self' data: https://flowtime-app.com https://images.weserv.nl https://*.twitter.com https://*.twimg.com https://*.threads.com https://*.threads.net https://*.instagram.com https://*.cdninstagram.com https://*.bsky.app https://*.licdn.com https://developer.apple.com https://play.google.com https://www.google-analytics.com https://*.google-analytics.com https://*.googletagmanager.com; script-src 'self' 'unsafe-inline' https://plausible.io https://analytics.ahrefs.com https://sibforms.com https://challenges.cloudflare.com https://www.threads.com https://www.threads.net https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.mlcdn.com; font-src 'self' https://fonts.gstatic.com https://assets.mlcdn.com; connect-src 'self' https://plausible.io https://analytics.ahrefs.com https://*.sibforms.com https://www.threads.com https://www.threads.net https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://analytics.google.com https://cloudflareinsights.com https://*.cloudflareinsights.com; frame-src 'self' https://challenges.cloudflare.com https://platform.twitter.com https://syndication.twitter.com https://www.instagram.com https://www.threads.com https://www.threads.net https://embed.bsky.app https://www.linkedin.com; frame-ancestors 'none'; form-action 'self' https://*.sibforms.com; media-src 'self' data:; manifest-src 'self'; worker-src 'self' blob:; upgrade-insecure-requests" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <meta http-equiv="Permissions-Policy"
    content="accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), screen-wake-lock=(), web-share=()" />
  <title>{html.escape(title)} — Flowtime</title>
  <link rel="icon" type="image/png" href="/assets/logo-classic.png" />
  <link rel="apple-touch-icon" href="/assets/logo-classic.png" />
  <meta name="description" content="{html.escape(description)}" />
  <meta name="author" content="Flowtime" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="{canonical_url}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Flowtime" />
  <meta property="og:title" content="{html.escape(title)} — Flowtime" />
  <meta property="og:description" content="{html.escape(description)}" />
  <meta property="og:url" content="{canonical_url}" />
  <meta property="og:image" content="https://flowtime-app.com/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{html.escape(title)} — Flowtime" />
  <meta name="twitter:description" content="{html.escape(description)}" />
  <meta name="twitter:image" content="https://flowtime-app.com/og-image.png" />
  <link rel="stylesheet" href="/style.css" />
  {schema_json}
  <script src="/scripts/attribution.js"></script>
  <!-- Privacy-friendly analytics by Plausible -->
  <script async src="https://plausible.io/js/pa-0aTxMuaeWykhlYbR-knZ5.js"></script>
  <script src="https://analytics.ahrefs.com/analytics.js" data-key="YYVJik2A9OcHRcIliyartg" async></script>
  <script src="/scripts/conversion-analytics.js"></script>
</head>"""

def body_shell(content):
    return f"""<body id="top" class="campaign-site" data-theme="mono">
  <div id="site-header"></div>
  <main id="main-content">
    {content}
  </main>
  <div id="site-footer"></div>
  <script>
    window.flowtimeRoot='/';
    window.flowtimePreserveTitle=true;
    window.renderSection=function(id,html){{var el=document.getElementById(id);if(el)el.outerHTML=html;}};
  </script>
  <script src="/scripts/i18n.js"></script>
  <script src="/sections/header.js"></script>
  <script src="/sections/footer.js"></script>
  <script src="/scripts/design.js"></script>
</body>
</html>"""

def parse_frontmatter(content):
    match = re.match(r"^---\r?\n([\s\S]*?)\r?\n---\r?\n?", content)
    if not match:
        return {}, content
    data = {}
    for line in match.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            data[k.strip()] = v.strip().strip('"')
    return data, content[match.end():]

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

def markdown_to_html(md):
    lines = md.splitlines()
    html_parts = []
    toc_items = []
    in_list = False
    section_counter = 0

    for line in lines:
        stripped = line.strip()
        if not stripped:
            if in_list:
                html_parts.append("</ul>")
                in_list = False
            continue

        # Headings
        if stripped.startswith("### "):
            if in_list:
                html_parts.append("</ul>")
                in_list = False
            h_text = stripped[4:]
            h_id = slugify(h_text)
            html_parts.append(f'<h3 id="{h_id}">{html.escape(h_text)}</h3>')
        elif stripped.startswith("## "):
            if in_list:
                html_parts.append("</ul>")
                in_list = False
            section_counter += 1
            h_text = stripped[3:]
            h_id = slugify(h_text)
            toc_items.append((h_id, h_text))
            num_str = f"{section_counter:02d}"
            html_parts.append(f'<div style="margin-top: 48px;"><span class="chapter-number">{num_str}</span><h2 id="{h_id}">{html.escape(h_text)}</h2></div>')
        elif stripped.startswith("- ") or stripped.startswith("* "):
            if not in_list:
                html_parts.append("<ul>")
                in_list = True
            item_text = stripped[2:]
            # Bold parsing inside list
            item_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', item_text)
            # Link parsing
            item_text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', item_text)
            html_parts.append(f'<li>{item_text}</li>')
        elif stripped.startswith("> "):
            if in_list:
                html_parts.append("</ul>")
                in_list = False
            q_text = stripped[2:]
            html_parts.append(f'<blockquote>{html.escape(q_text)}</blockquote>')
        else:
            if in_list:
                html_parts.append("</ul>")
                in_list = False
            p_text = stripped
            p_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', p_text)
            p_text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', p_text)
            html_parts.append(f'<p>{p_text}</p>')

    if in_list:
        html_parts.append("</ul>")

    return "\n".join(html_parts), toc_items

def render_articles():
    content_dir = ROOT / "content"
    count = 0
    for cat in ["guides", "comparison"]:
        src_dir = content_dir / cat
        if not src_dir.exists():
            continue
        for md_file in src_dir.glob("*.md"):
            slug = md_file.stem
            text = md_file.read_text(encoding="utf-8")
            data, body = parse_frontmatter(text)
            title = data.get("title", slug.replace("-", " ").title())
            description = data.get("description", "")
            
            # Topic categorization
            t_lower = title.lower()
            if "adhd" in t_lower or "neurodivergent" in t_lower:
                topic = "ADHD"
            elif "account" in t_lower or "removed" in t_lower or "developer" in t_lower:
                topic = "Behind the App"
            elif "awareness" in t_lower or "reminder" in t_lower or "time blindness" in t_lower or "four hours" in t_lower:
                topic = "Time Awareness"
            elif cat == "comparison":
                topic = "Focus"
            else:
                topic = "Guides"

            words = len(text.split())
            minutes = max(1, round(words / 200))
            canonical_url = f"{SITE_URL}/{cat}/{slug}/"

            body_html, toc = markdown_to_html(body)

            toc_links = "".join([f'<a href="#{h_id}">{html.escape(h_text)}</a>' for h_id, h_text in toc])
            toc_sidebar = f"""<aside class="article-aside">
  <div class="article-toc">
    <h4>On this page</h4>
    {toc_links}
  </div>
</aside>""" if toc else ""

            # Visual breakout block inside article
            visual_breakout = """<div class="article-breakout">
  <div class="product-visual visual-hero" style="max-height: 240px; margin: 0 auto 24px;"></div>
  <h3>Focus, your way.</h3>
  <p>Available for iPhone and Android. No account required.</p>
  <div style="margin-top: 20px; display: flex; justify-content: center;">
    <a href="/download/" class="pill" style="background: var(--accent-green); color: #080808; border-color: var(--accent-green);">Download Flowtime ↗</a>
  </div>
</div>"""

            article_html = f"""<div class="blog-main">
  <header class="article-header">
    <div style="margin-bottom: 20px;">
      <a href="/learn/" class="text-link">← Back to Learn</a>
    </div>
    <span class="meta">{topic} · {minutes} MIN READ</span>
    <h1>{html.escape(title)}</h1>
    <p class="article-description">{html.escape(description)}</p>
  </header>

  <div class="article-layout">
    {toc_sidebar}
    <article class="article-body">
      {body_html}
      {visual_breakout}
    </article>
  </div>
</div>"""

            schema = f"""<script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{html.escape(title)}",
    "description": "{html.escape(description)}",
    "mainEntityOfPage": "{canonical_url}",
    "publisher": {{
      "@type": "Organization",
      "name": "Flowtime",
      "url": "https://flowtime-app.com"
    }}
  }}
</script>"""

            head = base_head(title, description, canonical_url, schema)
            out_dir = ROOT / cat / slug
            out_dir.mkdir(parents=True, exist_ok=True)
            (out_dir / "index.html").write_text(head + "\n" + body_shell(article_html), encoding="utf-8")
            count += 1

    print(f"[OK] Rendered {count} editorial guides & comparison articles!")

if __name__ == "__main__":
    render_articles()
