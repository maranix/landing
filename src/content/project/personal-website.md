---
title: "Personal Website"
date: 2026-05-01
version: "STABLE"
description: "A tid bit on this very website"
tags: ["ASTRO", "TYPESCRIPT", "RENDER"]
type: "WEBSITE"
stack: "Astro / Typescript"
---

The site you're looking at right now. A minimal, hand-crafted portfolio built to represent my work and personality without relying on generic templates or UI frameworks.

## Why Astro

I chose [Astro](https://astro.build) as the foundation for a few practical reasons — it ships zero JavaScript by default, supports content collections out of the box, and lets me write components with scoped styles without pulling in a full frontend framework. The entire site is statically generated at build time, resulting in fast page loads and a simple deployment pipeline.

## Architecture

The site follows a straightforward SSG (Static Site Generation) architecture. There are no client-side routers, no SPA transitions, and no hydrated framework components. Every page is pre-rendered HTML with scoped CSS.

Content is managed through Astro's content collections — blog posts and project entries live as Markdown files with typed frontmatter schemas. This keeps the authoring workflow simple: write Markdown, define metadata in YAML, and the build pipeline handles the rest.

## Project Structure

```
src/
├── components/       # Reusable UI — Nav, Footer, PageHeader, WorkRow, etc.
├── content/
│   ├── blog/         # Blog posts as .md files
│   └── project/      # Project entries as .md files
├── layouts/          # Base Layout wrapper (meta, fonts, global structure)
├── pages/            # Route definitions — index, work, blog + dynamic [slug] routes
│   ├── blog/
│   └── work/
└── styles/           # Global CSS — variables, typography, utilities
```

## Stack

- **Astro v6** — Static site generator, content collections, scoped component styles
- **TypeScript** — Typed frontmatter schemas via Zod
- **Vanilla CSS** — No Tailwind, no utility frameworks. Custom properties for theming, scoped `<style>` blocks per component, one global stylesheet for shared tokens
- **Render** — Hosting and deployment

## Design Philosophy

No UI libraries. No component kits. Every element is hand-written to match a specific visual identity — dark background, monospaced accents, uppercase typography, and a data-driven aesthetic inspired by terminal interfaces and engineering dashboards.

The goal was always to build something that felt like *mine* rather than a reskinned template.
