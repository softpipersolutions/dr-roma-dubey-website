import Link from 'next/link';
import { Button, Icon } from '@/components/ds';
import { SITE, CLINICS } from '@/lib/site';
import { SERVICES } from '@/lib/services';

export function SiteFooter() {
  const explore = [
    { label: 'About Dr. Roma', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Locations', href: '/locations' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Patient portal', href: '/portal' },
  ];

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
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--sand-400)', marginTop: 14 }}>
              {SITE.credentials} · {SITE.role}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--sand-400)', marginBottom: 16 }}>Explore</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {explore.map((l) => (
                <Link key={l.href} href={l.href} style={{ color: 'var(--sand-200)', fontSize: 'var(--text-base)' }}>{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--sand-400)', marginBottom: 16 }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} style={{ color: 'var(--sand-200)', fontSize: 'var(--text-base)' }}>{s.shortTitle}</Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--sand-400)', marginBottom: 16 }}>Visit us</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              {CLINICS.map((c) => (
                <span key={c.name} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 'var(--text-sm)', color: 'var(--sand-200)' }}>
                  <Icon name="map-pin" size={18} /> <span><strong style={{ color: '#fff', fontWeight: 600 }}>{c.name}</strong> · {c.area}</span>
                </span>
              ))}
              <span style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 'var(--text-sm)', color: 'var(--sand-200)' }}>
                <Icon name="clock" size={18} /> {SITE.hours}
              </span>
            </div>
            <Button variant="whatsapp" leftIcon="message" as={Link} href="/book">
              Book on WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--sand-800)' }}>
        <div className="container" style={{ paddingBlock: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontSize: 'var(--text-sm)', color: 'var(--sand-500)' }}>
          <span>© {new Date().getFullYear()} Dr. Roma Dubey · Women&apos;s Health &amp; Gynaecology</span>
          <span>{SITE.city}, {SITE.region}, {SITE.country}</span>
        </div>
      </div>
    </footer>
  );
}
