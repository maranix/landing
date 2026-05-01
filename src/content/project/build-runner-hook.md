---
title: "build_runner_hook"
date: 2026-05-01
version: "v1.1.0"
description: "An analyzer plugin that automatically runs build_runner watch in the background."
tags: ["DART", "ANALYZER", "TOOLING"]
type: "PLUGIN"
stack: "Dart"
icon: "build"
---

An analyzer plugin that automatically runs `build_runner watch` in the background when your IDE opens a Dart or Flutter project—no manual terminal commands needed.

## Features
- **Zero-friction code generation**: Starts automatically when the analyzer detects a `part` directive.
- **Background Execution**: Spawns and manages the `build_runner` process entirely in the background.
- **Graceful Lifecycle**: Stops the process cleanly when the analyzer shuts down.
- **Structured Logging**: Writes all stdout/stderr output to a timestamped log file for easy debugging.

[View on GitHub](https://github.com/maranix/build_runner_hook)
