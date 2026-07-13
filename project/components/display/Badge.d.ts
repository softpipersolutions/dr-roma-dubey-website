import * as React from 'react';
import { IconName } from '../core/Icon';

export type BadgeTone = 'neutral' | 'brand' | 'blush' | 'success' | 'warning' | 'danger' | 'info';

/** A small status pill. Soft by default; `solid` for filled. */
export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  tone?: BadgeTone;
  solid?: boolean;
  icon?: IconName;
  /** Leading dot instead of icon */
  dot?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
