'use client';

import Link from 'next/link';
import { Button, Badge, Icon } from '@/components/ds';
import { PHOTOS, BLOBS } from '@/lib/photos';

const STATS: [string, string][] = [
  ['8+', 'Years of care'],
  ['5000+', 'Women cared for'],
  ['2', 'Clinic locations'],
];

export function Hero() {
  return (
    <section id="home" className="hero">
      {/* soft decorative blobs + grain */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero-blob hero-blob-blush" src={BLOBS.blush} alt="" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero-blob hero-blob-cream" src={BLOBS.cream} alt="" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* copy */}
          <div className="hero-copy">
            <span className="hero-anim hero-anim-1" style={{ alignSelf: 'flex-start' }}>
              <Badge tone="brand" icon="sparkles">MBBS · MD · 8+ years</Badge>
            </span>

            <h1 className="hero-title hero-anim hero-anim-2">
              Compassionate care for{' '}
              <span className="hero-accent">every&nbsp;woman</span>
            </h1>

            <p className="hero-lede hero-anim hero-anim-3">
              I&apos;m Dr. Roma Dubey — an Obstetrician, Gynaecologist &amp; Laparoscopic Surgeon offering
              advanced, evidence-based women&apos;s health care at every stage of life.
            </p>

            <div className="hero-cta hero-anim hero-anim-4">
              <Button variant="whatsapp" size="lg" leftIcon="message" as={Link} href="/book">
                Book on WhatsApp
              </Button>
              <Button variant="outline" size="lg" as={Link} href="/services" rightIcon="arrow-right">
                Explore specialities
              </Button>
            </div>

            <div className="hero-trust hero-anim hero-anim-5">
              <div className="hero-rating">
                <span className="hero-stars" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Icon key={i} name="star" size={16} style={{ fill: 'var(--clay-500)', color: 'var(--clay-500)' }} />
                  ))}
                </span>
                <span className="hero-rating-text">Trusted by women across Meerut</span>
              </div>
              <div className="hero-stats">
                {STATS.map(([n, l], i) => (
                  <div key={l} className="hero-stat" data-first={i === 0 ? 'true' : undefined}>
                    <div className="hero-stat-num">{n}</div>
                    <div className="hero-stat-label">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* media */}
          <div className="hero-media hero-anim-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero-blob hero-blob-clay" src={BLOBS.clay} alt="" aria-hidden="true" />
            <div className="hero-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PHOTOS.doctor} alt="Dr. Roma Dubey, Obstetrician & Gynaecologist" />
            </div>

            <div className="hero-float hero-float-trust">
              <span className="hero-float-icon" style={{ background: 'var(--sage-100)', color: 'var(--sage-700)' }}>
                <Icon name="shield-check" size={20} />
              </span>
              <div>
                <div className="hero-float-title">Safe &amp; painless delivery</div>
                <div className="hero-float-sub">High-risk pregnancy specialist</div>
              </div>
            </div>

            <div className="hero-float hero-float-rating">
              <span className="hero-float-icon" style={{ background: 'var(--clay-50)', color: 'var(--clay-600)' }}>
                <Icon name="heart" size={20} />
              </span>
              <div>
                <div className="hero-float-title">5000+ women</div>
                <div className="hero-float-sub">cared for with warmth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
