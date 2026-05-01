---
title: "Building Aarnote: A Premium Note-Taking Experience"
date: 2026-05-01
category: "Mobile"
aiWritten: true
---

Note-taking applications are abundant, but finding one that strikes the perfect balance between performance, aesthetics, and privacy is rare. Most modern options force you into subscription models and mandatory cloud synchronization. Aarnote is my take on a modern, premium note-taking application built with React Native and Expo, designed to be entirely local-first.

## Design Philosophy

The core design philosophy revolves around a sleek dark theme, utilizing glassmorphism effects and ensuring true OLED-friendliness. I wanted the interface to feel tactile and responsive. From a performance standpoint, the goal was to maintain smooth 60fps animations at all times, which was achieved using `react-native-reanimated`. Every screen transition and interaction feels polished and deliberate.

## Local-First and High Speed

Data privacy and speed are paramount. By building Aarnote as a local-first application, there is zero latency when opening notes or searching through them. Using `react-native-mmkv` for storage provides instant access, outperforming traditional `AsyncStorage` by magnitudes. 

Passcodes are securely hashed with SHA-256 using `expo-crypto`, and user sessions are persistently managed. Aarnote brings together rich text editing, image support, and robust search capabilities into a singular, fluid cross-platform experience that respescts the user's data ownership.
