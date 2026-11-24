---
title: "RupeeRail"
slug: "rupeerail"
description: "Pay any UPI QR code in India with stablecoins. Funds sit in an onchain escrow vault with a dispute window; the merchant just receives rupees."
tech: ["Solidity", "Arc", "Circle", "CCTP", "Razorpay", "UPI"]
domain: "hackathon"
date: "2026-11-07"
status: "Hackathon"
badge: "ETHGlobal Mumbai finalist"
weight: 6
featured: true
links:
  code: "https://github.com/NikhilKottoli/RupeeRail"
  showcase: "https://ethglobal.com/showcase/rupeerail-ygkws"
---

Built at **ETHGlobal Mumbai 2026**, where it was a finalist. RupeeRail lets anyone holding stablecoins pay any UPI QR code in India. The payer signs in their wallet and never needs gas or an Indian bank account. The merchant receives rupees over UPI and never touches crypto.

- Every payment is held in the **`ScanPayVault`** escrow contract, with a dispute window the payer controls, before it settles.
- **Gasless**: the payer signs an intent and a token permit; a paymaster submits them and pays the gas.
- **AI agents** can pay the same way from their own Circle wallets, within a budget the vault enforces.
- Deployed on **Arc** testnet and mainnet and on Whitechain Sepolia, funded across chains with **Circle CCTP v2**.
- Rupee payouts go through RazorpayX with idempotency keys, so a retry can never pay twice; the bank UTR is written back onchain.
