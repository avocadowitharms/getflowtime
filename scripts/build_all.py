"""
Master build script for Flowtime website.
Builds:
1. Core pages (Homepage, Pricing, Download, Support, Learn, About)
2. All editorial Guides & Comparison articles
3. Sitemap
"""

import sys
from pathlib import Path
from build_pages import (
    build_homepage,
    build_pricing_page,
    build_download_page,
    build_support_page,
    build_learn_hub,
    build_about_page
)
from build_articles import render_articles

def build_sitemap():
    root = Path(__file__).resolve().parent.parent
    urls = [
        "https://flowtime-app.com/",
        "https://flowtime-app.com/pricing/",
        "https://flowtime-app.com/download/",
        "https://flowtime-app.com/support/",
        "https://flowtime-app.com/learn/",
        "https://flowtime-app.com/updates/",
        "https://flowtime-app.com/press/",
        "https://flowtime-app.com/about-flowtime/"
    ]
    
    # Add all guides & comparisons
    for cat in ["guides", "comparison"]:
        d = root / cat
        if d.exists():
            for p in d.iterdir():
                if p.is_dir() and (p / "index.html").exists():
                    urls.append(f"https://flowtime-app.com/{cat}/{p.name}/")

    xml_entries = "\n".join([f"  <url>\n    <loc>{u}</loc>\n    <changefreq>weekly</changefreq>\n  </url>" for u in urls])
    sitemap = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{xml_entries}
</urlset>"""

    (root / "sitemap.xml").write_text(sitemap, encoding="utf-8")
    print(f"[OK] Generated sitemap.xml with {len(urls)} URLs")

def main():
    print("Building Flowtime Swiss/Editorial Website...")
    build_homepage()
    build_pricing_page()
    build_download_page()
    build_support_page()
    build_learn_hub()
    build_about_page()
    render_articles()
    build_sitemap()
    print("All builds completed successfully!")

if __name__ == "__main__":
    main()
