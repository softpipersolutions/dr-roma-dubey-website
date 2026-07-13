'use client';

import React from 'react';

export type SwitchSize = 'sm' | 'md';

/** A warm on/off toggle. Controlled or uncontrolled. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'type' | 'size'> {
  label?: React.ReactNode;
  size?: SwitchSize;
  style?: React.CSSProperties;
}

const SIZES: Record<SwitchSize, { w: number; h: number; knob: number }> = {
  sm: { w: 38, h: 22, knob: 16 },
  md: { w: 46, h: 26, knob: 20 },
};

/**
 * Switch — a warm on/off toggle. Controlled or uncontrolled.
 */
export function Switch({ label, checked, defaultChecked, disabled = false, size = 'md', onChange, id, style = {}, ...rest }: SwitchProps) {
  const fieldId = id || `sw-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const sz = SIZES[size] || SIZES.md;
  const toggle = (e: React.ChangeEvent<HTMLInputElement>) => { if (disabled) return; if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };

  return (
    <label htmlFor={fieldId} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1, ...style }}>
      <input id={fieldId} type="checkbox" role="switch" checked={on} disabled={disabled} onChange={toggle} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        position: 'relative', width: sz.w, height: sz.h, flexShrink: 0,
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--action-primary)' : 'var(--sand-300)',
        transition: 'background-color var(--dur-base) var(--ease-out)',
        boxShadow: 'var(--shadow-inset)',
      }}>
        <span style={{
          position: 'absolute', top: (sz.h - sz.knob) / 2,
          left: on ? sz.w - sz.knob - (sz.h - sz.knob) / 2 : (sz.h - sz.knob) / 2,
          width: sz.knob, height: sz.knob, borderRadius: '50%', background: '#fff',
          boxShadow: 'var(--shadow-sm)', transition: 'left var(--dur-base) var(--ease-spring)',
        }} />
      </span>
      {label && <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)' }}>{label}</span>}
    </label>
  );
}
