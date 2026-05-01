---
title: "Supercharging Dart's HTTP Client"
date: 2026-05-01
category: "Development"
---

When building networking layers in Dart or Flutter, `http.Client` is often the go-to choice. However, as applications scale, you quickly run into limitations. You need authentication injection, logging, smart retries, and type-safe JSON parsing. Instead of writing boilerplate wrappers over and over, I created `http_toolkit`.

`http_toolkit` acts as the missing battery for Dart's `http` package. It introduces a composable Middleware Pipeline—an "Onion Architecture"—that allows requests to traverse through layers of middleware before reaching the network, and responses to traverse back out. This structure easily supports logging, auth injection, base URL resolution, and complex async operations like exponential backoff retries.

Additionally, it provides safe JSON extensions (`getDecoded`, `postDecoded`, etc.) to eliminate unsafe casting and repetitive JSON decoding boilerplate. It's a complete drop-in replacement that retains compatibility with `http.BaseClient`.
