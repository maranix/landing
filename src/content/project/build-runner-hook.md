---
title: "build_runner_hook"
date: 2026-05-01
version: "v1.1.0"
description: "An analyzer plugin that automatically runs build_runner watch in the background."
tags: ["DART", "ANALYZER", "TOOLING"]
type: "PLUGIN"
stack: "Dart"
icon: "build"
github: "https://github.com/maranix/build_runner_hook"
website: "https://pub.dev/packages/build_runner_hook"
aiGeneratedContent: true
---

An analyzer plugin that automatically runs `build_runner watch` in the background when your IDE opens a Dart or Flutter project. It is designed to remove the friction of manual code generation.

## The Friction of Code Generation

In the modern Dart and Flutter ecosystem, code generation is ubiquitous. Packages like `freezed`, `json_serializable`, and `riverpod_generator` are incredibly powerful, but they all share a common annoyance: you must manually open a terminal and run `dart run build_runner watch` to keep your generated files in sync with your code.

If you forget to run it, your code fails to compile. If you have multiple projects open, you have to manage multiple terminal processes. It's a small but constant tax on your focus.

## Seamless Automation

`build_runner_hook` completely eliminates this tax. By hooking into the Dart Analyzer's lifecycle, the plugin detects when you open a project and automatically spins up the `build_runner` process entirely in the background.

## Key Features
- **Zero-Friction Code Generation**: Starts automatically the moment the analyzer detects a `part` directive in your project. You never have to think about it.
- **Invisible Background Execution**: Spawns and intelligently manages the `build_runner` process entirely in the background. No terminal windows required.
- **Graceful Lifecycle Management**: When you close your IDE or switch projects, the analyzer shuts down, and the plugin ensures the background build process is terminated cleanly, preventing zombie processes.
- **Structured Logging**: While it runs invisibly, it still writes all stdout and stderr output to a timestamped log file. If a build fails, you have full transparency to debug the issue.
