# Input

Labelled single-line text field. Warm rounded frame, clay focus ring, optional leading icon, hint text, and error state.

```jsx
<Input label="Full name" placeholder="Your name" required />
<Input label="Phone" leftIcon="phone" placeholder="+91 …" />
<Input label="Email" error="Please enter a valid email" defaultValue="bad" />
```

Props: `label`, `hint`, `error`, `leftIcon` (Icon name), `size` (`sm|md|lg`), plus all native input attrs.
