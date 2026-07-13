import * as React from 'react';

/** A labelled multi-line text field with hint / error. */
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export function Textarea(props: TextareaProps): JSX.Element;
