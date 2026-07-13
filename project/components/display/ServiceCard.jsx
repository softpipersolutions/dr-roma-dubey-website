import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * ServiceCard — a signature marketing pattern: an icon in a soft circle,
 * a title, a short description and an optional link. Lifts on hover.
 */
export function ServiceCard({
  icon = 'heart', title, description, href, linkLabel = 'Learn more',
  tone = 'brand', onClick, style = {}, ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const chip = {
    brand: { bg: 'var(--clay-50)', fg: 'var(--clay-600)' },
    blush: { bg: 'var(--blush-100)', fg: 'var(--clay-700)' },
    sage: { bg: 'var(--sage-100)', fg: 'var(--sage-700)' },
    dusk: { bg: 'var(--dusk-100)', fg: 'var(--dusk-700)' },
  }[tone] || { bg: 'var(--clay-50)', fg: 'var(--clay-600)' };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        padding: 'var(--space-6)', background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
        boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        cursor: href || onClick ? 'pointer' : 'default', height: '100%', ...style,
      }}
      {...rest}
    >
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 52, height: 52, borderRadius: 'var(--radius-md)',
        background: chip.bg, color: chip.fg,
        transition: 'transform var(--dur-base) var(--ease-spring)',
        transform: hovered ? 'scale(1.06) rotate(-3deg)' : 'none',
      }}>
        <Icon name={icon} size={26} />
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
        <h3 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 'var(--fw-bold)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>{title}</h3>
        {description && <p style={{ margin: 0, fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--text-muted)' }}>{description}</p>}
      </div>
      {href && (
        <a href={href} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none',
          color: 'var(--text-link)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--text-sm)',
        }}>
          {linkLabel}
          <span style={{ transition: 'transform var(--dur-fast) var(--ease-out)', transform: hovered ? 'translateX(3px)' : 'none', display: 'inline-flex' }}>
            <Icon name="arrow-right" size={16} />
          </span>
        </a>
      )}
    </div>
  );
}
