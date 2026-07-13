import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  neutral: { soft: { bg: 'var(--sand-100)', fg: 'var(--sand-700)' }, solid: { bg: 'var(--sand-700)', fg: '#fff' } },
  brand: { soft: { bg: 'var(--clay-50)', fg: 'var(--clay-700)' }, solid: { bg: 'var(--action-primary)', fg: '#fff' } },
  blush: { soft: { bg: 'var(--blush-100)', fg: 'var(--clay-800)' }, solid: { bg: 'var(--blush-500)', fg: 'var(--clay-900)' } },
  success: { soft: { bg: 'var(--success-soft)', fg: 'var(--success-text)' }, solid: { bg: 'var(--success)', fg: '#fff' } },
  warning: { soft: { bg: 'var(--warning-soft)', fg: 'var(--warning-text)' }, solid: { bg: 'var(--warning)', fg: '#fff' } },
  danger: { soft: { bg: 'var(--danger-soft)', fg: 'var(--danger-text)' }, solid: { bg: 'var(--danger)', fg: '#fff' } },
  info: { soft: { bg: 'var(--info-soft)', fg: 'var(--info-text)' }, solid: { bg: 'var(--info)', fg: '#fff' } },
};

/**
 * Badge — a small status pill. Tones + soft/solid, optional icon or dot.
 */
export function Badge({ children, tone = 'neutral', solid = false, icon, dot = false, size = 'md', style = {}, ...rest }) {
  const t = (TONES[tone] || TONES.neutral)[solid ? 'solid' : 'soft'];
  const s = size === 'sm' ? { fontSize: 'var(--text-xs)', padding: '3px 8px', gap: 4, icon: 12 } : { fontSize: 'var(--text-sm)', padding: '5px 12px', gap: 5, icon: 14 };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: s.gap,
      padding: s.padding, borderRadius: 'var(--radius-pill)',
      background: t.bg, color: t.fg,
      fontSize: s.fontSize, fontWeight: 'var(--fw-semibold)', lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)', whiteSpace: 'nowrap', ...style,
    }} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
      {icon && <Icon name={icon} size={s.icon} />}
      {children}
    </span>
  );
}
