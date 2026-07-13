import * as React from 'react';

/** A single custom radio; group by sharing `name`. */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'type'> {
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;

export interface RadioGroupOption { value: string; label: string; disabled?: boolean; }
export interface RadioGroupProps {
  name: string;
  options: (RadioGroupOption | string)[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: 'row' | 'column';
  gap?: number;
  style?: React.CSSProperties;
}
export function RadioGroup(props: RadioGroupProps): JSX.Element;
