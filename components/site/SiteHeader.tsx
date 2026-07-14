'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, IconButton, Icon } from '@/components/ds';
import { NAV_LINKS, SITE } from '@/lib/site';
import { whatsAppChatLink } from '@/lib/whatsapp';

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: solid ? 'color-mix(in srgb, var(--sand-50) 88%, transparent)' : 'color-mix(in srgb, var(--sand-50) 70%, transparent)',
        backdropFilter: 'blur(var(--blur-md))',
        WebkitBackdropFilter: 'blur(var(--blur-md))',
        borderBottom: solid ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'background .3s var(--ease-out), border-color .3s var(--ease-out)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--sand-800)' }}>
            Dr. Roma <span style={{ color: 'var(--clay-600)' }}>Dubey</span>
          </span>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginTop: 3 }}>
            {SITE.tagline}
          </span>
        </Link>

        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {NAV_LINKS.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                style={{
                  color: active ? 'var(--clay-700)' : 'var(--text-body)',
                  fontSize: 'var(--text-base)',
                  fontWeight: active ? 'var(--fw-semibold)' : 'var(--fw-medium)',
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <IconButton icon="phone" label="Call the clinic" variant="soft" round as="a" href={whatsAppChatLink('Hi, I’d like to ask about an appointment.')} />
          <Button variant="whatsapp" leftIcon="message" as={Link} href="/book">
            Book on WhatsApp
          </Button>
        </div>

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

      <div
        className="nav-mobile-panel"
        style={{
          display: 'none',
          maxHeight: open ? '85vh' : 0,
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height .32s var(--ease-out), opacity .2s var(--ease-out)',
          borderBottom: open ? '1px solid var(--border-subtle)' : 'none',
          background: 'color-mix(in srgb, var(--sand-50) 96%, transparent)',
          backdropFilter: 'blur(var(--blur-md))',
          WebkitBackdropFilter: 'blur(var(--blur-md))',
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingBlock: 12 }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                padding: '12px 8px',
                borderRadius: 'var(--radius-sm)',
                color: isActive(l.href) ? 'var(--clay-700)' : 'var(--text-body)',
                background: isActive(l.href) ? 'var(--clay-50)' : 'transparent',
                fontSize: 'var(--text-md)',
                fontWeight: 'var(--fw-medium)',
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 10, marginBottom: 6 }}>
            <Button variant="whatsapp" leftIcon="message" fullWidth as={Link} href="/book">
              Book on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
