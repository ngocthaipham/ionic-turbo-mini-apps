# Publishing Guide

## Overview

| Tool | Purpose |
|------|---------|
| **Changesets** | Auto-version all `@your-org/*` packages together |
| **Verdaccio** | Local npm registry at `http://localhost:4873` |
| **pnpm publish** | Push built packages to registry |

Publishable packages (versioned together):

- `@your-org/types`
- `@your-org/ui`
- `@your-org/mfe-home`
- `@your-org/mfe-products`

Internal only (not published): `@your-org/config`

---

## 1. Start local registry

```bash
pnpm registry
# → http://localhost:4873
```

First run creates `.verdaccio/storage`. No login required for local dev.

---

## 2. Create a changeset (when you change packages)

```bash
pnpm changeset
# Select packages, choose bump type (patch/minor/major), write summary
```

---

## 3. Version packages

```bash
pnpm version-packages
# Updates package.json versions + CHANGELOG.md
```

---

## 4. Publish to local Verdaccio

```bash
# Terminal 1
pnpm registry

# Terminal 2 — first time only: create publisher account
npx npm-cli-login -u publisher -p publisher -e publisher@local.dev -r http://localhost:4873

# Publish all packages
pnpm publish:local
```

---

## 5. Consumer app installs from registry

In `~/my-ionic-app/package.json`, replace `file:` links:

```json
{
  "dependencies": {
    "@your-org/mfe-home": "^0.2.0",
    "@your-org/mfe-products": "^0.2.0",
    "@your-org/ui": "^0.2.0",
    "@your-org/types": "^0.2.0"
  }
}
```

```bash
cd ~/my-ionic-app
pnpm install
pnpm dev
```

`.npmrc` already points `@your-org` scope to `http://localhost:4873`.

---

## Production registry

For npmjs or GitHub Packages, update `.npmrc`:

```ini
# npmjs (public)
@your-org:registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}

# GitHub Packages
@your-org:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then:

```bash
pnpm release
```

---

## Quick reference

| Command | Action |
|---------|--------|
| `pnpm changeset` | Record what changed |
| `pnpm version-packages` | Bump versions |
| `pnpm registry` | Start Verdaccio |
| `pnpm publish:local` | Build + publish to Verdaccio |
| `pnpm release` | Build + publish to configured registry |
