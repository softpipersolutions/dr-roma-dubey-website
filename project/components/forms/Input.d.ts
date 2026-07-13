import * as React from 'react';
import { IconName } from '../core/Icon';

export type InputSize = 'sm' | 'md' | 'lg';

/** A labelled text field with optional leading icon, hint and error state. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'style'> {
  label?: string;
  hint?: string;
  /** Error message — shows red border + alert icon */
  error?: string;
  leftIcon?: IconName;
  size?: InputSize;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
