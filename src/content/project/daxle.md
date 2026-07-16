---
title: "Daxle"
date: 2026-07-16
description: "A lightweight functional programming toolkit for Dart, designed to write safer and more predictable code."
tags: ["DART", "FUNCTIONAL", "TOOLKIT"]
type: "LIBRARY"
stack: ["Dart"]
icon: "function"
github: "https://github.com/maranix/daxle"
website: "https://daxle.maranix.in"
aiWritten: true
---

Daxle is a lightweight, type-safe functional programming toolkit for Dart. It eliminates nested try/catch blocks and imperative state checks, allowing you to build highly predictable and composable applications.

## The Cost of Unpredictability
Even with Dart's sound null safety, runtime exceptions and complex asynchronous workflows remain a significant source of bugs. Relying on `try/catch` blocks forces developers to guess which operations might fail. Nesting multiple asynchronous calls quickly degrades into brittle, unreadable code.

## The Functional Solution
Daxle solves this by introducing declarative types that force you to handle missing values and errors gracefully at compile-time. 

## A Sneak Peek
Here is how Daxle transforms unpredictable code into safe, declarative pipelines:

### Explicit Errors
Encode failures directly into your function signatures and prevent unexpected crashes.

```dart
Either<String, int> divide(int a, int b) {
  if (b == 0) return const .left('Cannot divide by zero');
  return .right(a ~/ b);
}

final result = divide(10, 2).fold(
  (error) => 'Error: $error', 
  (value) => 'Result: $value'
);

```

</br>

### Safe Async Workflows
Chain asynchronous operations without nesting `await` or `try/catch`. If any step fails, the entire pipeline short-circuits gracefully.

```dart
TaskEither<String, User> fetchUser(int userId) async {
    //...
}

TaskEither<String, Config> fetchConfig(User user) async {
    //...
}


// Fetch user, then fetch their config. If fetching the user fails,
// fetchConfig is never called and the error is passed down safely.
final task = fetchUser(42)
    .tap((user) => print("User: ${user.toString()}"))
    .flatMap(fetchConfig);

// Execute the deferred task
final Either<String, Config> result = await task.run();
```

</br>

### Self-Documenting Signatures
Stop guessing what might fail. With Daxle, you never have to dig through implementation details to hunt down hidden, silent exceptions. Because the failure state is encoded directly into the return type, the function signature tells you everything you need to know instantly.

### Lazy Execution by Default
You might have noticed the `.run()` call at the end of the async pipeline.

```dart
final Either<String, Config> result = await task.run();
```

</br>

In Dart, a `Future` is eager—it begins executing the exact moment it is created, whether you are ready for it or not. Daxle solves this frustrating quirk by introducing **Task** primitives.

Tasks are entirely lazy. They allow you to safely describe a complex execution pipeline once, pass it around your application, and re-use it anywhere. The operation is never queued to the event loop until you explicitly invoke `.run()`. 
