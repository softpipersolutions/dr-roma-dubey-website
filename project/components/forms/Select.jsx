import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

const SIZES = {
  sm: { height: 40, font: 'var(--text-sm)', pad: 12 },
  md: { height: 48, font: 'var(--text-base)', pad: 14 },
  lg: { height: 56, font: 'var(--text-md)', pad: 16 },
};

/**
 * Select — a labelled native dropdown styled to match Input.
 * Pass `options` (array of {value,label} or strings) or children <option>.
 */
export function Select({
  label, hint, error, options, placeholder, size = 'md',
  id, required = false, disabled = false, children, style = {}, containerStyle = {}, ...rest
}) {
  const [focused, setFocused] = useState(false);
  const sz = SIZES[size] || SIZES.md;
  const fieldId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)';
  const opts = (options || []).map((o) => (typeof o === 'string' ? { value: o, label: o } : o));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...containerStyle }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-body)', letterSpacing: 'var(--tracking-tight)' }}>
          {label}{required && <span style={{ color: 'var(--danger)', marginLeft: 2 }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select
          id={fieldId}
          disabled={disabled}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
          style={{
            appearance: 'none', WebkitAppearance: 'none', width: '100%',
            height: sz.height, padding: `0 ${sz.pad + 26}px 0 ${sz.pad}px`,
            background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
            border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
            boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
            fontFamily: 'var(--font-sans)', fontSize: sz.font,
            color: 'var(--text-strong)', cursor: disabled ? 'not-allowed' : 'pointer',
            outline: 'none', opacity: disabled ? 0.65 : 1,
            transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
            ...style,
          }}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {opts.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          {children}
        </select>
        <span style={{ position: 'absolute', right: sz.pad, pointerEvents: 'none', color: 'var(--text-subtle)', display: 'flex' }}>
          <Icon name="chevron-down" size={18} />
        </span>
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 'var(--text-sm)', color: error ? 'var(--danger-text)' : 'var(--text-subtle)' }}>{error || hint}</span>
      )}
    </div>
  );
}
