---
title: "Device Farm"
slug: "device-farm"
description: "Android and iOS simulators in the browser for the IRIS team: boot one, use its screen, and install builds straight from GitLab CI."
tech: ["Python", "WebSockets", "scrcpy", "GitLab CI", "Android SDK", "Xcode"]
domain: "systems"
date: "2025-12-01"
status: "In use"
weight: 4
featured: true
links:
  code: "https://github.com/shanjiv177/device-farm"
---

A simulator lab for mobile developers at IRIS, available from a browser.

- Sign in with **GitLab OAuth** and see every Android and iOS simulator on the host.
- Android screens stream over WebSockets through **scrcpy**, and taps and swipes go back to the simulator. iOS uses `xcrun simctl io`.
- Trigger a **GitLab CI** build for any branch and install the artifact on a simulator when the pipeline finishes.
