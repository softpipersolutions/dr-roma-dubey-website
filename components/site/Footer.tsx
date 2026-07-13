import Link from 'next/link';
import { Button, Icon } from '@/components/ds';

const cols = [
  { h: 'Explore', links: ['Home', 'About', 'Services', 'Reviews', 'FAQ'] },
  { h: 'Services', links: ['Pregnancy Care', 'PCOS & Hormonal', 'Fertility', 'Laparoscopy', 'Menopause Clinic'] },
];

export function Footer() {
  return (
    <footer style={{ background: 'var(--sand-900)', color: 'var(--sand-200)' }}>
      <div className="container" style={{ paddingBlock: 'var(--space-16)' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: 40 }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>
              Dr. Roma <span style={{ color: 'var(--clay-400)' }}>Dubey</span>
            </div>
            <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--sand-400)', marginTop: 14, maxWidth: 280 }}>
              Healthcare that is personalised, compassionate and empowering — at every stage of life.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--sand-400)', marginBottom: 16 }}>{c.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.links.map((l) => <a key={l} href="#" style={{ color: 'var(--sand-200)', fontSize: 'var(--text-base)' }}>{l}</a>)}
              </div>
            </div>
          ))}
          <div>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--sand-400)', marginBottom: 16 }}>Visit us</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              <span style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 'var(--text-sm)', color: 'var(--sand-200)' }}>
                <Icon name="map-pin" size={18} /> Maitri Mahila Clinic, Kaland Chungi, Sardhana · Aryavart Hospital, NH-58, Daurala, Meerut
              </span>
              <span style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 'var(--text-sm)', color: 'var(--sand-200)' }}>
                <Icon name="clock" size={18} /> Mon–Sat · 10:00 AM – 6:00 PM
              </span>
            </div>
            <Button variant="whatsapp" leftIcon="message" as={Link} href="/book">
              Connect on WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--sand-800)' }}>
        <div className="container" style={{ paddingBlock: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontSize: 'var(--text-sm)', color: 'var(--sand-500)' }}>
          <span>© 2026 Dr. Roma Dubey · Women&apos;s Health &amp; Gynaecology</span>
          <span>Meerut, Uttar Pradesh, India</span>
        </div>
      </div>
    </footer>
  );
}
