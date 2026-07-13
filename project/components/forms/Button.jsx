import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

const SIZES = {
  sm: { height: 38, padding: '0 16px', fontSize: 'var(--text-sm)', gap: 6, icon: 16 },
  md: { height: 46, padding: '0 22px', fontSize: 'var(--text-base)', gap: 8, icon: 18 },
  lg: { height: 56, padding: '0 30px', fontSize: 'var(--text-md)', gap: 10, icon: 20 },
};

function variantStyle(variant, s) {
  // s = { hovered, pressed, disabled }
  const V = {
    primary: {
      base: { background: 'var(--action-primary)', color: 'var(--on-action-primary)', border: '1px solid transparent', boxShadow: 'var(--shadow-brand)' },
      hover: { background: 'var(--action-primary-hover)' },
      press: { background: 'var(--action-primary-active)' },
    },
    secondary: {
      base: { background: 'var(--action-secondary)', color: 'var(--on-action-secondary)', border: '1px solid transparent', boxShadow: 'var(--shadow-xs)' },
      hover: { background: 'var(--action-secondary-hover)' },
      press: { background: 'var(--action-secondary-active)' },
    },
    outline: {
      base: { background: 'transparent', color: 'var(--text-brand)', border: '1.5px solid var(--border-brand)' },
      hover: { background: 'var(--clay-50)', border: '1.5px solid var(--clay-400)' },
      press: { background: 'var(--clay-100)' },
    },
    ghost: {
      base: { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
      hover: { background: 'var(--sand-100)' },
      press: { background: 'var(--sand-200)' },
    },
    whatsapp: {
      base: { background: 'var(--whatsapp)', color: '#fff', border: '1px solid transparent', boxShadow: '0 12px 28px -12px rgba(37,211,102,0.6)' },
      hover: { background: 'var(--whatsapp-dark)' },
      press: { background: 'var(--whatsapp-dark)' },
    },
  };
  const v = V[variant] || V.primary;
  return { ...v.base, ...(s.hovered ? v.hover : null), ...(s.pressed ? v.press : null) };
}

/**
 * Button — the primary action element. Pill-shaped, warm, with soft lift.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  fullWidth = false,
  loading = false,
  disabled = false,
  type = 'button',
  as = 'button',
  style = {},
  onClick,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const sz = SIZES[size] || SIZES.md;
  const isDisabled = disabled || loading;

  const vStyle = variantStyle(variant, { hovered: hovered && !isDisabled, pressed: pressed && !isDisabled });

  const styles = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: sz.gap,
    height: sz.height,
    padding: sz.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: sz.fontSize,
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--tracking-tight)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.55 : 1,
    transform: pressed && !isDisabled ? 'scale(0.975)' : hovered && !isDisabled ? 'translateY(-1px)' : 'none',
    transition: 'transform var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    outline: 'none',
    ...vStyle,
    ...style,
  };

  const Tag = as;
  return (
    <Tag
      type={as === 'button' ? type : undefined}
      className="drd-button"
      style={styles}
      disabled={as === 'button' ? isDisabled : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onFocus={(e) => { e.currentTarget.style.boxShadow = `${vStyle.boxShadow ? vStyle.boxShadow + ', ' : ''}var(--focus-ring)`; }}
      onBlur={(e) => { e.currentTarget.style.boxShadow = vStyle.boxShadow || 'none'; }}
      onClick={isDisabled ? undefined : onClick}
      {...rest}
    >
      {loading && <Icon name="activity" size={sz.icon} style={{ animation: 'drd-spin 0.9s linear infinite' }} />}
      {!loading && leftIcon && <Icon name={leftIcon} size={sz.icon} />}
      {children}
      {!loading && rightIcon && <Icon name={rightIcon} size={sz.icon} />}
      <style>{`@keyframes drd-spin{to{transform:rotate(360deg)}}`}</style>
    </Tag>
  );
}
