import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Tabs — underline or pill tab set. `items`: [{value,label,icon,content}].
 * Controlled via `value`/`onChange` or uncontrolled via `defaultValue`.
 */
export function Tabs({ items = [], value, defaultValue, onChange, variant = 'underline', style = {} }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value);
  const active = isControlled ? value : internal;
  const select = (v) => { if (!isControlled) setInternal(v); onChange && onChange(v); };
  const activeItem = items.find((it) => it.value === active);
  const pill = variant === 'pill';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', ...style }}>
      <div role="tablist" style={{
        display: 'inline-flex', gap: pill ? 6 : 4, alignItems: 'center',
        borderBottom: pill ? 'none' : '1px solid var(--border-subtle)',
        background: pill ? 'var(--sand-100)' : 'transparent',
        padding: pill ? 5 : 0, borderRadius: pill ? 'var(--radius-pill)' : 0,
        width: pill ? 'fit-content' : '100%',
      }}>
        {items.map((it) => {
          const on = it.value === active;
          return (
            <button key={it.value} role="tab" aria-selected={on} onClick={() => select(it.value)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7, cursor: 'pointer',
                border: 'none', font: 'inherit', fontSize: 'var(--text-base)',
                fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
                padding: pill ? '8px 18px' : '10px 14px',
                color: on ? (pill ? 'var(--clay-800)' : 'var(--text-brand)') : 'var(--text-muted)',
                background: pill ? (on ? 'var(--surface-card)' : 'transparent') : 'transparent',
                borderRadius: pill ? 'var(--radius-pill)' : 0,
                boxShadow: pill && on ? 'var(--shadow-xs)' : 'none',
                borderBottom: pill ? 'none' : `2px solid ${on ? 'var(--action-primary)' : 'transparent'}`,
                marginBottom: pill ? 0 : -1,
                transition: 'var(--transition-colors)',
              }}>
              {it.icon && <Icon name={it.icon} size={17} />}
              {it.label}
            </button>
          );
        })}
      </div>
      {activeItem && activeItem.content !== undefined && (
        <div role="tabpanel">{activeItem.content}</div>
      )}
    </div>
  );
}
