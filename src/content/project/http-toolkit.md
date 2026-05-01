---
title: "http_toolkit"
date: 2026-05-01
version: "v3.0.0"
description: "The missing battery for Dart's http package, featuring middleware and type-safe JSON."
tags: ["DART", "HTTP", "NETWORKING"]
type: "LIBRARY"
stack: "Dart"
icon: "api"
---

`http_toolkit` supercharges your HTTP requests with a composable Middleware Pipeline, Type-Safe JSON utilities, and robust Retries. It is designed as a drop-in replacement for `http.Client`.

## Features
- **Type-Safe**: Eliminate unsafe casting with `getDecoded`, `postDecoded`.
- **Composable**: Build complex behavior (Auth + Retry + Logging) using middlewares.
- **Reliable**: Smart retries with exponential backoff.
- **Compatible**: Implements `http.BaseClient`.

[View on GitHub](https://github.com/maranix/http_toolkit)
