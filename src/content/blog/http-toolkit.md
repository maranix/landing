---
title: "Supercharging Dart's HTTP Client"
date: 2026-05-01
category: "Development"
aiWritten: true
---

When building networking layers in Dart or Flutter, `http.Client` is often the go-to choice. However, as applications scale, you quickly run into limitations. You need authentication injection, logging, smart retries, and type-safe JSON parsing. Instead of writing boilerplate wrappers over and over, or pulling in massive third-party dependencies, I created `http_toolkit`.

## The Onion Architecture

`http_toolkit` acts as the missing battery for Dart's native `http` package. It introduces a composable Middleware Pipeline based on an "Onion Architecture." This allows requests to traverse through layers of middleware before reaching the network, and responses to traverse back out. 

This structure makes it trivial to intercept and modify traffic. You can easily stack isolated middlewares—like a `LoggingMiddleware`, an `AuthMiddleware`, and a `RetryMiddleware` with exponential backoff—keeping your networking client modular and highly testable.

## Type Safety

Additionally, the toolkit addresses the pain points of JSON parsing. It provides safe JSON extensions (`.json()`, `.jsonList()`) directly on the `Response` object. This eliminates unsafe dynamic casting and repetitive JSON decoding boilerplate. It's a complete drop-in replacement that retains full compatibility with `http.BaseClient`, ensuring it works effortlessly with your existing code.
