'use client';

import Link from 'next/link';
import { Button, Badge, Icon } from '@/components/ds';
import { PHOTOS, BLOBS } from '@/lib/photos';

export function Hero() {
  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={BLOBS.blush} alt="" aria-hidden="true" style={{ position: 'absolute', top: -160, right: -120, width: 560, opacity: 0.7, pointerEvents: 'none' }} />
      <div className="container hero-grid-wrap" style={{ paddingTop: 64, paddingBottom: 72 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start' }}>
              <Badge tone="brand" icon="sparkles">MBBS · MD · 8+ years</Badge>
            </span>
            <h1 style={{ fontSize: 'var(--text-display-2xl)', fontWeight: 800, letterSpacing: 'var(--tracking-tighter)', lineHeight: 1.04, color: 'var(--sand-800)' }}>
              Compassionate care for <span style={{ color: 'var(--clay-600)' }}>every woman</span>
            </h1>
            <p style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', maxWidth: 520 }}>
              I&apos;m Dr. Roma Dubey — an Obstetrician, Gynaecologist &amp; Laparoscopic Surgeon offering advanced, evidence-based women&apos;s health care at every stage of life.
            </p>
            <div className="hero-cta" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 4 }}>
              <Button variant="whatsapp" size="lg" leftIcon="message" as={Link} href="/book">
                Connect on WhatsApp
              </Button>
              <Button variant="outline" size="lg" as="a" href="#services" rightIcon="arrow-right">
                Explore services
              </Button>
            </div>
            <div style={{ display: 'flex', gap: 28, marginTop: 14, flexWrap: 'wrap' }}>
              {([['8+', 'Years of care'], ['5000+', 'Women helped'], ['2', 'Clinic locations']] as const).map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--clay-700)', letterSpacing: '-0.02em' }}>{n}</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-subtle)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BLOBS.clay} alt="" aria-hidden="true" style={{ position: 'absolute', bottom: -50, left: -60, width: 340, opacity: 0.55, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', aspectRatio: '4/5' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PHOTOS.doctor} alt="Dr. Roma Dubey" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 22, left: -26, background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--sage-100)', color: 'var(--sage-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="shield-check" size={22} />
              </span>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 'var(--text-sm)' }}>Safe &amp; painless delivery</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>High-risk pregnancy specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
