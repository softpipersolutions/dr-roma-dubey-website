# Accordion

Expandable list for FAQs and disclosures. Smooth height animation; chevron rotates. `single` (default) keeps one panel open at a time.

```jsx
<Accordion defaultOpen={[0]} items={[
  { title: 'How can I book an appointment?', content: 'You can book through call or WhatsApp…' },
  { title: 'What should I bring for my first visit?', content: 'Any previous records, reports…' },
]} />
```

Props: `items` ([{title, content}]), `type` (`single|multiple`), `defaultOpen`.
