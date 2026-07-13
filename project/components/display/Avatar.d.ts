import * as React from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarStatus = 'online' | 'away' | 'offline';

/** Circular photo or initials, with optional status dot. Initials use a blush bg. */
export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  src?: string;
  /** Name — used for initials fallback and alt text */
  name?: string;
  size?: AvatarSize | number;
  status?: AvatarStatus;
  ring?: boolean;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
