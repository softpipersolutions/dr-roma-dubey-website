# UI Kit — Patient Booking (WhatsApp-style)

The practice's signature booking model, recreated as a chat flow: **connect → secure UPI payment → pick a slot → instant confirmation** — all in one conversation.

**Entry:** `index.html` — a phone-framed, interactive chat.

## Files
- `phone.jsx` — lightweight phone frame (status bar, notch, rounded bezel).
- `booking.jsx` — the chat itself: header, message bubbles, typing indicator, quick-reply chips, QR + confirmation cards, and the conversation **state machine** (`FLOW`).
- `app.jsx` — centers the phone on a warm blob backdrop.

## Interaction
Tap the quick-reply chips to drive the flow. The bot advances through: welcome → service → consult type → **sample UPI QR** → "I've paid" → slot chips → **confirmation card** with the chosen service, type, slot and location. "Start over" resets.

## Notes
- Chat-app inspired, **branded to the clinic** (clay avatar, warm palette, our tokens) — not a copy of any messaging product's chrome. Green accent = the practice's WhatsApp connect color (`--whatsapp*`).
- The QR (`/assets/booking-qr.png`) is a decorative sample, not a live payment code.
- Composes `Icon` from the DS bundle; bubbles are custom-styled for the chat medium.
