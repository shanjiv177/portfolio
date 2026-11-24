---
title: "ImpactChain"
slug: "impactchain"
description: "A social network for good deeds: posts become NFTs, campaigns pay bounties, and DAO voters attest to who actually showed up."
tech: ["Solidity", "World Chain", "React", "Lighthouse", "IPFS", "ENS", "Supabase"]
domain: "hackathon"
date: "2025-09-28"
status: "Hackathon"
badge: "ETHGlobal New Delhi"
weight: 7
featured: true
links:
  code: "https://github.com/NikhilKottoli/ImpactChain"
  showcase: "https://ethglobal.com/showcase/impactchain-8vyee"
---

Built at **ETHGlobal New Delhi 2025**. ImpactChain is a social app, running as a World App mini app and on desktop, that rewards people for doing good and proves they did it.

- **Posts as NFTs**: a good deed becomes an ERC-721 with its metadata on IPFS through Lighthouse. Others can like it or "cheer" it with a direct payment.
- **Campaigns with bounties**: an NGO funds a campaign (a tree plantation, a river clean-up) and picks DAO voters. Volunteers RSVP by staking.
- **Attestation**: after the event, DAO voters sign off on who attended. Verified participants get the bounty and their stake back; no-shows lose their stake to those who came.
- **Data DAO**: verified activity is labelled and aggregated into datasets that governments and NGOs can use.
- Contracts on World Chain mainnet, with gas-packed structs and custom errors to keep costs down.
