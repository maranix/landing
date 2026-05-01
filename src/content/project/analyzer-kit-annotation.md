---
title: "analyzer_kit_annotation"
date: 2026-05-01
version: "v1.0.0"
description: "Annotations for analyzer_kit to generate boilerplate via IDE quick fixes."
tags: ["DART", "ANALYZER", "CODEGEN"]
type: "LIBRARY"
stack: "Dart"
icon: "code_blocks"
github: "https://github.com/maranix/analyzer_kit/tree/main/packages/analyzer_kit_annotation"
website: "https://pub.dev/packages/analyzer_kit_annotation"
aiGeneratedContent: true
---

A Dart Analyzer plugin that provides intelligent lint rules and instant quick fixes for common boilerplate code generation patterns. 

## The Problem with Dart Boilerplate

Dart is a fantastic language, but it notoriously lacks built-in data classes. Writing basic models often requires manually implementing `copyWith`, equality operators (`==`), `hashCode`, and standard serialization methods (`toMap`, `fromMap`). 

Traditionally, developers rely on code-generation tools like `build_runner` with packages like `freezed` or `json_serializable`. While powerful, this approach introduces an asynchronous build step. You have to run a background terminal process, wait for code to compile, and deal with massive generated `.g.dart` files. It breaks the developer flow.

## The Analyzer Kit Solution

This package takes a completely different approach. By hooking directly into the Dart Analysis Server, `analyzer_kit_annotation` detects when you use specific annotations and provides IDE quick fixes (the little lightbulb icon in VS Code or Android Studio) to generate the code *directly inside your source file*.

## Core Annotations
- `@DataClass()`: Instantly generates a complete data class suite including `copyWith`, deep equality (`==`), `hashCode`, `toString`, `toMap`, and `fromMap`.
- `@CopyWith()`: Need just a copy method? This generates a robust, immutable `copyWith` implementation for your existing properties.
- `@OverrideEquality()`: Generates `==` operator and `hashCode` getter, automatically handling deep collection equality for Lists and Maps.
- `@Serialize()` / `@Deserialize()`: Generates explicit JSON serialization and deserialization methods without any hidden files.

This approach eliminates the need for background watchers. You write an annotation, press a shortcut, and the code appears instantly. It keeps your project dependencies light, your build times non-existent, and your development loop tight and responsive.
