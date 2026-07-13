import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Tag — a chip for categories/filters. Optional leading icon and remove button.
 */
export function Tag({ children, icon, onRemove, selected = false, style = {}, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 12px', borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--clay-100)' : 'var(--surface-card)',
      border: `1px solid ${selected ? 'var(--clay-300)' : 'var(--border-default)'}`,
      color: selected ? 'var(--clay-800)' : 'var(--text-body)',
      fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-medium)', lineHeight: 1,
      transition: 'var(--transition-colors)', ...style,
    }} {...rest}>
      {icon && <Icon name={icon} size={14} />}
      {children}
      {onRemove && (
        <button type="button" onClick={onRemove} aria-label="Remove"
          style={{ display: 'inline-flex', border: 'none', background: 'transparent', padding: 0, marginLeft: 2, cursor: 'pointer', color: 'var(--text-subtle)', borderRadius: '50%' }}>
          <Icon name="x" size={14} />
        </button>
      )}
    </span>
  );
}
