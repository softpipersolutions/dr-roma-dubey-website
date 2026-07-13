import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Avatar } from './Avatar.jsx';

/**
 * Testimonial — a patient review: star rating, quote, and author row.
 */
export function Testimonial({ quote, author, role, avatarSrc, rating = 5, style = {}, ...rest }) {
  return (
    <figure style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', margin: 0,
      padding: 'var(--space-6)', background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)', height: '100%', ...style,
    }} {...rest}>
      <div style={{ display: 'flex', gap: 2, color: 'var(--clay-500)' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: i < rating ? 'var(--clay-500)' : 'var(--sand-300)', display: 'inline-flex' }}>
            <Icon name="star" size={18} strokeWidth={1.5} style={{ fill: i < rating ? 'var(--clay-500)' : 'transparent' }} />
          </span>
        ))}
      </div>
      <blockquote style={{ margin: 0, flex: 1, fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)' }}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
        <Avatar src={avatarSrc} name={author} size="md" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)', fontSize: 'var(--text-base)' }}>{author}</span>
          {role && <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-subtle)' }}>{role}</span>}
        </div>
      </figcaption>
    </figure>
  );
}
