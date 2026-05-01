---
title: "Automating Build Runner in Dart IDEs"
date: 2026-05-01
category: "Tooling"
---

If you develop in Dart or Flutter and use tools like `json_serializable`, `freezed`, or `dart_mappable`, you're likely familiar with the ritual of opening a terminal and running `dart run build_runner watch` every time you start your IDE. It's a small friction point, but one that adds up over time.

I created `build_runner_hook` to solve this exact problem. It is an analyzer plugin that automatically runs `build_runner watch` in the background when your IDE opens a Dart or Flutter project. It detects `part` directives and seamlessly spawns and manages the `build_runner` process. When the analyzer shuts down, it cleans up the process gracefully.

By removing the need to manage terminal windows for code generation, `build_runner_hook` creates a truly zero-friction environment where generated files stay in sync automatically as you code.
