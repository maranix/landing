---
title: "Personal Website"
date: 2026-05-01
description: "A tid bit on this very website"
tags: ["ASTRO", "TYPESCRIPT", "RENDER"]
type: "WEBSITE"
stack: ["Astro", "Typescript"]
---

The site you're browsing right now. A minimal, hand-crafted portfolio designed to showcase my work and personality—built entirely without generic templates or bloated UI frameworks.

## Why Astro?

I chose [Astro](https://astro.build) for a few highly practical reasons: it ships zero JavaScript by default, natively supports content collections, and allows me to write components with scoped styles without needing a full frontend framework. Because the entire site is statically generated at build time, it delivers blazing-fast page loads and a remarkably simple deployment pipeline.

## Architecture

This site relies on a straightforward Static Site Generation (SSG) architecture. There are no client-side routers, no single-page app (SPA) transitions, and no hydrated framework components. Every page is pure, pre-rendered HTML with heavily scoped CSS.

Content is driven by Astro's content collections. Blog posts and projects live as simple Markdown files with strictly typed frontmatter schemas. This creates a frictionless authoring workflow: write the Markdown, define the metadata in YAML, and let the build pipeline handle the rest.

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

- **Astro v6** — Static site generator, content collections, and scoped component styles.
- **TypeScript** — Strictly typed frontmatter schemas via Zod.
- **Vanilla CSS** — No Tailwind, no utility classes. Uses custom properties for theming, scoped `<style>` blocks per component, and one global stylesheet for core tokens.
- **Render** — Fast, reliable hosting and automated deployment.

## Design Philosophy

No UI libraries. No pre-built component kits. Every element is meticulously hand-written to match a highly specific visual identity: dark backgrounds, monospaced accents, uppercase typography, and a data-driven aesthetic inspired by terminal interfaces and engineering dashboards.

The ultimate goal was to build a space that felt distinctly *mine*, rather than just another reskinned template.
