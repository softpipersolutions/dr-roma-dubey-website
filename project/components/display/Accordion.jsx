import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Accordion — expandable FAQ-style list. `type="single"` (default) keeps
 * one panel open; `"multiple"` allows many.
 */
export function Accordion({ items = [], type = 'single', defaultOpen = [], style = {} }) {
  const [open, setOpen] = useState(new Set(defaultOpen));
  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(type === 'multiple' ? prev : []);
      if (prev.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{
            background: 'var(--surface-card)', border: `1px solid ${isOpen ? 'var(--border-brand)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-md)', overflow: 'hidden',
            transition: 'border-color var(--dur-fast) var(--ease-out)', boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
          }}>
            <button type="button" onClick={() => toggle(i)} aria-expanded={isOpen}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                width: '100%', padding: 'var(--space-5)', border: 'none', background: 'transparent',
                cursor: 'pointer', textAlign: 'left', font: 'inherit',
                fontSize: 'var(--text-md)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)',
              }}>
              {it.title}
              <span style={{ display: 'inline-flex', color: 'var(--clay-600)', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}>
                <Icon name="chevron-down" size={20} />
              </span>
            </button>
            <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows var(--dur-base) var(--ease-out)' }}>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ padding: '0 var(--space-5) var(--space-5)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)' }}>
                  {it.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
