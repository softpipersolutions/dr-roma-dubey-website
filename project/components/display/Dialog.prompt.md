# Dialog

Centered modal over a warm blurred scrim, with a spring entrance. Closes on Escape, scrim click, or the × button.

```jsx
<Dialog open={open} onClose={() => setOpen(false)}
  title="Confirm your appointment"
  description="We'll send a confirmation on WhatsApp."
  footer={<>
    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </>}>
  …body…
</Dialog>
```

Props: `open`, `onClose`, `title`, `description`, `footer`, `size` (`sm|md|lg`), `showClose`.
