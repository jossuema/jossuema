# SISCA — Intelligent Control Access and Security System (2024–2025)

BLE access control for UTMACH classrooms with on-device face recognition.

- **Sources:** [`../sources/cv-2026-08.md`](../sources/cv-2026-08.md),
  GitHub profile README
- **Area:** IoT, on-device computer vision, mobile, backend
- **Context:** built during the Software Developer Internship at UTMACH's IT
  Department (October 2024 – February 2025), for classrooms of the main
  campus faculties.

## What it is

An end-to-end access control and security system spanning:

- **Firmware:** ESP32 with NimBLE (PlatformIO) —
  [sisca-esp-platformIO](https://github.com/jossuema/sisca-esp-platformIO)
- **Android app:** Kotlin, on-device face recognition (ML Kit + TFLite),
  biometric auth —
  [sisca-mobile](https://github.com/jossuema/sisca-mobile)
- **iOS app:** SwiftUI —
  [sisca-mobile-ios](https://github.com/jossuema/sisca-mobile-ios)
- **Backend:** FastAPI REST API —
  [API-SISCA](https://github.com/jossuema/API-SISCA)

## What I did

- Architecture design of the whole system.
- Design of the mobile app used by professors and staff for classroom
  access.
- Optimized computational efficiency of **real-time facial authentication**
  using machine learning.

## Reuse notes

- Best "end-to-end engineering" story: firmware → mobile → ML → backend.
- Shows on-device ML constraints (latency, privacy) — good for edge-AI
  narratives together with the LarvIA work.
