# Phase 4 — Contact & Legal

| Field | Value |
|-------|-------|
| **Scope** | Contact page with Zod-validated form and stub API route; Legal Notice and Privacy Policy pages with POPIA-compliant templates |
| **Detail level** | High-level |
| **Status** | Planned |

---

## Goal

Complete the site's transactional and compliance pages. The contact form collects enquiries and validates them client-side with Zod; the API route is a stub (email sending is deferred). The legal and privacy pages contain editable placeholder text in POPIA-compliant shape.

---

## Steps

### 1. Zod contact schema — `src/lib/schemas/contact.ts`

Define once, used in both the form (client) and API route (server):

```ts
import { z } from "zod/v4"

export const contactSchema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email address"),
  phone:   z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormData = z.infer<typeof contactSchema>
```

### 2. Contact form component — `src/components/ContactForm.tsx`

- shadcn/ui `Form` + `Input` + `Textarea` + `Button`
- Client-side validation using `contactSchema` with `react-hook-form` + `@hookform/resolvers/zod`
- Three states: idle → submitting → success (or error)
- On success: display "Thanks! We'll be in touch shortly." inline (no page redirect)
- On error: display a generic error message

```bash
pnpm add react-hook-form @hookform/resolvers
pnpm dlx shadcn@latest add form input textarea button
```

### 3. Contact API route — `src/app/api/contact/route.ts`

**Stub only** — parses and validates the request body with `contactSchema`, then returns 200. Email sending is deferred to a future phase.

```ts
import { NextRequest, NextResponse } from "next/server"
import { contactSchema } from "@/lib/schemas/contact"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 })
  }
  // TODO: send email via Resend when email sending is enabled
  return NextResponse.json({ success: true })
}
```

### 4. Contact page — `src/app/contact/page.tsx`

Two-column layout on desktop (stacks on mobile):

**Left column — contact details:**
- Phone: `+27 73 561 8899` (click-to-call `tel:` link)
- Email: `info@rorichgroup.co.za` (mailto link)
- Office hours or location if available (optional)
- Lucide icons alongside each detail

**Right column — enquiry form:**
- `<ContactForm />`

### 5. Legal Notice — `src/app/legal/page.tsx`

Generic South African legal notice template:

```
The Rorich Group
[Registered company number — to be confirmed]
[Registered address — to be confirmed]

Disclaimer
The information on this website is provided in good faith and for general informational
purposes only. The Rorich Group makes no representations or warranties of any kind,
express or implied, about the completeness, accuracy, or reliability of the information.

Jurisdiction
This website and its content are governed by the laws of the Republic of South Africa.
Any disputes shall be subject to the exclusive jurisdiction of the South African courts.

[Client to review and update this content before going live.]
```

### 6. Privacy Policy — `src/app/privacy/page.tsx`

POPIA-compliant template covering:
1. **Who we are** — company name and contact details
2. **What information we collect** — name, email, phone via the contact form
3. **Why we collect it** — to respond to enquiries
4. **How we use it** — not shared with third parties except service providers
5. **How long we retain it** — deleted after the enquiry is resolved or upon request
6. **Your rights under POPIA** — access, correction, deletion
7. **Contact for data requests** — `info@rorichgroup.co.za`

All text is placeholder; client to review before going live.

### 7. Update Footer links

Ensure the Footer's "Legal Notice" and "Privacy" links point to `/legal` and `/privacy` respectively. (These were placeholders in Phase 1.)

---

## Key Files Created / Modified

```
src/
├── app/
│   ├── contact/page.tsx
│   ├── legal/page.tsx
│   ├── privacy/page.tsx
│   └── api/
│       └── contact/route.ts
├── components/
│   └── ContactForm.tsx
└── lib/
    └── schemas/
        └── contact.ts
```

---

## Verification

- [ ] Contact page renders two-column layout (desktop) and stacks correctly (mobile)
- [ ] Form: empty submit shows validation errors on all required fields
- [ ] Form: invalid email shows email-specific error
- [ ] Form: valid submit shows success message
- [ ] API route: POST with invalid body returns 400 with error details
- [ ] API route: POST with valid body returns `{ success: true }`
- [ ] Legal page renders without errors
- [ ] Privacy page renders without errors
- [ ] Footer links to `/legal` and `/privacy` are live
- [ ] `pnpm build` — zero errors

---

## Exit Condition → Phase 5

All 8 pages are complete and functioning. The site is feature-complete; only SEO, polish, and production deploy remain.
