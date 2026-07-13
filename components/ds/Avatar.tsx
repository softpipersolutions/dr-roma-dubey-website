import React from 'react';

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

const SIZES: Record<string, number> = { xs: 28, sm: 36, md: 44, lg: 56, xl: 72 };

function initials(name: string = '') {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

/**
 * Avatar — circular photo or initials, with optional status dot.
 * Initials use a warm blush background.
 */
export function Avatar({ src, name = '', size = 'md', status, ring = false, style = {}, ...rest }: AvatarProps) {
  const px: number = typeof size === 'number' ? size : SIZES[size] ?? SIZES.md;
  const statusColors: Record<AvatarStatus, string> = { online: 'var(--success)', away: 'var(--warning)', offline: 'var(--sand-400)' };
  return (
    <span style={{ position: 'relative', display: 'inline-flex', flexShrink: 0, ...style }} {...rest}>
      <span style={{
        width: px, height: px, borderRadius: '50%', overflow: 'hidden',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--blush-200)', color: 'var(--clay-800)',
        fontWeight: 'var(--fw-semibold)', fontSize: px * 0.4,
        border: ring ? '2px solid var(--surface-card)' : 'none',
        boxShadow: ring ? '0 0 0 2px var(--clay-300)' : 'none',
      }}>
        {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials(name)}
      </span>
      {status && (
        <span style={{
          position: 'absolute', right: 0, bottom: 0,
          width: Math.max(8, px * 0.24), height: Math.max(8, px * 0.24),
          borderRadius: '50%', background: statusColors[status] || statusColors.offline,
          border: '2px solid var(--surface-card)',
        }} />
      )}
    </span>
  );
}
