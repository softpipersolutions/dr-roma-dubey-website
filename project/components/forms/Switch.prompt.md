# Switch

Warm on/off toggle with a spring knob. Controlled or uncontrolled.

```jsx
<Switch label="Reminders on WhatsApp" defaultChecked />
<Switch label="Dark mode" checked={dark} onChange={e=>setDark(e.target.checked)} />
```

Props: `label`, `checked`/`defaultChecked`, `size` (`sm|md`), `disabled`, `onChange`.
