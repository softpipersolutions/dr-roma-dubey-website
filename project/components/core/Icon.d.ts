import * as React from 'react';

export type IconName =
  | 'heart' | 'calendar' | 'clock' | 'phone' | 'message' | 'mail'
  | 'check' | 'check-circle' | 'chevron-down' | 'chevron-right' | 'chevron-left'
  | 'arrow-right' | 'arrow-up-right' | 'x' | 'menu' | 'star'
  | 'shield' | 'shield-check' | 'stethoscope' | 'baby' | 'droplet'
  | 'user' | 'users' | 'map-pin' | 'plus' | 'minus' | 'search' | 'bell'
  | 'settings' | 'file-text' | 'activity' | 'info' | 'alert-circle'
  | 'sparkles' | 'video' | 'credit-card' | 'download' | 'log-out' | 'home';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  /** Glyph name from the curated Lucide set */
  name: IconName;
  /** Pixel size (width & height). Default 24 */
  size?: number;
  /** Stroke width. Default 2 */
  strokeWidth?: number;
}

/** Warm rounded stroke icon (Lucide, MIT). Inherits currentColor. */
export function Icon(props: IconProps): JSX.Element | null;

export const ICON_NAMES: IconName[];
