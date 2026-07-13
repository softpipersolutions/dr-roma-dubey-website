# Tabs

Switch between related panels. `underline` (default) for page sections; `pill` for compact segmented controls.

```jsx
<Tabs defaultValue="upcoming" items={[
  { value: 'upcoming', label: 'Upcoming', icon: 'calendar', content: <…/> },
  { value: 'past', label: 'Past visits', content: <…/> },
]} />

<Tabs variant="pill" items={[{value:'week',label:'Week'},{value:'month',label:'Month'}]} />
```

Props: `items` ([{value,label,icon,content}]), `value`/`defaultValue`, `onChange`, `variant`.
