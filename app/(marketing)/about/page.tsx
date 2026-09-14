import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge, Tag, Icon, Button } from '@/components/ds';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { PHOTOS } from '@/lib/photos';
import { SERVICES } from '@/lib/services';

export const metadata: Metadata = pageMetadata({
  title: 'About Dr. Roma Dubey',
  description:
    'Dr. Roma Dubey (MBBS | MD) is an experienced Obstetrician, Gynaecologist & Laparoscopic Surgeon in Meerut, caring for women at every stage of life.',
  path: '/about',
  keywords: ['about Dr. Roma Dubey', 'gynaecologist Meerut', 'lady gynaecologist Meerut', 'obstetrician'],
});

const STATS = [
  ['8+', 'Years of care'],
  ['5000+', 'Women helped'],
  ['2', 'Clinic locations'],
  ['MBBS | MD', 'Qualifications'],
] as const;

const VALUES = [
  { icon: 'heart', title: 'Compassionate', body: 'Care that treats you as a person — heard, respected and never rushed.' },
  { icon: 'shield-check', title: 'Evidence-based', body: 'Modern, proven medicine — explained in clear, reassuring language.' },
  { icon: 'users', title: 'Personalised', body: 'A plan built around your body, your goals and your stage of life.' },
] as const;

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <PageHero
        eyebrow="About Dr. Roma"
        title={<>Your trusted women&apos;s <span style={{ color: 'var(--clay-600)' }}>health partner</span></>}
        lede={`${SITE.role} with ${SITE.experience} of experience, caring for women at every stage of life in ${SITE.city}.`}
      >
        <Button variant="whatsapp" size="lg" leftIcon="message" as={Link} href="/book">Book a consultation</Button>
        <Button variant="outline" size="lg" as={Link} href="/services" rightIcon="arrow-right">Explore specialities</Button>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/5' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PHOTOS.doctor} alt={`${SITE.name}, ${SITE.role}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Badge tone="brand" icon="sparkles">{SITE.credentials} · {SITE.experience}</Badge>
              <h2 style={{ fontSize: 'var(--text-display-md)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', lineHeight: 1.12 }}>
                Meet Dr. Roma Dubey
              </h2>
              <p style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)' }}>
                I&apos;m Dr. Roma Dubey — an Obstetrician, Gynaecologist &amp; Laparoscopic Surgeon. Over the past {SITE.experience}, I&apos;ve had the privilege of caring for countless women through every stage of life — from menstrual health, fertility care and safe pregnancies to advanced laparoscopic surgeries and menopause management.
              </p>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)' }}>
                My goal is simple: that every woman who visits feels confident, informed and truly cared for. I practise at {SITE.city}&apos;s Maitri Mahila Clinic and Aryavart Hospital, and I make booking effortless — one chat on WhatsApp.
              </p>
              <div className="stat-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: 28, marginTop: 6 }}>
                {STATS.map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--clay-700)', letterSpacing: '-0.02em' }}>{n}</div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-subtle)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface-cream)' }}>
        <div className="container section">
          <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 44px' }}>
            <span className="eyebrow">How Dr. Roma cares</span>
            <h2 style={{ fontSize: 'var(--text-display-md)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', marginTop: 12, lineHeight: 1.1 }}>
              Care built on three promises
            </h2>
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', padding: 'var(--space-8) var(--space-6)', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ display: 'inline-flex', width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--clay-50)', color: 'var(--clay-600)', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={v.icon} size={26} />
                </span>
                <h3 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-strong)' }}>{v.title}</h3>
                <p style={{ margin: '8px 0 0', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--text-muted)' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Areas of care</span>
          <h2 style={{ fontSize: 'var(--text-display-md)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', marginTop: 12, marginBottom: 20, lineHeight: 1.1 }}>
            Complete women&apos;s health, in one place
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}><Tag>{s.title}</Tag></Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Have a question for Dr. Roma?" />
    </>
  );
}
