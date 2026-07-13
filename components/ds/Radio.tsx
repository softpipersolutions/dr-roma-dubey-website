'use client';

import React from 'react';

/** A single custom radio; group by sharing `name`. */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'type'> {
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Radio — a single custom radio with label. Group by sharing `name`.
 */
export function Radio({ label, name, value, checked, defaultChecked, disabled = false, onChange, id, style = {}, ...rest }: RadioProps) {
  const fieldId = id || `rb-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const change = (e: React.ChangeEvent<HTMLInputElement>) => { if (disabled) return; if (!isControlled) setInternal(true); onChange && onChange(e); };

  return (
    <label htmlFor={fieldId} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1, ...style }}>
      <input id={fieldId} type="radio" name={name} value={value} checked={on} disabled={disabled} onChange={change} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 22, height: 22, flexShrink: 0, borderRadius: 'var(--radius-pill)',
        border: `1.5px solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`,
        background: 'var(--surface-card)', transition: 'all var(--dur-fast) var(--ease-out)',
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--action-primary)', transform: on ? 'scale(1)' : 'scale(0)', transition: 'transform var(--dur-fast) var(--ease-spring)' }} />
      </span>
      {label && <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)' }}>{label}</span>}
    </label>
  );
}

export interface RadioGroupOption { value: string; label: string; disabled?: boolean; }
export interface RadioGroupProps {
  name: string;
  options: (RadioGroupOption | string)[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: 'row' | 'column';
  gap?: number;
  style?: React.CSSProperties;
}

/**
 * RadioGroup — convenience wrapper rendering a set of Radios with shared state.
 */
export function RadioGroup({ name, options = [], value, defaultValue, onChange, direction = 'column', gap = 12, style = {} }: RadioGroupProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const opts: RadioGroupOption[] = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: direction, gap, ...style }}>
      {opts.map((o) => (
        <Radio key={o.value} name={name} value={o.value} label={o.label} disabled={o.disabled}
          checked={current === o.value}
          onChange={() => { if (!isControlled) setInternal(o.value); onChange && onChange(o.value); }} />
      ))}
    </div>
  );
}
