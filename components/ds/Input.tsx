'use client';

import React, { useState } from 'react';
import { Icon } from './Icon';
import { IconName } from './Icon';

export type InputSize = 'sm' | 'md' | 'lg';

/** A labelled text field with optional leading icon, hint and error state. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'style'> {
  label?: string;
  hint?: string;
  /** Error message — shows red border + alert icon */
  error?: string;
  leftIcon?: IconName;
  size?: InputSize;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const SIZES: Record<InputSize, { height: number; font: string; pad: number; icon: number }> = {
  sm: { height: 40, font: 'var(--text-sm)', pad: 12, icon: 16 },
  md: { height: 48, font: 'var(--text-base)', pad: 14, icon: 18 },
  lg: { height: 56, font: 'var(--text-md)', pad: 16, icon: 20 },
};

/**
 * Input — a labelled text field with optional icon, hint and error.
 */
export function Input({
  label,
  hint,
  error,
  leftIcon,
  size = 'md',
  id,
  required = false,
  disabled = false,
  style = {},
  containerStyle = {},
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const sz = SIZES[size] || SIZES.md;
  const fieldId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...containerStyle }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-body)', letterSpacing: 'var(--tracking-tight)' }}>
          {label}{required && <span style={{ color: 'var(--danger)', marginLeft: 2 }}>*</span>}
        </label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: sz.height, padding: `0 ${sz.pad}px`,
        background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
        border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        opacity: disabled ? 0.65 : 1,
      }}>
        {leftIcon && <span style={{ color: focused ? 'var(--clay-600)' : 'var(--text-subtle)', display: 'flex' }}><Icon name={leftIcon} size={sz.icon} /></span>}
        <input
          id={fieldId}
          disabled={disabled}
          required={required}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
          {...rest}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: sz.font, color: 'var(--text-strong)',
            padding: 0, height: '100%', ...style,
          }}
        />
      </div>
      {(hint || error) && (
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 'var(--text-sm)', color: error ? 'var(--danger-text)' : 'var(--text-subtle)' }}>
          {error && <Icon name="alert-circle" size={14} />}
          {error || hint}
        </span>
      )}
    </div>
  );
}
