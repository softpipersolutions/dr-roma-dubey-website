import * as React from 'react';

export type SwitchSize = 'sm' | 'md';

/** A warm on/off toggle. Controlled or uncontrolled. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'type' | 'size'> {
  label?: React.ReactNode;
  size?: SwitchSize;
  style?: React.CSSProperties;
}

export function Switch(props: SwitchProps): JSX.Element;
