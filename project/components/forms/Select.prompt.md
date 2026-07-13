# Select

Labelled dropdown matching Input's frame, with a chevron affordance. Pass `options` (strings or `{value,label}`) or `<option>` children.

```jsx
<Select label="Clinic" placeholder="Choose a location"
  options={['Maitri Mahila Clinic', 'Aryavart Hospital']} />
<Select label="Service" options={[{value:'anc',label:'Antenatal care'},{value:'pcos',label:'PCOS'}]} />
```

Props: `label`, `hint`, `error`, `options`, `placeholder`, `size`.
