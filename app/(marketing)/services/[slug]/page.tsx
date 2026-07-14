import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button, Icon } from '@/components/ds';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { SERVICES, SERVICE_SLUGS, getService } from '@/lib/services';

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <ServiceJsonLd name={service.title} description={service.summary} path={`/services/${service.slug}`} />

      <PageHero eyebrow={service.eyebrow} title={service.title} lede={service.lede}>
        <Button variant="whatsapp" size="lg" leftIcon="message" as={Link} href="/book">Book this consultation</Button>
        <Button variant="outline" size="lg" as={Link} href="/services" rightIcon="arrow-right">All services</Button>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 48, alignItems: 'start' }}>
            {/* overview + items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {service.overview.map((p, i) => (
                  <p key={i} style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)' }}>{p}</p>
                ))}
              </div>

              <div>
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)', marginBottom: 16 }}>
                  What&apos;s included
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="detail-items">
                  {service.items.map((it) => (
                    <div key={it.name} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '16px 18px', boxShadow: 'var(--shadow-xs)' }}>
                      <span style={{ flexShrink: 0, width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: 'var(--clay-50)', color: 'var(--clay-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="check" size={18} />
                      </span>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 'var(--text-base)' }}>{it.name}</div>
                        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)', marginTop: 3 }}>{it.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* what to expect sidebar */}
            <aside style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ background: 'var(--surface-cream)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface-card)', color: 'var(--clay-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={service.icon} size={22} />
                  </span>
                  <h2 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-strong)' }}>What to expect</h2>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {service.expect.map((e) => (
                    <li key={e} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
                      <span style={{ color: 'var(--sage-700)', display: 'flex', flexShrink: 0, marginTop: 1 }}><Icon name="check-circle" size={18} /></span>
                      {e}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 18 }}>
                  <Button variant="whatsapp" leftIcon="message" fullWidth as={Link} href="/book">Book on WhatsApp</Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* related services */}
      <section style={{ background: 'var(--surface-brand-soft)' }}>
        <div className="container section">
          <h2 style={{ fontSize: 'var(--text-display-md)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', marginBottom: 24, lineHeight: 1.1 }}>
            Related care
          </h2>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} style={{ display: 'block', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ display: 'inline-flex', width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--clay-50)', color: 'var(--clay-600)', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon name={o.icon} size={24} />
                </span>
                <h3 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-strong)' }}>{o.shortTitle}</h3>
                <p style={{ margin: '6px 0 0', fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{o.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Ready to talk about ${service.shortTitle.toLowerCase()}?`} />
    </>
  );
}
