# UI Kit — Marketing Website

High-fidelity recreation of Dr. Roma Dubey's public practice site, rebuilt in the premium warm system.

**Entry:** `index.html` — a scrollable, interactive marketing page.

## Sections (factored files)
- `nav.jsx` — sticky translucent nav; wordmark, links, phone + WhatsApp CTA (blurs on scroll).
- `hero.jsx` — headline, doctor intro, portrait with floating trust card + blobs, stat row.
- `services.jsx` — 6 `ServiceCard`s (Pap smear, wellness, hormonal/PCOS, fertility, vaccination, breast health).
- `howitworks.jsx` — the WhatsApp 3-step booking model (connect → pay → confirm).
- `about.jsx` — Dr. Roma bio, laparoscopic-procedure `Tag`s, photo with accent card (cream section).
- `reviews.jsx` — 3 patient `Testimonial`s.
- `faq.jsx` — sticky intro + newsletter signup beside an `Accordion` of real FAQs.
- `footer.jsx` — espresso footer: wordmark, link columns, clinic locations, WhatsApp CTA.
- `app.jsx` — composes sections, runs the reveal-on-scroll observer, and owns the WhatsApp **Connect** dialog.

## Interactions
- Nav background/blur on scroll; smooth anchor links.
- Reveal-on-scroll (respects `prefers-reduced-motion`).
- Any **Connect on WhatsApp** button opens the connect `Dialog`.
- FAQ accordion; hover lifts on service cards.

## Notes
- Composes design-system primitives from `window.DrRomaDubeyDesignSystem_317be8` (loaded via `../../_ds_bundle.js`).
- Screen files are lowercase, use `window.<Name> = …` (no `export`) so they are **not** compiled into the DS bundle.
- Photography is Unsplash placeholders (see `/assets/imagery.md`) — swap for the practice's own photos.
