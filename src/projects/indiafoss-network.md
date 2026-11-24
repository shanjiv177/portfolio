---
title: "IndiaFOSS 6.0 Event Network"
slug: "indiafoss-event-network"
description: "Designed and ran the Wi-Fi for IndiaFOSS 6.0: 36 access points, 7 PoE switches and per-user VLANs on a 1 Gbps line, with zero downtime."
tech: ["Proxmox", "OPNsense", "FreeRADIUS", "802.1X", "Kea", "Unbound", "Prometheus", "Grafana"]
domain: "networks"
status: "Shipped"
weight: 0
featured: true
size: "wide"
specs:
  - { value: 700, label: "attendees" }
  - { value: 1000, label: "devices" }
  - { value: 430, label: "concurrent at peak", suffix: "+" }
  - { value: 36, label: "access points" }
  - { value: 0, label: "minutes down" }
---

The conference network for IndiaFOSS 6.0, built and run end to end.

- Designed and deployed a Wi-Fi network of **36 access points** and **7 PoE switches** over a 1 Gbps leased line, serving **700 attendees** and **1,000 devices** (430+ concurrent at peak) with zero downtime.
- Authenticated users with **FreeRADIUS (802.1X)** and assigned per-user VLANs and speed tiers through RADIUS replies.
- Shaped traffic with **FQ-CoDel** and kept a reserved share of bandwidth for the AV livestream.
- OPNsense on Proxmox for routing and firewalling, Kea for DHCP, Unbound for DNS.
- Built **Prometheus and Grafana** dashboards to watch traffic patterns and resource usage live during the event.
