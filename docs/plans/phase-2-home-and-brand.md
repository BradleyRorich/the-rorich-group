# Phase 2 — Home & Brand

| Field | Value |
|-------|-------|
| **Scope** | Brand colours + font applied to globals.css; full Home page built with all sections; shared CtaStrip component |
| **Detail level** | Detailed |
| **Status** | In Progress |

---

## Prerequisite

**Client must provide logo and brand colours before this phase begins.** (See Open Question #1 in the V2 spec.)

Once received:
- Logo file → `public/logo.svg` (or `.png`)
- Brand colours → mapped to CSS variables in `globals.css`

---

## Goal

The Home page is the showcase of the entire site. Getting this right first means the visual language (colours, typography, spacing rhythm, card style) is established before the inner pages are built. All subsequent pages follow the patterns set here.

---

## Steps

### 1. Apply brand identity to `globals.css`

Using Tailwind v4's `@theme inline` block, map the client's brand colours to semantic CSS variables:

```css
@import "tailwindcss";

@theme inline {
  --color-brand:        /* primary brand colour */;
  --color-brand-dark:   /* darker shade for hover states */;
  --color-brand-light:  /* lighter shade for backgrounds */;
  --color-foreground:   /* body text */;
  --color-background:   /* page background */;
  /* ... */
}
```

shadcn/ui variables (`--primary`, `--secondary`, `--accent`, etc.) are updated to match the brand palette.

### 2. Configure the font — `src/app/layout.tsx`

```ts
import { Inter } from "next/font/google"
// swap 'Inter' for the client's chosen font
const font = Inter({ subsets: ["latin"], variable: "--font-sans" })
```

Apply `font.variable` to `<body className={font.variable}>`.

### 3. Update Navbar with real logo

Replace the text placeholder with `<Image src="/logo.svg" alt="The Rorich Group" />`.

### 4. Hero — `src/components/home/Hero.tsx`

- Full-viewport or tall section with brand background or gradient
- `<h1>` "Your Business Partner" — large, confident typography
- Short subline: "Connecting businesses with industrial and printing solutions across Africa and beyond."
- Primary CTA button → `/contact` ("Get in Touch")
- Secondary CTA → `/services` ("Our Services")
- Optional: subtle background pattern or brand image

### 5. Three Pillars — `src/components/home/ThreePillars.tsx`

3-column grid (stacks to 1 column on mobile). Each pillar:
- Icon (Lucide)
- Title: "Your Partner in Sourcing" / "…in Printing" / "…in Logistics"
- 2-sentence description from the V2 spec content

### 6. Features Grid — `src/components/home/FeaturesGrid.tsx`

6-card grid (3×2 desktop, 2×3 tablet, 1×6 mobile). Cards:
- Product Range
- Build Quality
- Global Sourcing
- Industrial Solutions
- Custom Projects
- Logistics & Delivery

Each card: icon + title + 1–2 sentence description. Use shadcn/ui `Card` component.

### 7. About Teaser — `src/components/home/AboutTeaser.tsx`

- 2–3 sentence company summary
- "Learn More About Us" link → `/about`
- Optional: a brand accent colour block or image alongside

### 8. CTA Strip — `src/components/home/CtaStrip.tsx`

Shared component, reused in Phases 3 and 4:

```tsx
// Props: heading, subline, buttonLabel, buttonHref
<CtaStrip
  heading="Ready to get started?"
  subline="Contact us today to discuss your requirements."
  buttonLabel="Get in Touch"
  buttonHref="/contact"
/>
```

### 9. Wire up `src/app/page.tsx`

Compose all components in order:

```tsx
<Hero />
<ThreePillars />
<FeaturesGrid />
<AboutTeaser />
<CtaStrip ... />
```

---

## Key Files Created / Modified

```
src/
├── app/
│   ├── globals.css           # Brand colours, font variable
│   ├── layout.tsx            # Font applied, logo in Navbar
│   └── page.tsx              # Home page composition
├── components/
│   ├── layout/
│   │   └── Navbar.tsx        # Real logo
│   └── home/
│       ├── Hero.tsx
│       ├── ThreePillars.tsx
│       ├── FeaturesGrid.tsx
│       ├── AboutTeaser.tsx
│       └── CtaStrip.tsx
public/
└── logo.svg                  # Client-provided
```

---

## Verification

- [ ] Home page renders all 5 sections end-to-end
- [ ] Brand colours appear correctly (no default shadcn neutrals bleeding through)
- [ ] Logo displays in Navbar and Footer
- [ ] CTA buttons navigate to correct routes
- [ ] Mobile: single-column layout, hamburger menu opens and closes
- [ ] `pnpm build` — zero errors

---

## Exit Condition → Phase 3

Home page is complete and visually representative of the final site. The CtaStrip component is ready for reuse. Brand tokens are set — inner pages can reference `bg-brand`, `text-primary`, etc. confidently.
