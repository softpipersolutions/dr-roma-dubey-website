# Checkbox

Warm custom checkbox with terracotta fill and a check glyph. Controlled or uncontrolled.

```jsx
<Checkbox label="I consent to a teleconsultation" defaultChecked />
<Checkbox label="Subscribe to health tips" checked={sub} onChange={e=>setSub(e.target.checked)} />
```

Props: `label`, `checked`/`defaultChecked`, `disabled`, `onChange`.
