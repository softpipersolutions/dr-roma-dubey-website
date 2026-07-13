# Dr. Roma Dubey — Design System

A warm, nurturing, and premium design system for **Dr. Roma Dubey**, a women's health & gynaecology practice. The system supports a marketing website, a WhatsApp-style patient booking flow, and a patient portal/dashboard.

> **Namespace:** components compile to `window.DrRomaDubeyDesignSystem_317be8`. Run `check_design_system` to confirm the current namespace before wiring cards.

---

## 1. Brand & Product Context

**Dr. Roma Dubey, MBBS | MD** is an experienced Obstetrician, Gynaecologist & Laparoscopic Surgeon (8+ years) practising in Meerut, Uttar Pradesh, India. Locations: **Maitri Mahila Clinic** (Kaland Chungi, Sardhana) and **Aryavart Hospital** (NH-58, Daurala, Meerut).

The practice delivers compassionate, evidence-based women's health care across every life stage:

- **Menstrual & hormonal health** — periods issues, PCOS/PCOD, menopause clinic, leucorrhoea
- **Fertility & pregnancy** — infertility treatment, follicular monitoring, high-risk pregnancy, painless normal delivery, C-section, bad obstetric history
- **Surgery** — laparoscopy & hysteroscopy, myomectomy, hysterectomy, ovarian cystectomy, endometriosis, ectopic pregnancy, tubal ligation
- **Preventive & screening** — Pap smear, cervical cancer screening & vaccination, breast health, wellness exams, pelvic ultrasound
- **Counselling** — contraception, abortion & sterilization, STI/RTI treatment

**Booking model.** Patients connect via **WhatsApp** — chat → secure UPI QR payment → choose a slot → instant confirmation. No forms, one chat. This WhatsApp-first flow is a defining product characteristic and is recreated in the booking UI kit.

### Sources given
- **Live site (text only):** https://softpiper.wixstudio.com/drromadubey — original Wix Studio practice site by Softpiper Solutions. Only the *copy and information architecture* were available (text fetch); no visual assets, fonts, or CSS were accessible.
- **No codebase, Figma, or logo files** were provided.

### Direction chosen by the client
This system is an **improved, modern & premium reimagining** of the source site — not a 1:1 recreation. Confirmed choices: warm & nurturing aesthetic (blush/terracotta), all-modern-sans typography, real soft photography, standard component set, wordmark-in-type (no logo file). Products: marketing site, WhatsApp-style booking, patient portal.

---

## 2. Content Fundamentals — how the brand writes

**Voice:** warm, reassuring, and quietly expert. It should feel like a trusted doctor speaking directly and kindly — never clinical-cold, never salesy.

- **Person:** speak to the patient as **"you"**; the practice is **"we"** / **"Dr. Roma"**. First-person singular ("I'm Dr. Roma Dubey") is used for the doctor's own introduction only.
- **Tone words:** compassionate, evidence-based, personalised, supported, heard, confident, empowering, safe.
- **Casing:** Sentence case for almost everything — headlines, buttons, labels. Title Case only for proper names (Pap Smear, Maitri Mahila Clinic) and service names when used as titles. Never ALL-CAPS except tiny eyebrows/overlines (tracked out).
- **Headlines** are short, human, benefit-led: *"Caring for Every Woman", "Your Trusted Women's Health Partner", "Empowering Your Health Today"*. Often a two-part structure: a warm label + a fuller promise.
- **Body copy** is plain and calm, medium length, reassuring. Reduces anxiety; explains what a service is *for* in one line (*"Designed to detect cervical cancer", "Planning for a family"*).
- **CTAs** are action + destination and consistently WhatsApp-oriented: **"Connect Now on WhatsApp", "Visit Now", "Learn More", "Explore Fertility"**. Keep them 2–4 words.
- **Reassurance patterns:** "every step of the way", "at every stage of life", "your well-being, comfort, and confidence are our priority".
- **Numbers & credentials** carry trust — "8+ years", "MBBS | MD", "high-risk pregnancies". Use sparingly and truthfully; never invent stats.

**Emoji & symbols.** The source site uses emoji as service/section bullets (🏩 ✅ ✔️). In this **premium** redesign, **replace decorative emoji with the icon system (Lucide)**. A single tasteful check or heart glyph is acceptable inside a soft badge, but avoid emoji walls. Do not use emoji in headlines or buttons.

**Do / Don't**
- ✅ "Dr. Roma guided me through my entire pregnancy with so much care." (real, specific, warm)
- ✅ "From routine screenings to specialized consultations."
- ❌ "BOOK NOW!!! 🔥 Best gynae in town 💯" (hype, all-caps, emoji spam)
- ❌ "Utilize our comprehensive women's healthcare solutions." (corporate/cold)

---

## 3. Visual Foundations

The look is **warm, soft, rounded, and human** — a boutique-clinic calm. Airy warm-white space, terracotta as the confident accent, blush and cream for softness, espresso-brown ink for grounded, readable text.

### Color
- **Primary — Clay/Terracotta.** `--clay-500 #C97B63` is the brand base (decorative, heroes). Interactive fills use `--clay-600 #B65D42` (AA 4.5:1 with white); hover/links use `--clay-700 #9A4A34` (6.2:1). Terracotta signals warmth + confidence.
- **Secondary — Blush.** `--blush-500 #E8B4A0` and its soft tints for gentle accents, secondary buttons, chips, illustration fills.
- **Neutrals — Sand.** Warm-tinted grays from `--sand-50 #FBF7F4` (page) through `--sand-800 #3D2B26` (espresso ink text). Never use pure cold gray — every neutral carries warmth.
- **Cream.** `--cream #F5E6DE` is a signature section background for warmth/rhythm.
- **Semantics** are warm-tuned: sage success, amber warning, rust danger, dusk info — each with a soft tint bg + darker text.
- Use **one or two background colors per page** — warm white plus cream (or clay-50). Avoid rainbow sections.

### Typography
- **One family: Hanken Grotesk** (weights 300–800) — a warm humanist grotesque, approachable and app-like. Loaded via Google Fonts CDN (see FONTS).
- **Display** headings use a fluid clamp scale, weight 700–800, tight tracking (`--tracking-tight`/`tighter`), line-height ~1.12.
- **Body** is 16–18px, weight 400–500, line-height 1.5–1.65, `--text-body` espresso ink.
- **Eyebrows/overlines:** small (14px), semibold, `--tracking-wider (0.08em)`, often in `--clay-700` — the one place letters are tracked out.

### Spacing & layout
- **4px base grid** (`--space-*`). Generous whitespace; sections breathe with `--section-y` (56–112px fluid).
- Containers up to `--container-xl 1200px`; comfortable `--gutter`.
- Layouts are calm and grid-based; asymmetry via one hero image offset, not chaos.

### Shape & depth
- **Rounded, generous radii.** Cards use `--radius-lg 20px`; pills/buttons use `--radius-pill`; large feature panels `--radius-xl/2xl`. Nothing is sharp-cornered.
- **Cards:** white surface, `--radius-lg`, hairline `--border-subtle` OR soft `--shadow-sm/md` (not both heavy). On hover, lift with `--shadow-md` + 2–4px translateY.
- **Shadows** are soft and **espresso-tinted** (`rgba(61,43,38,…)`), never black, never harsh. Low opacity, large blur. A brand shadow (`--shadow-brand`) gives terracotta buttons a warm glow.
- **Borders** are hairline warm sand; `--border-focus` clay for inputs; focus ring is a soft clay halo (`--focus-ring`).

### Backgrounds & texture
- Predominantly **warm solid fills** (sand-50, cream). 
- **Organic blob shapes** in blush/clay at low opacity add softness behind heroes and section headers — provided as brand assets, never busy.
- Optional subtle **paper grain** texture for premium tactility (very low opacity).
- **No** heavy gradients, no bluish-purple gradients, no neon. A gentle warm cream→white wash is the only gradient used.

### Imagery
- **Soft real photography**, warm-graded (see IMAGERY / ICONOGRAPHY): women, mothers, families, calm clinical moments; natural light, warm skin tones, shallow depth of field.
- Photos sit in **rounded frames** (`--radius-lg`/`xl`), often with a blush blob or cream panel behind for depth.
- Avoid stocky, cold, or overly clinical hospital imagery.

### Motion
- **Gentle and reassuring.** `--ease-out` soft settle for most transitions; `--ease-spring` for playful micro-moments (badge pop, check). Durations 140–360ms.
- Hover: color deepen (clay-600→700) + soft lift; **press**: slight shrink (scale .98) + deeper color. No bounce on primary actions.
- Fades and short rises on scroll-in; **respect `prefers-reduced-motion`**. No infinite decorative loops.

### Transparency & blur
- Sticky nav uses a translucent warm-white with `backdrop-filter: blur(var(--blur-md))`.
- Glass is used sparingly — nav, image overlays (protection gradient for legibility over photos).

---

## 4. Iconography

- **System: [Lucide](https://lucide.dev)** — clean, rounded, humanist **stroke** icons (2px, round caps/joins) that match the soft, human brand. MIT-licensed.
- In React components/UI kits, use the in-system **`Icon`** component (curated Lucide paths inlined — no runtime CDN dependency). In static card/kit HTML you may also use the Lucide CDN (`<script src="https://unpkg.com/lucide@latest"></script>` + `data-lucide` attrs).
- **Default size** 20–24px; stroke inherits `currentColor` so icons take text/brand color. Icons in circular soft-tint chips (blush/clay-50) are a signature pattern for service cards.
- **No emoji as UI icons** in the premium system (source site used ✅🏩 — replaced by Lucide). A heart/shield/stethoscope motif recurs for the caring/medical tone.
- **No hand-drawn/reconstructed brand logos.** The brand mark is a **wordmark set in Hanken Grotesk** (see BRAND MARK card) since no logo file was provided.

---

## 5. Fonts

**Hanken Grotesk** is loaded from the **Google Fonts CDN** via `tokens/fonts.css` (both an `@import` and explicit `@font-face` declarations pointing at `fonts.gstatic.com`).

> ⚠️ **Substitution flag:** No brand font files were provided, so Hanken Grotesk (a close warm-humanist match for the requested "modern approachable sans") is loaded from CDN. **To self-host** or swap to your real brand font: drop the woff2 files in `assets/fonts/` and update the `src: url(...)` targets in `tokens/fonts.css`. Let me know if you'd like this.

---

## 6. Index / Manifest

**Root**
- `styles.css` — global entry (import list only). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent Skills manifest for downloadable use.

**Tokens** (`tokens/`) — all `@import`ed by `styles.css`
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`

**Foundations** (`foundations/`) — `@dsCard` specimen cards: Type, Colors, Spacing, Brand.

**Components** (`components/`) — reusable React primitives (see below), each with `.jsx` + `.d.ts` + `.prompt.md`, one `@dsCard` per group.

**UI Kits** (`ui_kits/`)
- `website/` — marketing site (hero, services, reviews, FAQ)
- `booking/` — WhatsApp-style patient booking flow
- `portal/` — patient portal / dashboard (appointments, reports)

**Assets** (`assets/`) — brand textures/blobs, imagery references, (no logo file — wordmark in type).

### Component inventory
Standard set (from-scratch — no source component library existed):
- **Forms:** `Button`, `IconButton`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
- **Display/feedback:** `Card`, `Badge`, `Tag`, `Avatar`, `ServiceCard`, `Testimonial`, `Accordion`, `Tabs`, `Dialog`, `Icon`

> **Intentional additions** (not in source, added for the standard kit): `Icon` (Lucide wrapper for the glyph set), `ServiceCard` & `Testimonial` (domain patterns central to the practice site), `Avatar` (portal/reviews). All others are the standard baseline set requested.
