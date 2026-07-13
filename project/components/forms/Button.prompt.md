# Button

The primary action element — pill-shaped, warm, with a soft lift on hover and a gentle shrink on press. Use `whatsapp` for the practice's signature "Connect on WhatsApp" CTAs.

```jsx
<Button variant="primary" rightIcon="arrow-right">Visit Now</Button>
<Button variant="whatsapp" leftIcon="message">Connect on WhatsApp</Button>
<Button variant="outline">Learn More</Button>
<Button variant="ghost" size="sm">Skip</Button>
```

Variants: `primary` (terracotta, default), `secondary` (blush), `outline`, `ghost`, `whatsapp` (green). Sizes: `sm | md | lg`. Props: `leftIcon`/`rightIcon` (Icon names), `loading`, `disabled`, `fullWidth`, `as` (e.g. `'a'` for links).
