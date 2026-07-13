# Radio / RadioGroup

Custom warm radio buttons. Use single `Radio`s sharing a `name`, or the `RadioGroup` helper for a managed set.

```jsx
<RadioGroup name="delivery" defaultValue="normal"
  options={[{value:'normal',label:'Normal delivery'},{value:'csection',label:'C-section'}]} />

<Radio name="slot" value="am" label="Morning" defaultChecked />
<Radio name="slot" value="pm" label="Evening" />
```

`RadioGroup` props: `name`, `options`, `value`/`defaultValue`, `onChange(value)`, `direction` (`row|column`).
