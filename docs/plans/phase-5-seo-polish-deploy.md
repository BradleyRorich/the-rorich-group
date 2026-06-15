# Phase 5 — SEO, Polish & Deploy

| Field | Value |
|-------|-------|
| **Scope** | Per-page metadata, OG tags, favicon, web manifest, responsive audit, Lighthouse 90+ pass, production deploy to rorichgroup.co.za |
| **Detail level** | High-level |
| **Status** | Planned |

---

## Goal

Ship the site to production. Every page has proper metadata for search engines and social sharing. The responsive layout is verified at key breakpoints. Lighthouse scores hit 90+ across all four categories. The domain `rorichgroup.co.za` is connected and serving over HTTPS.

---

## Steps

### 1. Shared metadata defaults — `src/app/layout.tsx`

Using Next.js 16's `Metadata` API:

```ts
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://rorichgroup.co.za"),
  title: {
    default: "The Rorich Group — Your Business Partner",
    template: "%s | The Rorich Group",
  },
  description:
    "The Rorich Group connects businesses with industrial printing solutions, packaging machinery, global sourcing, and logistics across Africa and beyond.",
  openGraph: {
    siteName: "The Rorich Group",
    type: "website",
    locale: "en_ZA",
  },
  robots: { index: true, follow: true },
}
```

### 2. Per-page metadata

Add a `metadata` export to each page:

| Page | `title` | `description` |
|---|---|---|
| `/` | *(uses default)* | *(uses default)* |
| `/about` | "About Us" | "Learn about The Rorich Group — our mission, values, and global sourcing network." |
| `/services` | "Our Services" | "From industrial machinery sourcing to print and logistics — explore The Rorich Group's full service offering." |
| `/industries` | "Industries We Serve" | "The Rorich Group serves FMCG, agriculture, food processing, and mining industries across South Africa." |
| `/products` | "Products" | "Browse our industrial machinery and printing equipment categories. Enquiry-driven pricing." |
| `/contact` | "Contact Us" | "Get in touch with The Rorich Group to discuss your industrial, printing, or logistics requirements." |
| `/legal` | "Legal Notice" | "Legal notice and disclaimer for The Rorich Group website." |
| `/privacy` | "Privacy Policy" | "How The Rorich Group collects and handles your personal information under POPIA." |

### 3. Open Graph image

Create a simple OG image at `public/og-image.png` (1200×630 px):
- Brand background colour
- Logo centred
- Tagline "Your Business Partner" below

Reference in root metadata:
```ts
openGraph: {
  images: [{ url: "/og-image.png", width: 1200, height: 630 }],
}
```

### 4. Favicon and web manifest

- `public/favicon.ico` — 32×32 px from the client logo
- `public/apple-touch-icon.png` — 180×180 px
- `src/app/manifest.ts` — Next.js web manifest:

```ts
import type { MetadataRoute } from "next"
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Rorich Group",
    short_name: "Rorich Group",
    description: "Your Business Partner",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: /* brand colour */,
    icons: [
      { src: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}
```

### 5. `sitemap.ts` — `src/app/sitemap.ts`

```ts
import type { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rorichgroup.co.za"
  return ["/", "/about", "/services", "/industries", "/products", "/contact"].map(
    (path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "/" ? 1 : 0.8 })
  )
}
```

### 6. `robots.ts` — `src/app/robots.ts`

```ts
import type { MetadataRoute } from "next"
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://rorichgroup.co.za/sitemap.xml",
  }
}
```

### 7. Responsive audit

Test at two breakpoints in Chrome DevTools:

| Breakpoint | Focus areas |
|---|---|
| 375 px (iPhone SE) | Navbar hamburger, hero text wrapping, card grids (1-col), contact form |
| 768 px (tablet) | 2-col grids, about page layout, industry panels |

Fix any overflow, clipped text, or broken layouts found.

### 8. Lighthouse audit

Run in Chrome DevTools (incognito, production build) against the Vercel preview URL. Target 90+ on:
- Performance
- Accessibility
- Best Practices
- SEO

Common fixes if below 90:
- **Performance:** add `width`/`height` to `<Image>`, use `loading="lazy"` on below-fold images
- **Accessibility:** ensure all buttons have labels, contrast ratios pass, `<h1>` present on every page
- **SEO:** confirm canonical URLs, meta descriptions on every page

### 9. Production deploy — Vercel + custom domain

1. In Vercel project settings → **Domains** → add `rorichgroup.co.za` and `www.rorichgroup.co.za`
2. Update DNS at the domain registrar:
   - `A` record → Vercel IP (76.76.21.21)
   - `CNAME www` → `cname.vercel-dns.com`
3. Vercel auto-provisions HTTPS via Let's Encrypt
4. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_APP_NAME`, `NEXT_PUBLIC_APP_URL`, `CONTACT_EMAIL`
5. Trigger a production deployment (`git push origin main`)
6. Verify `https://rorichgroup.co.za` loads, all 8 pages are reachable, no mixed-content warnings

---

## Key Files Created / Modified

```
src/
└── app/
    ├── layout.tsx          # Root metadata added
    ├── */page.tsx          # Per-page metadata exports
    ├── sitemap.ts
    ├── robots.ts
    └── manifest.ts
public/
├── favicon.ico
├── apple-touch-icon.png
└── og-image.png
```

---

## Verification

- [ ] Every page has a unique `<title>` and `<meta name="description">`
- [ ] OG image appears when URL is shared on LinkedIn/WhatsApp
- [ ] Favicon displays in browser tab
- [ ] `sitemap.xml` accessible at `https://rorichgroup.co.za/sitemap.xml`
- [ ] `robots.txt` accessible and allows all crawlers
- [ ] Responsive audit: no layout breaks at 375 px or 768 px
- [ ] Lighthouse: 90+ Performance, Accessibility, Best Practices, SEO
- [ ] `https://rorichgroup.co.za` loads with valid HTTPS certificate
- [ ] All 8 pages accessible in production
- [ ] `www.rorichgroup.co.za` redirects to `rorichgroup.co.za`

---

## Exit Condition — Site Complete

Production site is live at `rorichgroup.co.za`, passes Lighthouse 90+, and all 8 pages are reachable. Hand over to client for content review (legal/privacy placeholder text to be updated).
