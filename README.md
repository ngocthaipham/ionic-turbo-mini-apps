# Ionic + React MFE Monorepo (Turborepo)

Proof-of-concept monorepo demonstrating **Ionic React** micro-frontends with **Vite Module Federation** and **Turborepo**.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│  apps/shell (host)          http://localhost:3000       │
│  Ionic tabs + router                                    │
│    ├── /home     → loads home-remote (port 3001)        │
│    └── /products → loads products-remote (port 3002)    │
├─────────────────────────────────────────────────────────┤
│  packages/ui     Shared Ionic components                │
│  packages/types  Shared TypeScript interfaces           │
│  packages/config Shared tsconfig presets                │
└─────────────────────────────────────────────────────────┘
```

## Prerequisites

- Node.js 20+
- pnpm 9+

## Quick Start

```bash
pnpm install
pnpm dev
```

Open **http://localhost:3000** — the shell loads both remotes at runtime. Check DevTools → Network for `remoteEntry.js` requests to ports 3001 and 3002.

## Apps

| App | Port | Role |
|-----|------|------|
| `shell` | 3000 | Federation host |
| `home-remote` | 3001 | Home micro-frontend |
| `products-remote` | 3002 | Products micro-frontend |

## Build

```bash
pnpm build
```

For production-style federation, build all apps then serve remotes via `pnpm preview` in each app (or static CDN), and point shell `remotes.entry` URLs at deployed `remoteEntry.js` files.

## Capacitor (future)

Each app includes a `capacitor.config.ts` stub with `webDir: 'dist'`. To add native shells later:

```bash
cd apps/shell
pnpm build
npx cap add ios
npx cap add android
```

## Stakeholder Demo Checklist

1. Run `pnpm dev` — all three apps start via Turbo
2. Open shell at localhost:3000
3. Switch Home / Products tabs — remotes load independently
4. Shared `SharedButton` from `@repo/ui` appears in both remotes
5. Show Network tab: `remoteEntry.js` fetched from remote ports

## Tech Stack

- [Ionic React](https://ionicframework.com/docs/react)
- [Turborepo](https://turbo.build)
- [@module-federation/vite](https://github.com/module-federation/vite)
- [pnpm workspaces](https://pnpm.io/workspaces)
