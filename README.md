# ionic-mfe-turbo

Turborepo monorepo: **shared packages** + **publishable apps** (host core + mini MFEs).

Consumer demo: [`../my-ionic-app`](../my-ionic-app) — installs `@your-org/core` and customizes via `CoreProvider` + props.

## Layout

```
ionic-mfe-turbo/
├── packages/                  ← shared libs & tooling (not published)
│   ├── config/                ← tsconfig + eslint conventions
│   ├── types/                 → @your-org/types
│   └── ui/                    → @your-org/ui
├── apps/                      ← publishable apps (npm)
│   ├── core/                  → @your-org/core (host shell)
│   ├── home/                  → @your-org/home
│   └── products/              → @your-org/products
└── my-ionic-app/ (sibling)     ← demo consumer
```

| Layer | Location | Publish? |
|-------|----------|----------|
| ESLint / TS config | `packages/config` | No |
| Shared types & UI | `packages/types`, `packages/ui` | Yes |
| Host + mini apps | `apps/core`, `apps/home`, `apps/products` | Yes |
| Demo consumer | `../my-ionic-app` | No (private app) |

## Build

```bash
pnpm install
pnpm build
```

## Version & publish (Changesets)

```bash
pnpm changeset         # record bump
pnpm version-packages  # apply versions + CHANGELOG
pnpm publish:local     # build + publish to Verdaccio
```

See [docs/PUBLISHING.md](./docs/PUBLISHING.md).

## Local dev with demo app

```bash
# All apps
cd ionic-mfe-turbo && pnpm dev

# Host + one mini app only (faster)
pnpm dev:home       # core + home
pnpm dev:products   # core + products
```

```bash
# Terminal 2 — demo consumer (match the mini app)
cd my-ionic-app && pnpm dev:home    # or pnpm dev:products
```

Full guide: [`../my-ionic-app/docs/LOCAL_SETUP.md`](../my-ionic-app/docs/LOCAL_SETUP.md)

## Consumer API

```tsx
import { CoreApp, CoreProvider } from '@your-org/core';

<CoreProvider
  config={{
    tabs: { home: 'Trang chủ', products: 'Sản phẩm' },
    home: { title: '...', onAction: () => {} },
    products: { currency: 'VND', products: [...], onProductSelect: (p) => {} },
  }}
>
  <CoreApp />
</CoreProvider>
```

**Advanced** — import a single mini app:

```tsx
import { ProductsApp } from '@your-org/products';

<ProductsApp currency="VND" products={[...]} />
```
