---
title: "shaunStore"
slug: "shaunstore"
description: "A Redis-compatible in-memory key-value store in C++, with its own RESP parser and a single-threaded epoll event loop."
tech: ["C++", "RESP", "epoll", "Sockets"]
domain: "systems"
date: "2025-07-01"
status: "Shipped"
weight: 1
featured: true
links:
  code: "https://github.com/shanjiv177/shaunStore"
command: "redis-cli -p 6379 PING"
---

A Redis-like key-value store, written from scratch in C++ to understand what a server like Redis actually does.

- Speaks the **Redis Serialization Protocol (RESP)**, so the stock `redis-cli` works against it.
- One **non-blocking, epoll-based event loop** handles many clients on a single thread.
- Supports strings, lists and hashes: `SET`, `GET`, `EXPIRE`, `LPUSH`, `RPOP`, `HSET` and more.
- Persists data to disk and shuts down cleanly on signals.
