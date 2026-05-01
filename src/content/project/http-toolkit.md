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

`http_toolkit` supercharges your HTTP requests in Dart and Flutter applications. Featuring a powerful composable Middleware Pipeline, robust Retries, and Type-Safe JSON utilities, it is designed as a direct, drop-in replacement for the standard `http.Client`.

## The Limits of standard HTTP

While Dart's default `http` package is great for simple requests, it quickly becomes cumbersome in larger applications. When you need to inject authorization headers on every request, globally log network traffic, gracefully handle token refresh logic, or implement retry mechanisms for flaky connections, you often end up wrapping the client in fragile, custom utility classes. 

## The Power of Middleware

`http_toolkit` solves this by introducing a robust `Middleware` pipeline based on the Onion Architecture. This allows you to intercept, modify, block, or completely rewrite requests and responses dynamically as they pass through the chain.

You can stack multiple, isolated middlewares in a specific order. For example, you can have a `LoggingMiddleware`, followed by an `AuthMiddleware`, followed by a `RetryMiddleware`. This keeps your networking layer highly modular, testable, and incredibly clean.

## Type-Safe JSON parsing

Say goodbye to manually parsing `jsonDecode(response.body)` and handling dynamic types. `http_toolkit` provides built-in `.json()` and `.jsonList()` extensions directly on the `Response` object. 

This makes it absolutely effortless to convert API payloads directly into your strongly-typed Dart models, significantly reducing boilerplate and potential runtime parsing errors.

```dart
// Effortlessly parse a single user
final user = await client.get(Uri.parse('/user')).json(User.fromJson);

// Or parse a list of users instantly
final users = await client.get(Uri.parse('/users')).jsonList(User.fromJson);
```
