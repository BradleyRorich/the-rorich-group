# The Rorich Group — Project Spec (V2)

> **Status:** V2 — Final. Phase index appended below.  
> Promoted from V1 on 2026-06-15. Implement phases in order using `/spec-implement`.

---

## Product Summary

A premium static marketing website for **The Rorich Group** — a South African B2B company that connects businesses with industrial and printing solutions. The site communicates credibility, explains service offerings, and generates enquiries from prospective clients via phone and email.

**Tagline:** "Your Business Partner"  
**Domain:** rorichgroup.co.za  
**Hosting:** Vercel

---

## Tech Stack

| Layer | Tool | Rationale |
|---|---|---|
| Framework | Next.js 16 (App Router) | Industry standard; static export works seamlessly on Vercel |
| Language | TypeScript (strict) | Type safety across all pages and components |
| Package manager | pnpm | Faster installs; matches vibe-spec convention |
| Styling | Tailwind CSS v4 | Utility-first; v4 needs no `tailwind.config.js` — config lives in `globals.css` |
| UI components | shadcn/ui (new-york style) | Accessible, customisable; components are owned by the project |
| Icons | Lucide React | Paired with shadcn/ui; no custom SVGs for standard icons |
| Fonts | `next/font/google` | Zero-layout-shift font loading; premium feel |
| Validation | Zod v4 | Validates contact form input at the API boundary |
| Email | *(deferred — not in scope for V1)* | Contact page shows phone/email; form submits to a placeholder route |
| Deployment | Vercel | Free tier covers this use case; git-push deploy |

**Explicitly excluded** (not needed for a static marketing site):  
Prisma, PostgreSQL, Auth.js, dbt, S3, Web Push, NestJS, Vitest (beyond type-check).

---

## User Types

| Type | Description |
|---|---|
| **Visitor / Prospective Client** | A business owner or procurement manager. Browses the site, reads about services, finds contact details. No account needed. |
| **Site Administrator (Developer)** | Maintains the site by editing code and data files directly. No CMS or admin login. |

---

## Pages & User Workflows

### `/` — Home
1. Visitor lands on the page.
2. **Hero section:** bold headline ("Your Business Partner"), short subline, primary CTA button → `/contact`.
3. **Three-pillar section:** cards for Sourcing, Printing, Logistics — each with an icon, title, and two-sentence description.
4. **Features grid (6 cards):** Product Range · Build Quality · Global Sourcing · Industrial Solutions · Custom Projects · Logistics & Delivery.
5. **About teaser:** 2–3 sentences + "Learn more" link → `/about`.
6. **Final CTA strip:** "Ready to get started?" → `/contact`.

### `/about` — About
1. Visitor reads the company story: origins, mission, values (quality, value, efficiency, transparency).
2. Key message: trusted sourcing network across China and global markets, end-to-end from procurement to delivery.
3. CTA at bottom → `/contact`.

### `/services` — Services
1. Visitor sees a card grid — one card per service area.
2. **6 service cards:**
   - Sourcing (China, India, America, Europe)
   - Printing & Packaging (labels, flexible packaging, industrial paper)
   - Logistics & Delivery (outsourced, fast, worldwide)
   - Industrial Solutions (weigh bridges, scales, handling equipment)
   - Custom Projects (hard-to-find machinery, niche components)
   - Web & Business Outsourcing (digital and back-office services)
3. CTA at bottom → `/contact`.

### `/industries` — Industries
1. Visitor scans which sectors The Rorich Group serves.
2. **3 industry panels:**
   - FMCG / Retail — packaging machinery, label printing, fast-cycle delivery
   - Agriculture / Food Processing — hygienic packaging, weigh bridges, cold-chain logistics
   - Mining / Heavy Industry — heavy machinery sourcing, scales, industrial printing, custom components
3. CTA → `/contact`.

### `/products` — Products
1. Visitor browses machinery and product categories. No pricing or e-commerce — enquiry-driven only.
2. **5 product categories (with description + representative use case):**
   - Office & Desktop Printers
   - Industrial Flexographic Presses
   - Label & Packaging Machinery
   - Weigh Bridges & Industrial Scales
   - Material Handling Equipment
3. Each category links to `/contact` ("Enquire about this product").

### `/contact` — Contact
1. Visitor sees company contact details: phone `+27 73 561 8899`, email `info@rorichgroup.co.za`.
2. **Enquiry form fields:** Name (required), Email (required), Phone (optional), Message (required).
3. Form validates with Zod on the client side.
4. On submit: posts to `/api/contact` — a Vercel API route that returns `200 OK` with a success message. *(Email sending is deferred; the route is a placeholder stub.)*
5. Visitor sees: "Thanks! We'll be in touch shortly."

### `/legal` — Legal Notice
- Generic template covering company registration, disclaimer, and jurisdiction (South African law).
- Content is placeholder text; client to review and update.

### `/privacy` — Privacy Policy
- Generic POPIA-compliant (South African) privacy policy template.
- Covers data collection, purpose, retention, and contact for data requests.
- Content is placeholder; client to review and update.

---

## Component Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout — Navbar + Footer
│   ├── page.tsx            # /
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── industries/page.tsx
│   ├── products/page.tsx
│   ├── contact/page.tsx
│   ├── legal/page.tsx
│   ├── privacy/page.tsx
│   └── api/
│       └── contact/route.ts  # Stub — validates input, returns 200
├── components/
│   ├── ui/                 # shadcn/ui generated components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ThreePillars.tsx
│   │   ├── FeaturesGrid.tsx
│   │   ├── AboutTeaser.tsx
│   │   └── CtaStrip.tsx
│   ├── ServiceCard.tsx
│   ├── IndustryPanel.tsx
│   ├── ProductCard.tsx
│   └── ContactForm.tsx
├── data/
│   ├── services.ts         # Service card content
│   ├── industries.ts       # Industry panel content
│   └── products.ts         # Product category content
└── app/globals.css         # Tailwind v4 theme + brand CSS variables
```

---

## External Integrations

| Integration | Tool | Notes |
|---|---|---|
| Hosting & deploy | Vercel | git-push deploy; free tier |
| Email (contact form) | *(deferred)* | Placeholder API route returns 200; Resend is the recommended future choice |

---

## Design Guidelines

- **Brand colours:** Client has logo and brand colours — to be provided before Phase 2 (visual implementation). Colours will be applied as CSS variables in `globals.css` using Tailwind v4 `@theme inline`.
- **Design tone:** Premium, B2B, professional. Clean whitespace, strong hierarchy, subtle motion on scroll.
- **Font strategy:** A premium sans-serif via `next/font/google` (e.g. Inter or Geist) for body; optionally a display font for headings.
- **Responsive:** Mobile-first. Navbar collapses to a hamburger on small screens.

---

## Environment Variables

```env
# App
NEXT_PUBLIC_APP_NAME="The Rorich Group"
NEXT_PUBLIC_APP_URL="https://rorichgroup.co.za"

# Contact email (future use when email sending is enabled)
CONTACT_EMAIL="info@rorichgroup.co.za"
```

---

## `next.config.ts` — Security Headers

Security headers per the vibe-spec deployment reference:
- `Content-Security-Policy` (self-only; no external domains needed yet)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security` with preload

---

## Verification Checklist

1. `pnpm dev` — visit all 8 pages in browser; no console errors
2. Contact form — submit valid and invalid data; check validation messages
3. `pnpm build` — zero errors, clean static output
4. Deploy to Vercel — verify production URL; check all nav links
5. Mobile — test Navbar hamburger, card grids, and form on 375px viewport
6. Lighthouse — target 90+ on Performance, Accessibility, Best Practices, SEO

---

## Open Questions (Resolved)

| # | Question | Decision |
|---|---|---|
| 1 | Logo & brand colours | Client has them — to be provided before Phase 2 |
| 2 | Industries list | FMCG/Retail, Agriculture/Food Processing, Mining/Heavy Industry |
| 3 | Products list | 5 categories defined above |
| 4 | Email sending service | Deferred — contact page shows details only; form is a placeholder stub |
| 5 | Legal pages | Generic templates for Legal Notice + Privacy Policy (POPIA) |
| 6 | Phone format | `+27 73 561 8899` (international format for a B2B audience) |

---

---

## Phase Plan

| # | File | Scope |
|---|------|-------|
| 1 ✅ | `docs/plans/phase-1-foundation.md` | Scaffold Next.js 16 project with pnpm, Tailwind v4, shadcn/ui, TypeScript strict, security headers, root layout (Navbar + Footer shell), `.env.example`. Site compiles, deploys to Vercel preview, and renders a blank home route. |
| 2 | `docs/plans/phase-2-home-and-brand.md` | Apply client brand colours and font to `globals.css`. Build the full Home page: Hero, Three Pillars, Features Grid, About Teaser, CTA Strip. Shared `CtaStrip` component reused across later pages. |
| 3 | `docs/plans/phase-3-content-pages.md` | Implement About, Services, Industries, and Products pages with all content data files (`services.ts`, `industries.ts`, `products.ts`). Shared `ServiceCard`, `IndustryPanel`, and `ProductCard` components. |
| 4 | `docs/plans/phase-4-contact-and-legal.md` | Contact page: contact details display, Zod-validated enquiry form, stub `/api/contact` route (returns 200, email deferred). Legal Notice and Privacy Policy pages with POPIA-compliant placeholder templates. |
| 5 | `docs/plans/phase-5-seo-polish-deploy.md` | Per-page metadata (`title`, `description`, OG tags), favicon and web manifest, responsive audit (375 px + 768 px), Lighthouse 90+ pass, production deploy to `rorichgroup.co.za` on Vercel with custom domain DNS config. |

---

*Next step: run `/spec-plan` to generate detailed plan files for all phases.*
