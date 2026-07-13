import * as React from 'react';

/** Custom warm checkbox with label. Controlled (`checked`) or uncontrolled (`defaultChecked`). */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'type'> {
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
