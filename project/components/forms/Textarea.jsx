import React, { useState } from 'react';

/**
 * Textarea — a labelled multi-line text field with hint / error.
 */
export function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  required = false,
  disabled = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || `ta-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...containerStyle }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-body)', letterSpacing: 'var(--tracking-tight)' }}>
          {label}{required && <span style={{ color: 'var(--danger)', marginLeft: 2 }}>*</span>}
        </label>
      )}
      <textarea
        id={fieldId}
        rows={rows}
        disabled={disabled}
        required={required}
        onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
        {...rest}
        style={{
          width: '100%', resize: 'vertical', minHeight: 96,
          padding: '12px 14px',
          background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
          border: `1.5px solid ${borderColor}`,
          borderRadius: 'var(--radius-md)',
          boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-strong)',
          lineHeight: 'var(--leading-normal)', outline: 'none',
          transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
          opacity: disabled ? 0.65 : 1, ...style,
        }}
      />
      {(hint || error) && (
        <span style={{ fontSize: 'var(--text-sm)', color: error ? 'var(--danger-text)' : 'var(--text-subtle)' }}>{error || hint}</span>
      )}
    </div>
  );
}
