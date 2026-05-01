---
title: "analyzer_kit_annotation"
date: 2026-05-01
version: "v1.0.0"
description: "Annotations for analyzer_kit to generate boilerplate via IDE quick fixes."
tags: ["DART", "ANALYZER", "CODEGEN"]
type: "LIBRARY"
stack: "Dart"
icon: "code_blocks"
---

A Dart Analyzer plugin that provides lint rules and quick fixes for common boilerplate code generation patterns.

## Annotations
- `@DataClass()`: Generates `copyWith`, `==`, `hashCode`, `toString`, `toMap`, and `fromMap`.
- `@CopyWith()`: Generates a `copyWith` method.
- `@OverrideEquality()`: Generates `==` operator and `hashCode` getter with deep collection equality support.
- `@Serialize()` / `@Deserialize()`: Generates JSON serialization methods.

This approach uses IDE quick fixes to inject the generated code directly into your files, eliminating the need for background watchers for basic data classes.

[View on GitHub](https://github.com/maranix/analyzer_kit/tree/main/packages/analyzer_kit_annotation)
