'use client';

import React, { useEffect } from 'react';
import { Icon } from './Icon';

export type DialogSize = 'sm' | 'md' | 'lg';

/** A centered modal over a warm blurred scrim. Closes on Escape / scrim / ×. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned footer actions (usually Buttons) */
  footer?: React.ReactNode;
  size?: DialogSize | number;
  showClose?: boolean;
  style?: React.CSSProperties;
}

const WIDTHS: Record<string, number> = { sm: 400, md: 520, lg: 680 };

/**
 * Dialog — a centered modal over a warm blurred scrim. Closes on Escape,
 * scrim click, or the close button.
 */
export function Dialog({ open, onClose, title, description, children, footer, size = 'md', showClose = true, style = {} }: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog" aria-modal="true"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 'var(--z-modal)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-5)',
        background: 'color-mix(in srgb, var(--sand-900) 45%, transparent)',
        backdropFilter: 'blur(var(--blur-sm))', WebkitBackdropFilter: 'blur(var(--blur-sm))',
        animation: 'drd-fade var(--dur-base) var(--ease-out)',
      }}>
      <div style={{
        width: '100%', maxWidth: WIDTHS[size] || size, maxHeight: '90vh', overflowY: 'auto',
        background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-xl)', padding: 'var(--space-8)',
        animation: 'drd-pop var(--dur-slow) var(--ease-spring)', position: 'relative', ...style,
      }}>
        {showClose && (
          <button type="button" onClick={onClose} aria-label="Close"
            style={{ position: 'absolute', top: 'var(--space-5)', right: 'var(--space-5)', display: 'inline-flex', width: 36, height: 36, alignItems: 'center', justifyContent: 'center', border: 'none', background: 'var(--sand-100)', borderRadius: '50%', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <Icon name="x" size={18} />
          </button>
        )}
        {title && <h2 style={{ margin: 0, marginBottom: description ? 6 : 'var(--space-5)', fontSize: 'var(--text-xl)', fontWeight: 'var(--fw-bold)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)', paddingRight: showClose ? 40 : 0 }}>{title}</h2>}
        {description && <p style={{ margin: 0, marginBottom: 'var(--space-5)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--text-muted)' }}>{description}</p>}
        <div>{children}</div>
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)', marginTop: 'var(--space-8)' }}>{footer}</div>}
      </div>
      <style>{`@keyframes drd-fade{from{opacity:0}to{opacity:1}}@keyframes drd-pop{from{opacity:0;transform:translateY(12px) scale(0.97)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}
