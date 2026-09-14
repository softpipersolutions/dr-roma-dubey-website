import Link from 'next/link';
import { Button } from '@/components/ds';
import { ServiceGrid } from '@/components/site/ServiceGrid';

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 40, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 560 }}>
            <span className="eyebrow">From routine screenings to specialised care</span>
            <h2 style={{ fontSize: 'var(--text-display-lg)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', marginTop: 12, lineHeight: 1.1 }}>
              Specialities &amp; care
            </h2>
          </div>
          <Button variant="outline" as={Link} href="/services" rightIcon="arrow-right">
            View all specialities
          </Button>
        </div>
        <ServiceGrid />
      </div>
    </section>
  );
}
