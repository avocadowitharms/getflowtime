$ErrorActionPreference = "Stop"

function Ask($Question) {
  Read-Host $Question
}

function Slugify($Value) {
  $slug = $Value.ToLower()
  $slug = $slug -replace "['""]", ""
  $slug = $slug -replace "[^a-z0-9]+", "-"
  $slug = $slug -replace "^-+|-+$", ""
  return $slug
}

function Escape-Yaml($Value) {
  return ($Value -replace '"', '\"')
}

function Escape-Js($Value) {
  return ($Value -replace '\\', '\\' -replace '"', '\"')
}

$title = Ask "Post title"
$description = Ask "Description"
$categoryInput = Ask "Category: comparison or guides (guides)"
$tagsInput = Ask "Tags, comma separated"
$readingTime = Ask "Reading time (4 min read)"
$date = Ask "Date ($(Get-Date -Format 'yyyy-MM-dd'))"
$featuredImage = Ask "Featured image, optional"
$draftInput = Ask "Draft? yes/no (no)"

$category = "guides"
if ($categoryInput.ToLower() -eq "comparison" -or $categoryInput.ToLower() -eq "c") {
  $category = "comparison"
}

if ([string]::IsNullOrWhiteSpace($readingTime)) {
  $readingTime = "4 min read"
}

if ([string]::IsNullOrWhiteSpace($date)) {
  $date = Get-Date -Format "yyyy-MM-dd"
}

$draft = $draftInput.ToLower() -in @("yes", "y", "true")
$slug = Slugify $title

if ([string]::IsNullOrWhiteSpace($title) -or [string]::IsNullOrWhiteSpace($description) -or [string]::IsNullOrWhiteSpace($slug)) {
  throw "Title and description are required."
}

$tags = $tagsInput.Split(",") | ForEach-Object { $_.Trim() } | Where-Object { $_ }

$markdownDir = Join-Path (Get-Location) "content\$category"
$blogDir = Join-Path (Get-Location) "$category\$slug"
$markdownPath = Join-Path $markdownDir "$slug.md"
$htmlPath = Join-Path $blogDir "index.html"
$postsPath = Join-Path (Get-Location) "scripts\blog-posts.js"
$sitemapScript = Join-Path (Get-Location) "scripts\generate-sitemap.js"

if (Test-Path $markdownPath) {
  throw "Markdown file already exists: $markdownPath"
}

if (Test-Path $htmlPath) {
  throw "HTML page already exists: $htmlPath"
}

if (!(Test-Path $postsPath)) {
  throw "Could not find scripts\blog-posts.js"
}

New-Item -ItemType Directory -Force -Path $markdownDir | Out-Null
New-Item -ItemType Directory -Force -Path $blogDir | Out-Null

$tagsJson = "[" + (($tags | ForEach-Object { '"' + ($_ -replace '"', '\"') + '"' }) -join ", ") + "]"

$markdown = @"
---
title: "$(Escape-Yaml $title)"
description: "$(Escape-Yaml $description)"
date: "$date"
author: "Ava Thalheim"
tags: $tagsJson
featuredImage: "$(Escape-Yaml $featuredImage)"
draft: $($draft.ToString().ToLower())
---

## Summary

Write a short summary of the post here.

## Introduction

Write the introduction here.

## Main Section

Write the main content here.

### Details

Add supporting details here.

## Comparison

| Option | Best for | Notes |
| --- | --- | --- |
| Option A | Personal use | Add notes here |
| Option B | Teams | Add notes here |

## FAQ

### Question one?

Answer one.

### Question two?

Answer two.
"@

Set-Content -Path $markdownPath -Value $markdown -Encoding UTF8

$templatePath = Get-ChildItem -Path $category -Directory -ErrorAction SilentlyContinue |
  Where-Object { $_.Name -ne $slug -and (Test-Path (Join-Path $_.FullName "index.html")) } |
  Select-Object -First 1 |
  ForEach-Object { Join-Path $_.FullName "index.html" }

if ($templatePath) {
  $html = Get-Content $templatePath -Raw
  $html = $html -replace '<title>.*?</title>', "<title>$title</title>"
  $html = $html -replace '<meta name="description" content=".*?">', "<meta name=`"description`" content=`"$description`">"
  $html = $html -replace '<link rel="canonical" href=".*?">', "<link rel=`"canonical`" href=`"/$category/$slug/`">"
  $html = $html -replace '<h1[^>]*>.*?</h1>', "<h1>$title</h1>"
} else {
  $html = @"
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>$title</title>
  <meta name="description" content="$description">
  <link rel="canonical" href="/$category/$slug/">
</head>
<body>
  <main>
    <article>
      <p>$date · $readingTime</p>
      <h1>$title</h1>
      <p>$description</p>

      <section>
        <h2>Summary</h2>
        <p>Write a short summary here.</p>
      </section>

      <section>
        <h2>Introduction</h2>
        <p>Write the introduction here.</p>
      </section>

      <section>
        <h2>FAQ</h2>

        <h3>Question one?</h3>
        <p>Answer one.</p>
      </section>

      <nav>
        <a href="/$category/">Back to $category</a>
      </nav>
    </article>
  </main>
</body>
</html>
"@
}

Set-Content -Path $htmlPath -Value $html -Encoding UTF8

$postsContent = Get-Content $postsPath -Raw

if ($postsContent.Contains("slug: `"$slug`"")) {
  throw "Post already exists in scripts\blog-posts.js: $slug"
}

$newEntry = @"
  {
    slug: "$(Escape-Js $slug)",
    category: "$category",
    title: "$(Escape-Js $title)",
    description: "$(Escape-Js $description)",
    date: "$(Escape-Js $date)",
    author: "Ava Thalheim",
    authorRole: "Developer of Flowtime",
    tags: $tagsJson,
    featuredImage: "$(Escape-Js $featuredImage)",
    readingTime: "$(Escape-Js $readingTime)"
  }
"@

$updatedPosts = $postsContent -replace '\s*\]\s*;\s*$', ",`n$newEntry`n];`n"

if ($updatedPosts -eq $postsContent) {
  throw "Could not update scripts\blog-posts.js. Expected file to end with ];"
}

Set-Content -Path $postsPath -Value $updatedPosts -Encoding UTF8

Generate-Sitemap

Write-Host ""
Write-Host "Created new blog post:"
Write-Host "content/$category/$slug.md"
Write-Host "$category/$slug/index.html"
Write-Host ""
Write-Host "URL: /$category/$slug/"

function Generate-Sitemap {
  $root = Get-Location
  $siteUrl = "https://flowtime-app.com"
  $comparisonDir = Join-Path $root "content\comparison"
  $guidesDir = Join-Path $root "content\guides"
  $urls = @()

  $urls += @{
    loc = "$siteUrl/"
    lastmod = "2026-06-06"
    changefreq = "weekly"
    priority = "1.0"
  }

  $urls += @{
    loc = "$siteUrl/comparison/"
    lastmod = "2026-06-06"
    changefreq = "weekly"
    priority = "0.8"
  }

  $urls += @{
    loc = "$siteUrl/guides/"
    lastmod = "2026-06-06"
    changefreq = "weekly"
    priority = "0.8"
  }

  function Add-UrlsFromDir($contentDir, $category) {
    if (Test-Path $contentDir) {
      Get-ChildItem $contentDir -Filter "*.md" | ForEach-Object {
        $markdown = Get-Content $_.FullName -Raw
        $date = "2026-06-06"
        $draft = "false"

        if ($markdown -match '(?m)^date:\s*"?([^"\r\n]+)"?') {
          $date = $Matches[1].Trim()
        }

        if ($markdown -match '(?m)^draft:\s*"?([^"\r\n]+)"?') {
          $draft = $Matches[1].Trim()
        }

        if ($draft -ne "true") {
          $slug = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)

          $script:urls += @{
            loc = "$siteUrl/$category/$slug/"
            lastmod = $date
            changefreq = "monthly"
            priority = "0.7"
          }
        }
      }
    }
  }

  Add-UrlsFromDir $comparisonDir "comparison"
  Add-UrlsFromDir $guidesDir "guides"

  $urls += @{
    loc = "$siteUrl/docs/privacy-policy.html"
    lastmod = "2026-06-01"
    changefreq = "yearly"
    priority = "0.3"
  }

  $urls += @{
    loc = "$siteUrl/docs/terms-of-use.html"
    lastmod = "2026-06-01"
    changefreq = "yearly"
    priority = "0.3"
  }

  $urls += @{
    loc = "$siteUrl/docs/support.html"
    lastmod = "2026-06-01"
    changefreq = "monthly"
    priority = "0.4"
  }

  $urls = $urls | Sort-Object loc

  $xml = @()
  $xml += '<?xml version="1.0" encoding="UTF-8"?>'
  $xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  foreach ($url in $urls) {
    $xml += "  <url>"
    $xml += "    <loc>$($url.loc)</loc>"
    $xml += "    <lastmod>$($url.lastmod)</lastmod>"
    $xml += "    <changefreq>$($url.changefreq)</changefreq>"
    $xml += "    <priority>$($url.priority)</priority>"
    $xml += "  </url>"
  }

  $xml += "</urlset>"
  $xml += ""

  Set-Content -Path (Join-Path $root "sitemap.xml") -Value $xml -Encoding UTF8

  Write-Host "Generated sitemap.xml with $($urls.Count) URLs."
}