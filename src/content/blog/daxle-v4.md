---
title: "What's New in Daxle 4.0: Zero-Cost Map Queries, Sliding-Window Concurrency, and Direct Future Chaining"
date: 2026-08-17
category: "Release"
---

## Less Boilerplate. Zero Runtime Surprises.

Modern Dart provides sound null safety and pattern matching, but real-world production code still encounters common pitfalls:

1. **Unpredictable JSON Payloads**: Manually navigating nested maps and arrays with chains like `payload['data']?['users']?[0]?['email'] as String?` risks unhandled `TypeError`s and `RangeError`s in production.
2. **Uncontrolled Async Execution**: Standard `Future.wait` executes everything at once, risking backend rate limits and memory spikes, while naive batching forces fast requests to wait on slow ones.

Daxle 4.0 addresses these pain points with zero-cost abstractions, fine-grained concurrency controls, and streamlined API ergonomics.

---

## Zero-Cost Nested Map Queries with `QueryMap`

`QueryMap` is a zero-cost compile-time extension type over `Map<Object?, Object?>`. It introduces dot notation, bracket indexing, and non-string key navigation with strict runtime type safety.

If a path does not exist, an index is out of range, or a field contains an unexpected type, `QueryMap` returns `null` instead of throwing an unhandled exception.

```dart
import 'package:daxle/daxle.dart';

final payload = {
  'services': {
    'server': {'host': 'https://api.internal', 'port': 8080},
    'database': null,
  },
  'users': [
    {'name': 'Alice', 'roles': ['admin', 'dev']},
  ],
  'matrix': [
    [10, 20],
    [30, 40],
  ],
  'cluster': {
    101: {'status': 'healthy'},
  },
};

final query = QueryMap(payload);

// 1. Dot notation for nested maps
final host = query.get<String>('services.server.host'); // 'https://api.internal'

// 2. Bracket notation for embedded lists and matrices
final userName = query.get<String>('users[0].name'); // 'Alice'
final matrixCell = query.get<int>('matrix[1][0]'); // 30

// 3. Key lists for non-string keys
final status = query.get<String>(['cluster', 101, 'status']); // 'healthy'

// 4. Safe failure handling without exceptions
final wrongType = query.get<int>('services.server.host'); // null (value is a String)
final outOfBounds = query.get<String>('users[99].name'); // null

// 5. Presence checking (distinguishes explicit null from missing keys)
query.has('services.database'); // true (key exists with null value)
query.has('services.cache'); // false (key does not exist)

// 6. Seamless Option composition
final serverHost = Option(query.get<String>('services.server.host'))
    .getOrElse(() => 'https://fallback.internal');
```

---

## Sliding-Window Concurrency & Early-Abort Protection

Running asynchronous batch operations often forces a choice between slow sequential processing and aggressive unbounded parallelism.

Daxle 4.0 introduces the `Concurrency` extension type and integrates it directly into `Task` and `TaskEither`. In bounded mode, tasks run inside a dynamic sliding-window worker pool—as soon as one task finishes, the next queued task starts immediately.

If any task in a `TaskEither` chain fails, all unstarted queued tasks are canceled immediately to save network bandwidth and compute resources.

```dart
import 'package:daxle/daxle.dart';

// Execute tasks with a sliding-window pool of 3 workers
final result = await TaskEither.sequence(
  [fetchUser(1), fetchUser(2), fetchUser(3), fetchUser(4)],
  mode: .bounded(3),
).run();
```

### Concurrency Modes

- **`.bounded(n)`**: Runs tasks across `n` parallel workers using a dynamic sliding-window queue.
- **`.sequential`**: Processes operations strictly one at a time.
- **`.unbounded`**: Runs all operations simultaneously.

### Direct Collection Dispatch

When working with collections of raw asynchronous operations, `Concurrency.dispatch` executes them cleanly without nested closures:

```dart
final concurrency = Concurrency.bounded(4);

final users = await concurrency.dispatch(
  userIds,
  (id) => apiClient.getUser(id),
);
```

---

## Direct Future Chaining with `flatMapFuture`

When integrating with third-party APIs or existing code that returns raw `Future` instances, wrapping every call inside `.fromFuture()` introduces boilerplate.

The `flatMapFuture` method on `Task` and `TaskEither` accepts raw async functions and tear-offs directly:

```dart
import 'package:daxle/daxle.dart';

TaskEither<String, String> fetchUser(int id) => .fromFuture(
  () async => 'User #$id',
  (err, _) => 'User not found',
);

Future<String> sendNotification(String user) async {
  // Raw async computation
  return 'Notification sent to $user';
}

final task = fetchUser(42).flatMapFuture(
  sendNotification,
  onError: (error, _) => 'Delivery failed: $error',
);

final result = await task.run();
```

---

## Smarter Ergonomics & Stricter Safety

Daxle 4.0 also refines core developer ergonomics across the board:

- **Smart `Option(value)` Constructor**: Automatically maps `null` to `None()` and non-null values to `Some(value)`, while strictly prohibiting `null` inside `Some`.
- **Non-Nullable `Option<T extends Object>`**: Enforces non-nullable type parameters for safer compile-time guarantees.
- **Dot-Shorthand Syntax Support**: Full support for Dart constructor tear-offs and dot shorthands (`mode: .bounded(3)`, `.sequential`, `.unbounded`).

---

## Upgrade to Daxle 4.0 Today

Add Daxle 4.0 to your `pubspec.yaml`:

```yaml
dependencies:
  daxle: ^4.0.0
```

- [Official Documentation](https://daxle.maranix.in)
- [Daxle on pub.dev](https://pub.dev/packages/daxle)
- [GitHub Repository](https://github.com/maranix/daxle)
