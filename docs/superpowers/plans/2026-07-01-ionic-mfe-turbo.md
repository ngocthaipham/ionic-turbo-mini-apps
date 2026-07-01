# Ionic MFE Turbo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold a Turborepo monorepo with Ionic React shell + 2 Module Federation remotes and shared packages.

**Architecture:** pnpm workspaces + Turbo orchestrate three Vite apps. Shell host loads `home-remote` and `products-remote` at runtime via `@module-federation/vite`. Shared UI/types live in `packages/`.

**Tech Stack:** Ionic React 8, React 18, Vulner Vite 6, @module-federation/vite, Turborepo, pnpm

---

## Status: COMPLETED

All tasks below were implemented in `/Users/marbiosgod/ionic-mfe-turbo`.

### Task 1: Root monorepo scaffold — DONE

- `package.json`, `pnpm-workspace.yaml`, `turbo.json`, `.gitignore`, `README.md`

### Task 2: Shared packages — DONE

- `packages/config` — tsconfig presets
- `packages/types` — `Product` interface
- `packages/ui` — `SharedButton`, `PageLayout`

### Task 3: Remote apps — DONE

- `apps/home-remote` — exposes `./HomeApp` on port 3001
- `apps/products-remote` — exposes `./ProductsApp` on port 3002

### Task 4: Shell host — DONE

- `apps/shell` — Ionic tabs, lazy-loaded remotes, error boundary on port 3000

### Task 5: Verification — DONE

```bash
pnpm install   # ✓
pnpm build     # ✓ all 3 apps build
pnpm dev       # ✓ shell:3000, home:3001, products:3002
curl remoteEntry.js on 3001/3002  # ✓ 200
```

## Run the demo

```bash
cd ~/ionic-mfe-turbo
pnpm install
pnpm dev
# Open http://localhost:3000
```
