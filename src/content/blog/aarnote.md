---
title: "Building Aarnote: A Premium Note-Taking Experience"
date: 2026-05-01
category: "Mobile"
---

Note-taking applications are abundant, but finding one that strikes the perfect balance between performance, aesthetics, and security is rare. Aarnote is my take on a modern, premium note-taking application built with React Native and Expo.

The core design philosophy revolves around a sleek dark theme, utilizing glassmorphism effects and ensuring OLED-friendliness. From a performance standpoint, I wanted smooth 60fps animations, which was achieved using Reanimated.

Data privacy and speed are paramount, which is why Aarnote is built local-first. Using MMKV for storage provides instant access, outperforming traditional AsyncStorage by magnitudes. Passwords are securely hashed with SHA-256, and user sessions are persistently managed. Aarnote brings together rich text editing, image support, and robust search capabilities into a singular, fluid cross-platform experience.
