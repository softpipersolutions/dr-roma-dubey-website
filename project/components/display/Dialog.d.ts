import * as React from 'react';

export type DialogSize = 'sm' | 'md' | 'lg';

/** A centered modal over a warm blurred scrim. Closes on Escape / scrim / ×. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned footer actions (usually Buttons) */
  footer?: React.ReactNode;
  size?: DialogSize | number;
  showClose?: boolean;
  style?: React.CSSProperties;
}

export function Dialog(props: DialogProps): JSX.Element | null;
