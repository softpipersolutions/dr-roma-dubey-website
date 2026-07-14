# Dr. Roma Dubey — Women's Health & Gynaecology

A production, multi-page marketing website + patient app for **Dr. Roma Dubey**, a women's
health & gynaecology practice in Meerut. Built with **Next.js (App Router) + TypeScript** on
the practice's design system (ported from the Claude Design handoff bundle).

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, services, how-it-works, about, reviews, locations, CTA |
| `/about` | About Dr. Roma — profile, values, areas of care |
| `/services` | Services overview (links to each detailed service) |
| `/services/[slug]` | **Detailed service pages** — Pregnancy & Antenatal, Fertility, PCOS & Hormonal, Laparoscopic Surgery, Screening & Preventive |
| `/locations` | Both clinics with directions + hours |
| `/contact` | Contact form (→ WhatsApp) + clinic details |
| `/faq` | Frequently asked questions |
| `/book` | Booking flow — collects details, hands off to **WhatsApp** (`wa.me`) |
| `/portal` | Patient portal demo (dashboard, appointments, reports, messages) — noindex |

All marketing routes are statically prerendered (SSG).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Production configuration

Set **one** environment variable in your host (e.g. Vercel → Settings → Environment Variables):

```
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

It drives every SEO absolute URL (canonical, sitemap, Open Graph, structured data). See `.env.example`.

## SEO

- Per-page `title` / `description` / canonical via `lib/seo.ts`, with a title template.
- **Structured data (JSON-LD):** `Physician` + `MedicalClinic` graph site-wide, plus
  `BreadcrumbList`, `MedicalProcedure` (service pages) and `FAQPage` (FAQ).
- **`app/sitemap.ts`** → `/sitemap.xml`, **`app/robots.ts`** → `/robots.txt` (portal disallowed).
- **Dynamic Open Graph image** generated at `app/opengraph-image.tsx` (no external asset).
- Open Graph + Twitter cards on every page; `metadataBase` from `NEXT_PUBLIC_SITE_URL`.

## Project structure

```
app/
  layout.tsx              Root layout — fonts, site-wide metadata + JSON-LD
  globals.css             Design tokens + base + responsive rules
  (marketing)/            Route group sharing SiteHeader + Footer
    layout.tsx            Header, footer, scroll-reveal
    page.tsx              Home
    about|services|locations|contact|faq/…
    services/[slug]/      Detailed service screens (SSG)
  book/                   Booking flow (own chrome) + metadata layout
  portal/                 Patient portal demo + noindex metadata layout
  sitemap.ts, robots.ts, opengraph-image.tsx, not-found.tsx
components/
  ds/                     Design system (Button, Input, Card, Dialog, …) — '@/components/ds'
  site/                   Marketing UI (SiteHeader, Hero, ServiceGrid, PageHero, CtaBand, …)
  seo/JsonLd.tsx          Structured-data components
  portal/                 Portal views
lib/
  site.ts                 Identity, clinics, nav, canonical URL
  services.ts             Service care-area content (drives /services/[slug])
  faqs.ts                 FAQ content (drives page + FAQ JSON-LD)
  seo.ts                  pageMetadata() builder
  whatsapp.ts             wa.me deep-link + booking message builder
  photos.ts               Image + brand-blob references
public/assets/            Brand textures/blobs + sample UPI QR
project/                  Original Claude Design handoff bundle (design source)
```

## Placeholders to replace before go-live

Content is real practice information; the remaining placeholders are marked in code:

- **WhatsApp / phone number** — `lib/whatsapp.ts` (`CLINIC_WHATSAPP` / `CLINIC_PHONE_DISPLAY`,
  currently the design placeholder `+91 98765 43210`). This is functional — booking and contact
  open a chat to this number.
- **Photography** — warm Unsplash placeholders in `lib/photos.ts`.
- **Reviews** — representative testimonials in `components/site/Reviews.tsx`.
- **UPI QR** — `public/assets/booking-qr.png` is a sample.
- **Domain** — set `NEXT_PUBLIC_SITE_URL` (above).

## Design source

Brand/visual guidance: `project/readme.md`. Iteration history: `chats/chat1.md`.
