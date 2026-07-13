import * as React from 'react';

export type SelectSize = 'sm' | 'md' | 'lg';
export interface SelectOption { value: string; label: string; }

/** A labelled native dropdown styled to match Input, with a chevron. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  /** Options as strings or {value,label}. Or pass <option> children. */
  options?: (SelectOption | string)[];
  placeholder?: string;
  size?: SelectSize;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
