import * as React from 'react';
import { IconName } from '../core/Icon';

export type IconButtonVariant = 'solid' | 'soft' | 'outline' | 'ghost';
export type IconButtonSize = 'sm' | 'md' | 'lg';

/** A square/rounded button carrying a single icon. Always give a `label` for a11y. */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  icon: IconName;
  /** Accessible label (aria-label + title) */
  label: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  /** Fully rounded (pill/circle) instead of squircle */
  round?: boolean;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
