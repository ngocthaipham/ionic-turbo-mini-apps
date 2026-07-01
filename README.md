# MFE Packages (Repo A)

Turborepo monorepo that **builds and publishes** Ionic React micro-frontends as **npm packages**.

Consumer apps install these packages and customize via props + theme.

## Packages

| Package | Description |
|---------|-------------|
| `@your-org/mfe-home` | Home micro-frontend — `HomeApp` + `HomeMfeConfig` |
| `@your-org/mfe-products` | Products micro-frontend — `ProductsApp` + `ProductsMfeConfig` |
| `@your-org/ui` | Shared Ionic UI components |
| `@your-org/types` | Shared TypeScript types |

## Build

```bash
pnpm install
pnpm build
```

## Publish to npm / local registry

See **[docs/PUBLISHING.md](./docs/PUBLISHING.md)** for full guide.

```bash
pnpm registry          # start Verdaccio at :4873
pnpm changeset         # record changes
pnpm version-packages  # bump versions
pnpm publish:local     # build + publish to Verdaccio
```

## Local dev with consumer app

See **`../my-ionic-app/docs/LOCAL_SETUP.md`** for the simplest setup (no Verdaccio).

```bash
# From my-ionic-app — first time
pnpm bootstrap
pnpm dev

# When editing MFE packages — Terminal 1
pnpm dev

# Terminal 2 — in ../my-ionic-app
pnpm dev
```

Consumer links packages via `file:../ionic-mfe-turbo/packages/...` in `package.json`.

## Package API example

```tsx
import { HomeApp } from '@your-org/mfe-home';

<HomeApp
  title="Ứng dụng của tôi"
  subtitle="Chào mừng"
  buttonLabel="Bắt đầu"
  onAction={() => console.log('clicked')}
/>
```

## Architecture

```
mfe-packages/ (this repo)
├── packages/mfe-home      → npm publish
├── packages/mfe-products  → npm publish
├── packages/ui
└── packages/types

my-ionic-app/ (consumer repo)
├── installs @your-org/mfe-*
├── config/mfe-config.ts   → customize props
└── theme/brand.css        → customize colors
```
