import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Icon } from '@/components/ds';
import { PageHero } from '@/components/site/PageHero';
import { ContactForm } from '@/components/site/ContactForm';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { SITE, CLINICS } from '@/lib/site';
import { whatsAppChatLink } from '@/lib/whatsapp';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Get in touch with Dr. Roma Dubey’s clinic in Meerut. Message on WhatsApp, call, or visit Maitri Mahila Clinic or Aryavart Hospital.',
  path: '/contact',
  keywords: ['contact gynaecologist Meerut', 'Dr. Roma Dubey contact', 'book appointment Meerut'],
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <PageHero
        eyebrow="We’re here to help"
        title={<>Let&apos;s <span style={{ color: 'var(--clay-600)' }}>connect</span></>}
        lede="Have a question or want to book a visit? The fastest way to reach us is WhatsApp — one chat, no forms."
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            {/* form */}
            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', padding: 'var(--space-8)' }}>
              <h2 style={{ margin: '0 0 6px', fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>Send a message</h2>
              <p style={{ margin: '0 0 20px', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>We’ll continue the conversation on WhatsApp.</p>
              <ContactForm />
            </div>

            {/* info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', background: 'var(--surface-cream)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5) var(--space-6)' }}>
                <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: '50%', background: 'color-mix(in srgb, var(--whatsapp) 16%, white)', color: 'var(--whatsapp-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="phone" size={22} />
                </span>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Call or WhatsApp</div>
                  <div style={{ fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--text-strong)' }}>{SITE.phoneDisplay}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 14, alignItems: 'center', background: 'var(--surface-cream)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5) var(--space-6)' }}>
                <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: '50%', background: 'var(--clay-50)', color: 'var(--clay-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="clock" size={22} />
                </span>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Clinic hours</div>
                  <div style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-strong)' }}>{SITE.hours}</div>
                </div>
              </div>

              {CLINICS.map((c) => (
                <div key={c.name} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 'var(--radius-md)', background: 'var(--clay-50)', color: 'var(--clay-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="map-pin" size={22} />
                    </span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-strong)' }}>{c.name}</h3>
                      <p style={{ margin: '2px 0 10px', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{c.address}</p>
                      <Button variant="outline" size="sm" as="a" target="_blank" rel="noopener noreferrer" rightIcon="arrow-up-right"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.name}, ${c.address}`)}`}>
                        Get directions
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Button variant="whatsapp" leftIcon="message" as={Link} href="/book">Book an appointment</Button>
                <Button variant="ghost" as="a" href={whatsAppChatLink('Hi, I have a quick question.')} target="_blank" rel="noopener noreferrer" leftIcon="message">Quick chat</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
