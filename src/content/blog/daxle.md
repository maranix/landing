---
title: "Introducing Daxle: Functional Programming for Dart"
date: 2026-07-16
category: "Release"
---

## The Problem with Predictability

Dart's type system is incredibly robust, especially with sound null safety. But even with these safeguards, runtime exceptions and convoluted asynchronous workflows can still lead to unpredictable bugs. 

When you rely heavily on `try/catch` blocks, you force the developer to guess what might fail. When you nest multiple asynchronous calls, your code quickly becomes a brittle pyramid of error handling.

## Enter Daxle

Today, I'm thrilled to announce [Daxle](https://daxle.maranix.in)—a lightweight, type-safe functional programming toolkit designed to help you build predictable and composable Dart applications.

Daxle strips away imperative state checks and nested error handling, replacing them with declarative types that make failures an explicit part of your function signatures.

## Stop Guessing, Start Composing

### Explicit Errors with `Either`
Instead of throwing exceptions that might crash your app in production, use `Either<L, R>`. By forcing the compiler to acknowledge both success and error states, you guarantee that every failure is handled gracefully.

```dart
Either<String, int> divide(int a, int b) {
  if (b == 0) return const .left('Cannot divide by zero');
  return .right(a ~/ b);
}

// Extract the value safely
final message = divide(10, 2).fold(
  (error) => 'Failure: $error',
  (value) => 'Success: $value',
);
```

### Chain Operations with `Option`
Replace imperative `if (val != null)` checks with clean pipelines that compose gracefully when data is missing. Daxle fully supports modern Dart pattern matching.

```dart
final Option<int> someValue = .some(42);

final message = switch (someValue) {
  Some(value: final v) => 'Found: $v',
  None() => 'Nothing here',
};
```

### Flatten Async Workflows with `TaskEither`
Stop nesting `await` and `try/catch` blocks. `TaskEither` allows you to chain asynchronous operations elegantly. If any step fails, the chain short-circuits safely—without throwing a single exception.

```dart
TaskEither<String, User> fetchUser(int id) => // ...
TaskEither<String, Config> fetchConfig(User user) => // ...

// Chain dependent async operations seamlessly
final task = fetchUser(42).flatMap((user) => fetchConfig(user));

// The computation doesn't start until you run it
final Either<String, Config> result = await task.run();
```

## Get Started

Daxle is officially published on [pub.dev](https://pub.dev/packages/daxle). 

To dive deeper into the API and see advanced combinators in action, check out the comprehensive [Documentation Website](https://daxle.maranix.in). Let's build safer, more predictable apps together.
