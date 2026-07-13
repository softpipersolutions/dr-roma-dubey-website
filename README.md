# Dr. Roma Dubey — Women's Health & Gynaecology

A production implementation of the **Dr. Roma Dubey Design System**, built with **Next.js (App Router) + TypeScript**. It reimplements, for real, the three surfaces designed in the Claude Design handoff bundle:

- **Marketing website** (`/`) — hero, services, how-it-works, about, reviews, FAQ, footer.
- **Booking flow** (`/book`) — collects a few patient details and hands off to **WhatsApp** with a pre-filled message (`wa.me` deep link).
- **Patient portal** (`/portal`) — dashboard, appointments, reports, and messages.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/
  layout.tsx            Root layout; loads Hanken Grotesk via next/font
  globals.css           Design-system tokens (colors, type, spacing, effects) + base styles
  page.tsx              Marketing website (composes components/site/*)
  book/page.tsx         Booking flow → WhatsApp hand-off
  portal/page.tsx       Patient portal shell (view switching + booking dialog)
components/
  ds/                   The design system, ported to typed .tsx client components
                        (Button, Input, Select, Card, Dialog, ServiceCard, Tabs, …)
                        Import everything from '@/components/ds'.
  site/                 Marketing sections (Nav, Hero, Services, About, …)
  portal/               Portal views (Sidebar, Dashboard, Appointments, Reports, Messages)
lib/
  whatsapp.ts           wa.me deep-link + pre-filled booking message builder
  photos.ts             Photography + brand-blob asset references
public/assets/          Brand textures/blobs + sample UPI QR (copied from the bundle)
project/                The original Claude Design handoff bundle (design source of truth)
chats/                  The design conversation transcript
```

## The booking → WhatsApp hand-off

The practice books entirely over WhatsApp. `/book` (and the portal's "Book" dialog) collect
name / service / clinic / preferred day & time / notes, then open a `wa.me` chat with a
pre-filled message via `lib/whatsapp.ts`. A confirmation panel offers a manual "Open WhatsApp"
fallback in case the popup is blocked.

## Placeholders to replace before production

These came from the design bundle and are clearly marked in code:

- **WhatsApp number** — `CLINIC_WHATSAPP` / `CLINIC_PHONE_DISPLAY` in `lib/whatsapp.ts`
  (currently the design placeholder `+91 98765 43210`).
- **Photography** — warm Unsplash placeholders in `lib/photos.ts`; swap for the clinic's own photos.
- **Font** — Hanken Grotesk (a close match for the requested modern sans; no brand font was provided).
- **Logo** — none was provided, so the brand mark is a wordmark set in type (by design).
- **Portal data** — the portal uses illustrative sample data (patient "Priya Sharma", reports, etc.).

## Design source

The design was exported from Claude Design. The full brand/visual guidance lives in
`project/readme.md`, and the iteration history is in `chats/chat1.md`.
