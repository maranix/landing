---
title: "http_toolkit"
date: 2026-05-01
description: "The missing battery for Dart's http package, featuring middleware and type-safe JSON."
tags: ["DART", "HTTP", "NETWORKING"]
type: "LIBRARY"
stack: ["Dart"]
icon: "api"
github: "https://github.com/maranix/http_toolkit"
website: "https://pub.dev/packages/http_toolkit"
aiWritten: true
---

`http_toolkit` supercharges networking in your Dart and Flutter applications. Built as a direct, drop-in replacement for the standard `http.Client`, it delivers a powerful middleware pipeline, robust retry mechanisms, and effortless type-safe JSON parsing.

## The Limits of Standard HTTP

Dart's default `http` package works perfectly for simple requests, but struggles in production applications. When you need to inject authorization headers, globally log network traffic, gracefully handle token refreshes, or retry flaky connections, you inevitably end up writing fragile, custom wrapper classes.

## The Power of Middleware

`http_toolkit` solves network complexity with a robust middleware pipeline based on the Onion Architecture. You can easily intercept, modify, block, or rewrite requests and responses dynamically.

Stack isolated middlewares in your preferred order—like chaining a `LoggingMiddleware`, an `AuthMiddleware`, and a `RetryMiddleware`. This keeps your networking layer modular, highly testable, and incredibly clean.

## Type-Safe JSON Parsing

Stop manually parsing `jsonDecode()` and fighting dynamic types. `http_toolkit` includes built-in `.json()` and `.jsonList()` extensions directly on the `Response` object.

Convert API payloads directly into strongly-typed Dart models instantly. This drastically reduces boilerplate and eliminates hidden runtime parsing errors.

```dart
// Effortlessly parse a single user
final user = await client.get(Uri.parse('/user')).json(User.fromJson);

// Parse a list of users instantly
final users = await client.get(Uri.parse('/users')).jsonList(User.fromJson);
```
