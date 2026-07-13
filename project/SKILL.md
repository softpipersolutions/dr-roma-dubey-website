---
name: dr-roma-dubey-design
description: Use this skill to generate well-branded interfaces and assets for Dr. Roma Dubey (women's health & gynaecology practice), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Dr. Roma Dubey — Design System

A warm, nurturing, premium design system for a women's health & gynaecology practice. Palette: terracotta clay, soft blush, warm sand neutrals, espresso ink. One typeface (Hanken Grotesk). Rounded, soft, human.

## How to use this skill
Read `readme.md` first — it is the full design guide (brand context, content voice, visual foundations, iconography, and a file index). Then explore the folders below.

- If you're creating **visual artifacts** (slides, mocks, throwaway prototypes): copy the assets you need out of `assets/`, link `styles.css` for the design tokens, and produce static HTML files the user can view. Reuse the component patterns from `components/` and the full screens in `ui_kits/`.
- If you're working on **production code**: read the token CSS in `tokens/`, the component sources in `components/`, and adopt the rules in `readme.md` to become an expert in this brand.
- If invoked **without guidance**: ask what the user wants to build or design, ask a few focused questions, then act as an expert designer who outputs HTML artifacts *or* production code as needed.

## What's inside
- `styles.css` — global entry (import list). Link this one file to get all tokens + fonts.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css` (CSS custom properties; both base ramps and semantic aliases).
- `components/` — React primitives: **forms** (Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch) · **display** (Card, Badge, Tag, Avatar, ServiceCard, Testimonial, Accordion, Tabs, Dialog) · **core** (Icon — curated Lucide set). Each has a `.d.ts` contract and a `.prompt.md` usage note.
- `ui_kits/` — full-screen recreations: `website/` (marketing site), `booking/` (WhatsApp-style chat booking), `portal/` (patient dashboard).
- `foundations/` — specimen cards for colors, type, spacing, brand.
- `assets/` — generated brand textures (blobs, mesh, grain), a sample UPI QR, and `imagery.md` (curated warm photography references).

## Key rules (see readme.md for the full guide)
- **Voice:** warm, reassuring, quietly expert. Speak to "you"; the practice is "we". Sentence case. No hype, no emoji walls, no cold jargon.
- **Color:** terracotta `--clay-600` for actions (AA on white), blush for soft accents, warm sand neutrals (never cold gray), cream for section rhythm. One–two backgrounds per page.
- **Type:** Hanken Grotesk only; 800 tight-tracked display, 16–18px body. Eyebrows are the one place letters track out.
- **Shape/depth:** generous radii (cards 20px, pills for buttons), soft espresso-tinted shadows (never black).
- **Icons:** the `Icon` component (Lucide stroke set) — never emoji as UI icons.
- **No real logo** was provided — the brand mark is a wordmark set in Hanken Grotesk. Never invent a logo.
- **Fonts** load from Google Fonts CDN; **photography** uses Unsplash placeholders — swap both for the practice's real assets in production.
