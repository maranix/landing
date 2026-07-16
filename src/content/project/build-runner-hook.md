---
title: "build_runner_hook"
date: 2026-05-01
description: "An analyzer plugin that automatically runs build_runner watch in the background."
tags: ["DART", "ANALYZER", "TOOLING"]
type: "PLUGIN"
stack: ["Dart"]
icon: "build"
github: "https://github.com/maranix/build_runner_hook"
website: "https://pub.dev/packages/build_runner_hook"
aiWritten: true
---

An analyzer plugin that automatically runs `build_runner watch` in the background whenever you open a Dart or Flutter project—completely eliminating the friction of manual code generation.

## The Friction of Code Generation

Code generation is ubiquitous in the modern Dart ecosystem. Packages like `freezed` and `riverpod_generator` are incredibly powerful, but they share a frustrating bottleneck: you have to manually open a terminal and run `dart run build_runner watch` to keep your files synced.

Forget to run it? Your code won't compile. Have multiple projects open? You're juggling multiple terminal processes. It's a constant, unnecessary tax on your productivity.

## Seamless Automation

`build_runner_hook` completely removes this tax. By hooking directly into the Dart Analyzer's lifecycle, the plugin detects when you open a project and silently spins up the `build_runner` process in the background.

## Key Features
- **Zero-Friction Code Generation**: Starts automatically the moment the analyzer detects a `part` directive. You never even have to think about it.
- **Invisible Execution**: Spawns and intelligently manages the `build_runner` process entirely in the background. No more cluttered terminal windows.
- **Graceful Lifecycle Management**: When you close your IDE or switch projects, the plugin ensures the background build process terminates cleanly, preventing zombie processes.
- **Structured Logging**: While it runs invisibly, it writes all output to a timestamped log file. If a build fails, you retain full transparency to debug the issue easily.
