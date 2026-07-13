import React, { useState } from 'react';

const VARIANTS = {
  elevated: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' },
  outline: { background: 'var(--surface-card)', border: '1px solid var(--border-default)', boxShadow: 'none' },
  soft: { background: 'var(--surface-brand-soft)', border: '1px solid transparent', boxShadow: 'none' },
  cream: { background: 'var(--surface-cream)', border: '1px solid transparent', boxShadow: 'none' },
  ghost: { background: 'transparent', border: '1px solid transparent', boxShadow: 'none' },
};

const PADS = { none: 0, sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' };

/**
 * Card — a warm rounded surface container. Optional hover lift for
 * clickable cards.
 */
export function Card({
  children, variant = 'elevated', padding = 'md', radius = 'var(--radius-lg)',
  interactive = false, as = 'div', style = {}, onClick, ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.elevated;
  const Tag = as;
  const lift = interactive && hovered;
  return (
    <Tag
      onClick={onClick}
      onMouseEnter={() => interactive && setHovered(true)}
      onMouseLeave={() => interactive && setHovered(false)}
      style={{
        display: 'block', borderRadius: radius, padding: PADS[padding] ?? padding,
        cursor: interactive || onClick ? 'pointer' : 'default',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        transform: lift ? 'translateY(-4px)' : 'none',
        ...v,
        boxShadow: lift ? 'var(--shadow-lg)' : v.boxShadow,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
