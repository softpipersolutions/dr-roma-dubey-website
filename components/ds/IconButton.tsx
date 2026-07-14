'use client';

import React, { useState } from 'react';
import { Icon } from './Icon';
import { IconName } from './Icon';

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
  /** Render as another element/component (e.g. 'a' or next/link) */
  as?: any;
  href?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
}

const SIZES: Record<IconButtonSize, { box: number; icon: number }> = {
  sm: { box: 36, icon: 18 },
  md: { box: 44, icon: 20 },
  lg: { box: 52, icon: 24 },
};

function vStyle(variant: IconButtonVariant, s: { hovered: boolean; pressed: boolean }): React.CSSProperties {
  const V: Record<IconButtonVariant, { base: React.CSSProperties; hover: React.CSSProperties; press: React.CSSProperties }> = {
    solid: { base: { background: 'var(--action-primary)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-sm)' }, hover: { background: 'var(--action-primary-hover)' }, press: { background: 'var(--action-primary-active)' } },
    soft: { base: { background: 'var(--clay-50)', color: 'var(--clay-700)', border: '1px solid transparent' }, hover: { background: 'var(--clay-100)' }, press: { background: 'var(--clay-200)' } },
    outline: { base: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-default)' }, hover: { background: 'var(--sand-50)', border: '1px solid var(--border-strong)' }, press: { background: 'var(--sand-100)' } },
    ghost: { base: { background: 'transparent', color: 'var(--text-muted)', border: '1px solid transparent' }, hover: { background: 'var(--sand-100)', color: 'var(--text-body)' }, press: { background: 'var(--sand-200)' } },
  };
  const v = V[variant] || V.soft;
  return { ...v.base, ...(s.hovered ? v.hover : null), ...(s.pressed ? v.press : null) };
}

/**
 * IconButton — a square/rounded button carrying a single Icon.
 */
export function IconButton({
  icon,
  label,
  variant = 'soft',
  size = 'md',
  round = false,
  disabled = false,
  as = 'button',
  style = {},
  onClick,
  ...rest
}: IconButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const sz = SIZES[size] || SIZES.md;
  const v = vStyle(variant, { hovered: hovered && !disabled, pressed: pressed && !disabled });
  const Tag = as;
  return (
    <Tag
      type={as === 'button' ? 'button' : undefined}
      aria-label={label}
      title={label}
      disabled={as === 'button' ? disabled : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={disabled ? undefined : onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: sz.box, height: sz.box,
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transform: pressed && !disabled ? 'scale(0.94)' : 'none',
        transition: 'transform var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        padding: 0, outline: 'none',
        ...v, ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={sz.icon} />
    </Tag>
  );
}
