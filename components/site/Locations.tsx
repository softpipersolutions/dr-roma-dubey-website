import Link from 'next/link';
import { Icon, Button, type IconName } from '@/components/ds';
import { CLINIC_PHONE_DISPLAY } from '@/lib/whatsapp';

const CLINICS = [
  {
    name: 'Maitri Mahila Clinic',
    area: 'Kaland Chungi, Sardhana',
    address: 'Kaland Chungi, Sardhana, Meerut, Uttar Pradesh',
    tag: 'Primary clinic',
  },
  {
    name: 'Aryavart Hospital',
    area: 'NH-58, Daurala, Meerut',
    address: 'NH-58, Daurala, Meerut, Uttar Pradesh',
    tag: 'Surgery & deliveries',
  },
];

const CONTACT: { icon: IconName; label: string; value: string }[] = [
  { icon: 'clock', label: 'Clinic hours', value: 'Mon–Sat · 10:00 AM – 6:00 PM' },
  { icon: 'phone', label: 'Call or WhatsApp', value: CLINIC_PHONE_DISPLAY },
  { icon: 'message', label: 'Book instantly', value: 'One chat on WhatsApp' },
];

export function Locations() {
  return (
    <section id="locations" style={{ background: 'var(--surface-brand-soft)' }}>
      <div className="container section">
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 44px' }}>
          <span className="eyebrow">Visit us</span>
          <h2 style={{ fontSize: 'var(--text-display-lg)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', marginTop: 12, lineHeight: 1.1 }}>
            Two clinics across Meerut
          </h2>
          <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', marginTop: 14 }}>
            Consult Dr. Roma at whichever location is closest to you — or connect on WhatsApp for a tele-consult from home.
          </p>
        </div>

        <div className="loc-grid reveal-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {CLINICS.map((c) => (
            <div key={c.name} className="reveal reveal-up" style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <span style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--clay-50)', color: 'var(--clay-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="map-pin" size={24} />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'inline-block', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--clay-700)', background: 'var(--clay-50)', padding: '3px 10px', borderRadius: 'var(--radius-pill)', marginBottom: 8 }}>
                    {c.tag}
                  </div>
                  <h3 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-strong)' }}>{c.name}</h3>
                  <p style={{ margin: '4px 0 0', fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{c.address}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Button
                  variant="outline"
                  size="sm"
                  as="a"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.name}, ${c.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  rightIcon="arrow-up-right"
                >
                  Get directions
                </Button>
                <Button variant="whatsapp" size="sm" leftIcon="message" as={Link} href="/book">
                  Book here
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="loc-contact" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)' }}>
          {CONTACT.map((c) => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', background: 'color-mix(in srgb, var(--whatsapp) 14%, white)', color: 'var(--whatsapp-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={c.icon} size={22} />
              </span>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.label}</div>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-strong)' }}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
