'use client';

import React from 'react';
import { Icon } from './Icon';

/** Custom warm checkbox with label. Controlled (`checked`) or uncontrolled (`defaultChecked`). */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'type'> {
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Checkbox — custom warm checkbox with label. Controlled or uncontrolled.
 */
export function Checkbox({ label, checked, defaultChecked, disabled = false, onChange, id, style = {}, ...rest }: CheckboxProps) {
  const fieldId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;

  const toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label htmlFor={fieldId} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1, ...style }}>
      <input id={fieldId} type="checkbox" checked={on} disabled={disabled} onChange={toggle} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 22, height: 22, flexShrink: 0,
        borderRadius: 'var(--radius-xs)',
        border: `1.5px solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`,
        background: on ? 'var(--action-primary)' : 'var(--surface-card)',
        color: '#fff', transition: 'all var(--dur-fast) var(--ease-out)',
        boxShadow: on ? 'var(--shadow-xs)' : 'none',
      }}>
        {on && <Icon name="check" size={15} strokeWidth={3} />}
      </span>
      {label && <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)' }}>{label}</span>}
    </label>
  );
}
