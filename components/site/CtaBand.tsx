import Link from 'next/link';
import { Button, Icon } from '@/components/ds';
import { SITE } from '@/lib/site';
import { BLOBS } from '@/lib/photos';

export function CtaBand({
  title = 'Ready when you are',
  text = 'Have a question or want to book a visit? Connect with Dr. Roma’s team on WhatsApp — one chat, no forms.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-2xl)', background: 'linear-gradient(120deg, var(--clay-600), var(--clay-500))', color: '#fff', padding: 'clamp(28px, 5vw, 56px)', boxShadow: 'var(--shadow-brand)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BLOBS.cream} alt="" aria-hidden="true" style={{ position: 'absolute', top: -90, right: -50, width: 340, opacity: 0.22, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 560 }}>
              <h2 style={{ margin: 0, fontSize: 'var(--text-display-md)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', lineHeight: 1.1 }}>{title}</h2>
              <p style={{ margin: '12px 0 0', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', opacity: 0.95 }}>{text}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="whatsapp" size="lg" leftIcon="message" as={Link} href="/book">Book on WhatsApp</Button>
              <Button variant="secondary" size="lg" as={Link} href="/contact" rightIcon="arrow-right">Contact us</Button>
            </div>
          </div>
          <div style={{ position: 'relative', marginTop: 22, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.22)', display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: 'var(--text-sm)', opacity: 0.95 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="phone" size={16} /> {SITE.phoneDisplay}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="clock" size={16} /> {SITE.hours}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="map-pin" size={16} /> {SITE.city}, {SITE.regionCode}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
