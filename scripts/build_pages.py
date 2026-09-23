"""
Python script to generate and build all public Flowtime pages with the new Swiss/editorial design system.
Uses clean visual placeholder cards with exact dimensions and spacing.
"""

import os
import re
import html
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

import subprocess
try:
    old_index = subprocess.check_output(["git", "show", "main:index.html"], text=True, encoding="utf-8")
    if "reviews-section" in old_index:
        start = old_index.find('<section class="section reviews-section"')
        end = old_index.find('</section>', start) + len('</section>')
        (ROOT / "scripts" / "old_reviews.html").write_text(old_index[start:end], encoding="utf-8")
        print("WROTE old_reviews.html")
except Exception as e:
    print("Error getting old reviews:", e)

APP_STORE_URL = "https://apps.apple.com/ch/app/flowtime-adhs-fokus-timer/id6768056969"
GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.avocadowitharms.flowtime"
SITE_URL = "https://flowtime-app.com"
SUPPORT_URL = "https://gugus.software/support/flowtime/"
PRIVACY_URL = "https://gugus.software/privacy/flowtime/"
TERMS_URL = "https://gugus.software/terms/flowtime/"

def store_links_html():
    return f"""<div class="store-links">
  <a href="{APP_STORE_URL}" data-analytics-event="app_store_click" data-platform-target="ios" aria-label="Download Flowtime on the App Store">
    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" width="150" height="50">
  </a>
  <a href="{GOOGLE_PLAY_URL}" data-analytics-event="play_store_click" data-platform-target="android" aria-label="Get Flowtime on Google Play">
    <img class="google-badge" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" width="169" height="65">
  </a>
</div>"""

def base_head(title, description, canonical_url, extra_meta=""):
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
  <title>{html.escape(title)}</title>
  <link rel="icon" type="image/png" href="/assets/logo-classic.png" />
  <link rel="apple-touch-icon" href="/assets/logo-classic.png" />
  <meta name="description" content="{html.escape(description)}" />
  <meta name="author" content="Flowtime" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="{canonical_url}" />
  <link rel="preconnect" href="https://developer.apple.com" />
  <link rel="preconnect" href="https://play.google.com" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Flowtime" />
  <meta property="og:title" content="{html.escape(title)}" />
  <meta property="og:description" content="{html.escape(description)}" />
  <meta property="og:url" content="{canonical_url}" />
  <meta property="og:image" content="https://flowtime-app.com/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{html.escape(title)}" />
  <meta name="twitter:description" content="{html.escape(description)}" />
  <meta name="twitter:image" content="https://flowtime-app.com/og-image.png" />
  <link rel="stylesheet" href="/style.css" />
  {extra_meta}
  <script src="/scripts/attribution.js"></script>
  <!-- Privacy-friendly analytics by Plausible -->
  <script async src="https://plausible.io/js/pa-0aTxMuaeWykhlYbR-knZ5.js"></script>
  <script src="https://analytics.ahrefs.com/analytics.js" data-key="YYVJik2A9OcHRcIliyartg" async></script>
  <script>
    window.plausible = window.plausible || function () {{ (plausible.q = plausible.q || []).push(arguments) }}, plausible.init = plausible.init || function (i) {{ plausible.o = i || {{}} }};
    plausible.init();
  </script>
  <script src="/scripts/conversion-analytics.js"></script>
</head>"""

def body_shell(content):
    return f"""<body id="top" class="campaign-site">
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

PRICING_SECTION = f"""<section id="pricing" class="campaign-pricing">
  <div class="section-intro">
    <span class="chapter-number">07</span>
    <h2>Free or Pro.<br>You decide.</h2>
    <p>Start for free and upgrade when you need more.</p>
  </div>
  <div class="plans">
    <article class="plan">
      <span class="meta">THE ESSENTIALS</span>
      <h3>Free</h3>
      <p class="plan-price">$0 <span>forever</span></p>
      <ul>
        <li>Standard timer</li>
        <li>Basic notifications</li>
        <li>Pomodoro with fixed intervals</li>
        <li>1 project</li>
        <li>1 day of history</li>
      </ul>
      <a class="pill" href="/download/">Get started <span>↗</span></a>
    </article>
    <article class="plan plan-pro">
      <span class="meta">A LITTLE MORE POSSIBILITY</span>
      <h3>Pro</h3>
      <p class="plan-price">$3.99 <span>/ month</span></p>
      <p class="plan-options">$24.99 / year · $49.99 lifetime</p>
      <ul>
        <li>Flow Sessions &amp; Flowmodoro</li>
        <li>Custom Pomodoro intervals</li>
        <li>App Shielding</li>
        <li>Advanced statistics</li>
        <li>Multiple projects &amp; history</li>
        <li>Custom notification profiles</li>
        <li>UI accent colors</li>
        <li>And more</li>
      </ul>
      <a class="pill" href="/download/">Find your flow <span>↗</span></a>
    </article>
  </div>
  <p class="pricing-note">Prices shown in USD. Local pricing is available in your app store.</p>
</section>"""

FINAL_CTA_SECTION = f"""<section id="download" class="campaign-final">
  <span class="meta">YOUR TIME. YOUR WAY.</span>
  <h2>Ready when<br>you are.</h2>
  {store_links_html()}
  <p class="quiet" style="margin-top: 24px;">No account. No cloud. Just focus.</p>
  <a class="text-link" href="/updates/" style="margin-top: 28px;">Follow the build →</a>
</section>"""

def build_homepage():
    # Hero Section
    hero_section = f"""<section class="campaign-hero">
  <div class="hero-inner">
    <div class="hero-copy">
      <h1>Focus,<br>your way.</h1>
      <p class="hero-deck">A minimal focus timer for<br>a more intentional day.</p>
      {store_links_html()}
      <p class="quiet">No account. No cloud. Just you and your time.</p>
    </div>
    <div class="hero-art">
      <div class="hero-image-wrapper">
        <img class="hero-image" src="/assets/images/hero.jpg" alt="Flowtime focus timer app interface" width="720" height="904" fetchpriority="high">
      </div>
      <div class="hero-mantra">
        FOCUS<br>TRACK<br>STAY AWARE<br>DO MORE
      </div>
    </div>
  </div>
</section>"""

    # Chapter 01: Just start (White theme phone on left)
    ch1_simplicity = """<section id="simplicity" class="campaign-chapter reverse">
  <div class="chapter-inner">
    <div class="chapter-copy">
      <span class="chapter-number">01</span>
      <h2>Just start.</h2>
      <p class="chapter-deck">No setup.<br>No account.<br>No distractions.</p>
      <p>Open Flowtime and start. <strong>Everything</strong> stays on your device, so you can focus on what matters.</p>
    </div>
    <div class="chapter-art">
      <img class="chapter-phone tilted-phone" src="/assets/images/juststart.png" alt="Flowtime minimal timer interface" width="480" height="960" loading="lazy">
    </div>
  </div>
</section>"""

    # Chapter 02: Focus however you want (4 phones in a row)
    ch2_modes = (ROOT / "data" / "focus-modes.html").read_text(encoding="utf-8")

    # Chapter 03: Time awareness (Pink background with cropped dark phone placeholder)
    ch3_awareness = """<section id="time-awareness" class="campaign-chapter chapter-pink">
  <div class="chapter-inner">
    <div class="chapter-copy">
      <span class="chapter-number">03</span>
      <h2>Stay aware<br>without<br>watching<br>the clock.</h2>
      <p>Gentle reminders help you notice passing time, even during deep focus.</p>
    </div>
    <div class="chapter-art awareness-stage">
      <div class="ui-placeholder" role="img" aria-label="Time awareness reminder placeholder">
        Time Awareness Screen
      </div>
    </div>
  </div>
</section>"""

    # Chapter 04: App Shielding (White background)
    ch4_shielding = """<section id="app-blocking" class="campaign-chapter reverse">
  <div class="chapter-inner">
    <div class="chapter-copy">
      <span class="chapter-number">04</span>
      <h2>Keep<br>distractions out.</h2>
      <p>App Shielding helps you stay focused by blocking distracting apps.</p>
      <p>You’re always in control. Override when you need to, before you get pulled away.</p>
    </div>
    <div class="chapter-art">
      <div class="ui-placeholder" style="width: 100%; max-width: 400px; height: 540px; border-radius: 40px;" role="img" aria-label="App Shielding screen placeholder">
        App Shielding Screen
      </div>
    </div>
  </div>
</section>"""

    # Chapter 05: Your time (Black background with 3 staggered placeholders)
    ch5_reports = """<section id="reports" class="campaign-chapter chapter-dark">
  <div class="chapter-inner" style="grid-template-columns: 38% 62%;">
    <div class="chapter-copy">
      <span class="chapter-number">05</span>
      <h2>See where<br>your time went.</h2>
      <p>Projects, history and reports help you understand your focus and build better habits.</p>
    </div>
    <div class="chapter-art">
      <div class="staggered-placeholders-stage" role="img" aria-label="Projects, History and Reports placeholders">
        <div class="ui-placeholder">Projects</div>
        <div class="ui-placeholder">History</div>
        <div class="ui-placeholder">Reports</div>
      </div>
    </div>
  </div>
</section>"""

    # Chapter 06: Discover achievements
    ch6_achievements = """<section id="achievements" class="campaign-chapter" style="background: #fafaf9;">
  <div class="chapter-inner">
    <div class="chapter-copy">
      <span class="chapter-number">06</span>
      <h2>Discover<br>achievements.</h2>
      <p class="chapter-deck">Celebrate progress with hidden achievements.<br>No streaks. No pressure.<br>Just small milestones.</p>
    </div>
    <div class="chapter-art">
      <div class="ui-placeholder achievement-placeholder-box" role="img" aria-label="Achievement card placeholder">
        Achievement Card
      </div>
    </div>
  </div>
</section>"""

    # Reviews
    review_section = (ROOT / "data" / "reviews.html").read_text(encoding="utf-8")

    # Compact FAQ & Learn
    compact_faq_learn = """<section id="faq" class="campaign-learn compact-faq">
  <span class="meta">COMMON QUESTIONS</span>
  <h2>What is Flowtime?</h2>
  <p>Flowtime is a flexible focus timer and personal time tracker for iPhone and Android. No account is required.</p>
  <a class="text-link" href="/support/">Explore all questions &amp; answers →</a>
</section>

<section class="campaign-learn">
  <span class="meta">A DIFFERENT PERSPECTIVE</span>
  <h2>Work with time.<br>Not against it.</h2>
  <p>Ideas for finding focus, noticing time, and making room for what matters.</p>
  <a class="pill" href="/learn/">Explore Learn ↗</a>
  <a class="text-link" href="/support/" style="margin-left: 24px;">Questions? Support &amp; FAQ →</a>
</section>"""

    content = f"""{hero_section}
{ch1_simplicity}
{ch2_modes}
{ch3_awareness}
{ch4_shielding}
{ch5_reports}
{ch6_achievements}
{review_section}
{PRICING_SECTION}
{compact_faq_learn}
{FINAL_CTA_SECTION}"""

    schema = """<script type="application/ld+json" data-flowtime-schema>
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://flowtime-app.com/#publisher",
          "name": "gugus. Software&Things",
          "url": "https://gugus.software/",
          "sameAs": [
            "https://www.instagram.com/flowtimefocus/",
            "https://x.com/Flowtime_app"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://flowtime-app.com/#website",
          "url": "https://flowtime-app.com/",
          "name": "Flowtime",
          "description": "Flowtime is a flexible, friction-free focus timer and personal time tracker for iPhone and Android.",
          "publisher": {
            "@id": "https://flowtime-app.com/#publisher"
          }
        }
      ]
    }
  </script>"""

    head = base_head("Flowtime - Focus Timer & Time Tracker",
                     "Flowtime is a flexible, friction-free focus timer and time tracker with Pomodoro, reminders, projects, and optional app blocking on iPhone and Android.",
                     f"{SITE_URL}/", schema)
    (ROOT / "index.html").write_text(head + "\n" + body_shell(content), encoding="utf-8")
    print("[OK] Built index.html")

def build_pricing_page():
    content = f"""{PRICING_SECTION}
{FINAL_CTA_SECTION}"""
    head = base_head("Free or Pro. You decide. — Flowtime",
                     "Explore Flowtime Free and Pro. Flexible focus with monthly, yearly and lifetime options.",
                     f"{SITE_URL}/pricing/")
    p = ROOT / "pricing"
    p.mkdir(parents=True, exist_ok=True)
    (p / "index.html").write_text(head + "\n" + body_shell(content), encoding="utf-8")
    print("[OK] Built pricing/index.html")

def build_download_page():
    content = f"""<section class="download-page">
  <div>
    <span class="meta">IOS &amp; ANDROID</span>
    <h1>Get Flowtime.</h1>
    <p class="hero-deck">A minimal focus timer for<br>a more intentional day.</p>
    {store_links_html()}
    <p class="quiet" style="margin-top: 24px;">No account. No cloud. Just you and your time.</p>
  </div>
  <div class="download-art" style="display: flex; gap: 24px; justify-content: center;">
    <div class="ui-placeholder ui-placeholder-light" style="width: 220px; height: 440px; border-radius: 36px; transform: rotate(-5deg);">
      Light Timer
    </div>
    <div class="ui-placeholder" style="width: 220px; height: 440px; border-radius: 36px; transform: rotate(5deg);">
      Dark Timer
    </div>
  </div>
</section>"""
    head = base_head("Get Flowtime — Download for iOS & Android",
                     "Download Flowtime for iOS and Android. Minimal, flexible focus sessions with no account required.",
                     f"{SITE_URL}/download/")
    p = ROOT / "download"
    p.mkdir(parents=True, exist_ok=True)
    (p / "index.html").write_text(head + "\n" + body_shell(content), encoding="utf-8")
    print("[OK] Built download/index.html")

def build_support_page():
    faq_html = """<div class="faq-list">
  <details class="faq-item" open>
    <summary>What is Flowtime?</summary>
    <p>Flowtime is a flexible focus timer and personal time tracker for iPhone and Android. It supports open-ended Flow Sessions, a standard timer, Pomodoro, reminders, optional app blocking, projects, session history, and reports.</p>
  </details>
  <details class="faq-item">
    <summary>How is Flowtime different from Pomodoro?</summary>
    <p>Pomodoro is one structured interval method. Flowtime includes Pomodoro, but also works as a flexible Pomodoro alternative with open-ended Flow Sessions, target duration, standard time tracking, project selection, reminders, and reviewable focus history.</p>
  </details>
  <details class="faq-item">
    <summary>Is my data private?</summary>
    <p>Yes. No account is required. Timer sessions and project data are stored locally on your device and are never sent to Flowtime servers.</p>
  </details>
  <details class="faq-item">
    <summary>What platforms are supported?</summary>
    <p>Flowtime is natively available on iOS (iPhone) and Android.</p>
  </details>
  <details class="faq-item">
    <summary>What does Flowtime Pro include?</summary>
    <p>Flowtime Pro unlocks custom Pomodoro intervals, open-ended Flow Sessions, App Shielding, unlimited projects, full session history, reports, and UI accent colors.</p>
  </details>
</div>"""

    content = f"""<section class="editorial-hero">
  <span class="meta">HERE TO HELP</span>
  <h1>Support &amp; FAQ</h1>
  <p>Clear answers to common questions. Then back to your day.</p>
</section>
<div class="support-layout">
  <aside>
    <a class="text-link" href="#faq">Using Flowtime ↗</a>
    <a class="text-link" href="{SUPPORT_URL}" target="_blank" rel="noopener">Contact support ↗</a>
    <a class="text-link" href="{PRIVACY_URL}" target="_blank" rel="noopener">Privacy Policy ↗</a>
    <a class="text-link" href="{TERMS_URL}" target="_blank" rel="noopener">Terms of Service ↗</a>
  </aside>
  <div>
    {faq_html}
  </div>
</div>"""
    head = base_head("Support & FAQ — Flowtime",
                     "Answers to common questions about Flowtime timers, privacy, platforms and Pro.",
                     f"{SITE_URL}/support/")
    p = ROOT / "support"
    p.mkdir(parents=True, exist_ok=True)
    (p / "index.html").write_text(head + "\n" + body_shell(content), encoding="utf-8")
    print("[OK] Built support/index.html")

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

def build_learn_hub():
    articles = []
    content_dir = ROOT / "content"
    for cat in ["guides", "comparison"]:
        d = content_dir / cat
        if not d.exists():
            continue
        for f in d.glob("*.md"):
            text = f.read_text(encoding="utf-8")
            data, body = parse_frontmatter(text)
            title = data.get("title", f.stem)
            description = data.get("description", "")
            
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
            url = f"/{cat}/{f.stem}/"
            articles.append({
                "title": title,
                "description": description,
                "url": url,
                "topic": topic,
                "minutes": minutes
            })
            
    articles.sort(key=lambda a: 0 if "why-pomodoro" in a["url"] else 1)
    
    cards_html = []
    for i, a in enumerate(articles):
        if i == 0:
            cards_html.append(f"""<a class="learn-entry learn-featured" data-topic="{a['topic']}" href="{a['url']}">
  <div class="learn-art">
    <div class="ui-placeholder" style="width: 100%; height: 260px; border-radius: 20px;">
      Featured Visual
    </div>
  </div>
  <div class="learn-copy">
    <span class="meta">{a['topic']} · {a['minutes']} MIN READ</span>
    <h2>{html.escape(a['title'])}</h2>
    <p>{html.escape(a['description'])}</p>
    <span class="entry-arrow" aria-hidden="true">↗</span>
  </div>
</a>""")
        else:
            cards_html.append(f"""<a class="learn-entry" data-topic="{a['topic']}" href="{a['url']}">
  <span class="meta">{a['topic']} · {a['minutes']} MIN READ</span>
  <h2>{html.escape(a['title'])}</h2>
  <p>{html.escape(a['description'])}</p>
  <span class="entry-arrow" aria-hidden="true">↗</span>
</a>""")

    filters = ["All", "Focus", "Guides", "ADHD", "Time Awareness", "Behind the App"]
    filter_buttons = "".join([f'<button type="button" data-learn-filter="{f}" aria-pressed="{"true" if f=="All" else "false"}">{f}</button>' for f in filters])

    content = f"""<section class="editorial-hero">
  <span class="meta">IDEAS FOR A MORE INTENTIONAL DAY</span>
  <h1>Learn to<br>work with time.</h1>
  <p>Articles, practical guides and stories about focus, productivity and Flowtime.</p>
  <a class="text-link" href="/updates/">Behind the app: follow the build →</a>
</section>

<section class="learn-list">
  <div class="learn-filters" role="group" aria-label="Filter articles">
    {filter_buttons}
  </div>
  <div class="learn-grid">
    {''.join(cards_html)}
  </div>
</section>"""

    head = base_head("Learn to work with time — Flowtime Editorial",
                     "Articles, practical guides and stories about focus, productivity and Flowtime.",
                     f"{SITE_URL}/learn/")
    p = ROOT / "learn"
    p.mkdir(parents=True, exist_ok=True)
    (p / "index.html").write_text(head + "\n" + body_shell(content), encoding="utf-8")
    print("[OK] Built learn/index.html")

def build_about_page():
    content = """<section class="editorial-hero">
  <span class="meta">OUR PHILOSOPHY</span>
  <h1>Made for focus.<br>Not friction.</h1>
  <p>Flowtime was born out of a desire for a clean, privacy-respecting timer that gets out of your way.</p>
</section>
<div class="blog-main" style="max-width: 800px;">
  <article class="article-body">
    <p>Most focus and productivity apps require accounts, sync servers, notifications, and complex dashboards. Flowtime takes the opposite approach: everything stays on your device, starts immediately, and lets you focus on what matters.</p>
    <blockquote>“The best tools are the ones that quietly assist your attention rather than demanding it.”</blockquote>
    <h2>Intentional by design</h2>
    <p>Whether you use Pomodoro intervals, open-ended Flow Sessions, or custom timers, Flowtime gives you the freedom to shape your focus your way.</p>
  </article>
</div>"""
    head = base_head("About Flowtime — Simple, Intentional Focus",
                     "Why Flowtime exists: a friction-free, local-first focus timer.",
                     f"{SITE_URL}/about-flowtime/")
    p = ROOT / "about-flowtime"
    p.mkdir(parents=True, exist_ok=True)
    (p / "index.html").write_text(head + "\n" + body_shell(content), encoding="utf-8")
    print("[OK] Built about-flowtime/index.html")

if __name__ == "__main__":
    build_homepage()
    build_pricing_page()
    build_download_page()
    build_support_page()
    build_learn_hub()
    build_about_page()
    print("All pages successfully built!")
