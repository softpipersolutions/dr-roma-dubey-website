'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, IconButton, Icon } from '@/components/ds';

const links = ['Home', 'About', 'Services', 'Reviews', 'Locations', 'FAQ'];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: solid ? 'color-mix(in srgb, var(--sand-50) 88%, transparent)' : 'transparent',
        backdropFilter: solid ? 'blur(var(--blur-md))' : 'none',
        WebkitBackdropFilter: solid ? 'blur(var(--blur-md))' : 'none',
        borderBottom: solid ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'background .3s var(--ease-out), border-color .3s var(--ease-out)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        <a href="#home" onClick={() => setOpen(false)} style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--sand-800)' }}>
            Dr. Roma <span style={{ color: 'var(--clay-600)' }}>Dubey</span>
          </span>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginTop: 3 }}>
            Gynaecology · Women&apos;s Health
          </span>
        </a>

        {/* desktop nav */}
        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: 'var(--text-body)', fontSize: 'var(--text-base)', fontWeight: 'var(--fw-medium)' }}>
              {l}
            </a>
          ))}
        </nav>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <IconButton icon="phone" label="Call the clinic" variant="soft" round />
          <Button variant="whatsapp" leftIcon="message" as={Link} href="/book">
            Connect on WhatsApp
          </Button>
        </div>

        {/* mobile toggle */}
        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{
            display: 'none',
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border-subtle)',
            background: 'var(--surface-card)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--text-strong)',
            cursor: 'pointer',
          }}
        >
          <Icon name={open ? 'x' : 'menu'} size={22} />
        </button>
      </div>

      {/* mobile menu panel */}
      <div
        className="nav-mobile-panel"
        style={{
          display: 'none',
          maxHeight: open ? '80vh' : 0,
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height .32s var(--ease-out), opacity .2s var(--ease-out)',
          borderBottom: open ? '1px solid var(--border-subtle)' : 'none',
          background: 'color-mix(in srgb, var(--sand-50) 96%, transparent)',
          backdropFilter: 'blur(var(--blur-md))',
          WebkitBackdropFilter: 'blur(var(--blur-md))',
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBlock: 12 }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ padding: '12px 8px', borderRadius: 'var(--radius-sm)', color: 'var(--text-body)', fontSize: 'var(--text-md)', fontWeight: 'var(--fw-medium)' }}
            >
              {l}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 8, marginBottom: 6 }}>
            <Button variant="whatsapp" leftIcon="message" fullWidth as={Link} href="/book">
              Connect on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
