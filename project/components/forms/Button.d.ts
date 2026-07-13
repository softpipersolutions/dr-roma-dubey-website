import * as React from 'react';
import { IconName } from '../core/Icon';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Warm pill-shaped action button. Terracotta primary, blush secondary,
 * plus a WhatsApp variant for the practice's connect CTAs.
 *
 * @startingPoint section="Forms" subtitle="Pill buttons — terracotta, blush, WhatsApp" viewport="700x220"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icon name shown before the label */
  leftIcon?: IconName;
  /** Icon name shown after the label */
  rightIcon?: IconName;
  fullWidth?: boolean;
  /** Shows a spinner and disables the button */
  loading?: boolean;
  /** Render as another element/component (e.g. 'a') */
  as?: any;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
