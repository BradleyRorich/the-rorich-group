# Phase 1 — Foundation

| Field | Value |
|-------|-------|
| **Scope** | Next.js 16 scaffold, Tailwind v4, shadcn/ui, security headers, root layout shell, pre-commit hooks, CI, Vercel preview deploy |
| **Detail level** | Detailed |
| **Status** | Complete |

---

## Goal

Produce a working skeleton that compiles cleanly, passes lint + typecheck, and deploys to a Vercel preview URL. No real content yet — just the structural shell everything else will be built on top of.

---

## Steps

### 1. Scaffold the project

```bash
pnpm create next-app@latest the-rorich-group \
  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
```

- Delete the default boilerplate content (placeholder page, global styles reset)
- Confirm `postcss.config.mjs` uses `@tailwindcss/postcss` (Tailwind v4 — no `tailwind.config.js`)

### 2. Configure `pnpm-workspace.yaml`

```yaml
packages:
  - "."
ignoredBuiltDependencies:
  - sharp
  - unrs-resolver
onlyBuiltDependencies:
  - esbuild
```

### 3. Initialise shadcn/ui

```bash
pnpm dlx shadcn@latest init
```

- Style: **new-york**
- Base colour: **neutral**
- CSS variables: **yes**
- This writes `components.json` and seeds `src/app/globals.css` with theme CSS variables

### 4. Install core dependencies

```bash
pnpm add zod lucide-react
pnpm add -D tsx
```

### 5. `next.config.ts` — security headers

Apply the vibe-spec security header pattern (CSP self-only, HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy). See V2 spec for the exact config block.

```ts
// next.config.ts
const nextConfig: NextConfig = {
  devIndicators: false,
  async headers() { /* security headers */ }
}
```

No `output: 'export'` at this stage — Vercel handles Next.js natively; static export is only needed for non-Vercel hosts.

### 6. `src/app/globals.css` — theme stub

Keep the shadcn/ui defaults for now. Brand colours will be wired in during Phase 2. Confirm `@import "tailwindcss"` is present (Tailwind v4 syntax).

### 7. Root layout — `src/app/layout.tsx`

- Mount `<Navbar />` and `<Footer />` around `{children}`
- Use `next/font/google` to load the chosen font (Inter as placeholder; swapped for brand font in Phase 2)
- Apply font CSS variable to `<body>`

### 8. Navbar shell — `src/components/layout/Navbar.tsx`

- Logo placeholder (text "The Rorich Group" until logo asset is provided)
- Nav links: Home · About · Services · Industries · Products · Contact
- Mobile hamburger using shadcn/ui `Sheet` component
- Sticky + transparent-to-solid on scroll (CSS only, no JS for Phase 1)

### 9. Footer shell — `src/components/layout/Footer.tsx`

- Company name, tagline, nav links, email, phone
- Links to `/legal` and `/privacy`
- Copyright line

### 10. Home page stub — `src/app/page.tsx`

A single `<main>` with a placeholder `<h1>The Rorich Group</h1>`. Real content in Phase 2.

### 11. `.env.example`

```env
NEXT_PUBLIC_APP_NAME="The Rorich Group"
NEXT_PUBLIC_APP_URL="https://rorichgroup.co.za"
CONTACT_EMAIL="info@rorichgroup.co.za"
```

### 12. Pre-commit hook

Create `.githooks/pre-commit`:

```bash
#!/bin/sh
set -e
echo "Running lint..." && pnpm lint
echo "Running type check..." && npx tsc --noEmit
```

```bash
chmod +x .githooks/pre-commit
```

Add to `package.json`:
```json
{ "scripts": { "prepare": "git config core.hooksPath .githooks" } }
```

### 13. GitHub Actions CI — `.github/workflows/ci.yml`

Lint + typecheck on every push/PR to `main`. Use pnpm v10 + Node 22. No Prisma generate step needed (no Prisma in this project).

### 14. Initialise git and deploy to Vercel

```bash
git init && git add . && git commit -m "chore: scaffold"
```

- Push to GitHub
- Connect repo to Vercel (import project, auto-detect Next.js)
- Verify the preview URL renders without errors

---

## Key Files Created

```
the-rorich-group/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx          # stub
│   │   └── globals.css
│   └── components/
│       └── layout/
│           ├── Navbar.tsx
│           └── Footer.tsx
├── next.config.ts
├── components.json
├── pnpm-workspace.yaml
├── .env.example
├── .githooks/pre-commit
└── .github/workflows/ci.yml
```

---

## Verification

- [ ] `pnpm dev` — site loads at localhost:3000, Navbar and Footer render
- [ ] `pnpm lint` — zero errors
- [ ] `npx tsc --noEmit` — zero errors
- [ ] `pnpm build` — clean build
- [ ] Vercel preview URL live and accessible
- [ ] Pre-commit hook fires on `git commit`

---

## Implementation Notes (decisions made)

- **Scaffold path:** `pnpm create next-app` cannot run directly in a directory with uppercase letters in the name. Scaffolded into a tmp dir and rsynced the output into the project directory.
- **shadcn/ui style:** `shadcn init -d` defaults to `base-nova`; manually updated `components.json` to `new-york` per spec.
- **pnpm-workspace.yaml `allowBuilds`:** pnpm 11 requires explicit `allowBuilds.esbuild: true` (and `false` for sharp/unrs-resolver) or it aborts the install. Added alongside `ignoredBuiltDependencies`.
- **Google Fonts in CSP:** Added `https://fonts.gstatic.com` to the `font-src` directive in `next.config.ts` to prevent font load failures.
- **Turbopack root warning:** Added `turbopack: { root: __dirname }` to `next.config.ts` to silence the workspace root detection warning.
- **Font:** Using `Inter` from `next/font/google` mapped to `--font-sans`. Swap in the client's brand font here in Phase 2.

## Exit Condition → Phase 2

Shell compiles (✓), lint passes (✓), typecheck passes (✓), build passes (✓), git initialised (✓). Awaiting client logo and brand colours before Phase 2 begins.
