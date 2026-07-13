'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, IconButton } from '@/components/ds';

const links = ['Home', 'About', 'Services', 'Reviews', 'FAQ'];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'color-mix(in srgb, var(--sand-50) 82%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(var(--blur-md))' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(var(--blur-md))' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'background .3s var(--ease-out), border-color .3s var(--ease-out)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        <a href="#home" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--sand-800)' }}>
            Dr. Roma <span style={{ color: 'var(--clay-600)' }}>Dubey</span>
          </span>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginTop: 3 }}>
            Gynaecology · Women&apos;s Health
          </span>
        </a>
        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: 'var(--text-body)', fontSize: 'var(--text-base)', fontWeight: 'var(--fw-medium)' }}>
              {l}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <IconButton icon="phone" label="Call the clinic" variant="soft" round />
          <Button variant="whatsapp" leftIcon="message" as={Link} href="/book">
            Connect on WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
