import Link from 'next/link';
import { Tag, Icon, Button } from '@/components/ds';
import { PHOTOS } from '@/lib/photos';

const PROCEDURES = ['Diagnostic Laparoscopy', 'Laparoscopic Hysterectomy', 'Myomectomy', 'Ovarian Cystectomy', 'Endometriosis', 'Tubal Ligation', 'Ectopic Pregnancy'];

export function About() {
  return (
    <section id="about" style={{ background: 'var(--surface-cream)', overflow: 'hidden' }}>
      <div className="container section">
        <div className="about-grid reveal-group" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
          <div className="reveal reveal-left" style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '5/6' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PHOTOS.motherChild} alt="A mother holding her child" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', top: 20, right: -22, background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--clay-50)', color: 'var(--clay-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="heart" size={22} />
              </span>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 'var(--text-sm)' }}>Every stage of life</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>Menstrual · Fertility · Menopause</div>
              </div>
            </div>
          </div>
          <div className="reveal reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span className="eyebrow">Trusted gynaecologist</span>
            <h2 style={{ fontSize: 'var(--text-display-lg)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', lineHeight: 1.1 }}>
              Your trusted women&apos;s health partner
            </h2>
            <p style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)' }}>
              Dr. Roma has helped countless women through every stage of life — from menstrual health, fertility care and safe pregnancies to advanced laparoscopic surgeries and menopause management. Her goal is that every woman feels confident, informed and cared for.
            </p>
            <div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-strong)', marginBottom: 12 }}>Laparoscopic procedures offered</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {PROCEDURES.map((p) => <Tag key={p}>{p}</Tag>)}
              </div>
            </div>
            <div style={{ marginTop: 6 }}>
              <Button variant="primary" as={Link} href="/about" rightIcon="arrow-right">More about Dr. Roma</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
