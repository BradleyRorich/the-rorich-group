# Phase 3 — Content Pages

| Field | Value |
|-------|-------|
| **Scope** | About, Services, Industries, and Products pages; content data files; shared card/panel components |
| **Detail level** | Detailed |
| **Status** | In Progress |

---

## Goal

Build the four inner content pages. All copy is sourced from `TheRorichGroup.md` and the decisions recorded in the V2 spec. Shared card and panel components are defined once here and won't need to change in later phases.

---

## Steps

### 1. Content data files — `src/data/`

Write typed TypeScript data files. All page content lives here — components just render it. This makes future content updates a one-file change.

**`src/data/services.ts`**

```ts
export type Service = { id: string; icon: string; title: string; description: string }

export const services: Service[] = [
  { id: "sourcing",   icon: "Globe",      title: "Global Sourcing",           description: "..." },
  { id: "printing",   icon: "Printer",    title: "Printing & Packaging",      description: "..." },
  { id: "logistics",  icon: "Truck",      title: "Logistics & Delivery",      description: "..." },
  { id: "industrial", icon: "Factory",    title: "Industrial Solutions",       description: "..." },
  { id: "custom",     icon: "Wrench",     title: "Custom Projects",           description: "..." },
  { id: "web",        icon: "Monitor",    title: "Web & Business Outsourcing", description: "..." },
]
```

**`src/data/industries.ts`**

```ts
export type Industry = { id: string; icon: string; title: string; description: string; highlights: string[] }

export const industries: Industry[] = [
  { id: "fmcg",        title: "FMCG / Retail",                highlights: ["Packaging machinery", "Label printing", "Fast-cycle delivery"] },
  { id: "agriculture", title: "Agriculture / Food Processing", highlights: ["Hygienic packaging", "Weigh bridges", "Cold-chain logistics"] },
  { id: "mining",      title: "Mining / Heavy Industry",       highlights: ["Heavy machinery sourcing", "Industrial scales", "Custom components"] },
]
```

**`src/data/products.ts`**

```ts
export type Product = { id: string; icon: string; title: string; description: string; useCase: string }

export const products: Product[] = [
  { id: "office-printers",   title: "Office & Desktop Printers",       useCase: "Small to medium business print environments" },
  { id: "flexographic",      title: "Industrial Flexographic Presses",  useCase: "High-volume label and flexible packaging production" },
  { id: "label-packaging",   title: "Label & Packaging Machinery",      useCase: "FMCG and retail product labelling" },
  { id: "weigh-bridges",     title: "Weigh Bridges & Industrial Scales", useCase: "Mining, agriculture, and logistics weighing" },
  { id: "material-handling", title: "Material Handling Equipment",       useCase: "Factory floor movement and logistics" },
]
```

### 2. Shared components

**`src/components/ServiceCard.tsx`**

shadcn/ui `Card` with icon (Lucide), title, description, and a subtle hover lift. Accepts a `Service` type prop.

**`src/components/IndustryPanel.tsx`**

Wider panel (full-width or 2-column) with icon, title, description paragraph, and a bullet list of highlights. Accepts an `Industry` type prop.

**`src/components/ProductCard.tsx`**

Card with icon, title, description, use-case line, and a "Enquire" link → `/contact`. Accepts a `Product` type prop.

### 3. About page — `src/app/about/page.tsx`

Sections:
1. **Page hero** — "About The Rorich Group" heading, short intro
2. **Company story** — full About text from `TheRorichGroup.md`
3. **Values grid** — 4 pillars: Quality · Value · Efficiency · Transparency — each with icon + one-liner
4. **Global reach** — brief callout: China, India, America, Europe sourcing network
5. **`<CtaStrip />`** at the bottom

### 4. Services page — `src/app/services/page.tsx`

- Page heading + intro paragraph
- `services.map(s => <ServiceCard key={s.id} service={s} />)` in a 3-column grid
- `<CtaStrip />` at the bottom

### 5. Industries page — `src/app/industries/page.tsx`

- Page heading + intro paragraph
- `industries.map(i => <IndustryPanel key={i.id} industry={i} />)` stacked vertically (panels are wide)
- `<CtaStrip />` at the bottom

### 6. Products page — `src/app/products/page.tsx`

- Page heading + intro paragraph ("Enquiry-driven — contact us for pricing and availability")
- `products.map(p => <ProductCard key={p.id} product={p} />)` in a 2–3 column grid
- `<CtaStrip />` at the bottom

---

## Key Files Created

```
src/
├── app/
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── industries/page.tsx
│   └── products/page.tsx
├── components/
│   ├── ServiceCard.tsx
│   ├── IndustryPanel.tsx
│   └── ProductCard.tsx
└── data/
    ├── services.ts
    ├── industries.ts
    └── products.ts
```

---

## Verification

- [ ] All 4 pages render without console errors
- [ ] Services page shows all 6 service cards
- [ ] Industries page shows all 3 industry panels with highlights
- [ ] Products page shows all 5 product cards; "Enquire" links point to `/contact`
- [ ] About page shows all 4 values; CTA links to `/contact`
- [ ] `<CtaStrip />` appears at the bottom of all 4 pages
- [ ] Mobile: grids collapse correctly at 375 px
- [ ] `pnpm build` — zero errors

---

## Exit Condition → Phase 4

All inner content pages are complete and navigable. Content data is cleanly separated from UI. Phase 4 can begin immediately.
