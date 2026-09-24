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


Write-Host "Created $markdownPath. Edit the Markdown, then run npm run build."
