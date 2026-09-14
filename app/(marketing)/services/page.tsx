import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ds';
import { PageHero } from '@/components/site/PageHero';
import { ServiceGrid } from '@/components/site/ServiceGrid';
import { HowItWorks } from '@/components/site/HowItWorks';
import { CtaBand } from '@/components/site/CtaBand';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Specialities & Women’s Health Services',
  description:
    'Complete women’s health care in Meerut — pregnancy & antenatal care, PCOS & hormonal health, fertility support, laparoscopic surgery, and preventive screening.',
  path: '/services',
  keywords: ['women’s health services Meerut', 'gynaecology services', 'pregnancy', 'PCOS', 'fertility', 'laparoscopy'],
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Specialities', path: '/services' }]} />
      <PageHero
        eyebrow="What we offer"
        title={<>Care for every stage of a <span style={{ color: 'var(--clay-600)' }}>woman&apos;s life</span></>}
        lede="From routine screenings and pregnancy care to advanced laparoscopic surgery, explore the full range of care offered by Dr. Roma Dubey."
      >
        <Button variant="whatsapp" size="lg" leftIcon="message" as={Link} href="/book">Book a consultation</Button>
      </PageHero>

      <section className="section">
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      <HowItWorks />
      <CtaBand />
    </>
  );
}
