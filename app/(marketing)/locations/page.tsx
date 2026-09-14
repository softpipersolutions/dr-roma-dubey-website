import type { Metadata } from 'next';
import { Locations } from '@/components/site/Locations';
import { CtaBand } from '@/components/site/CtaBand';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Locations',
  description:
    'Visit Dr. Roma Dubey at Maitri Mahila Clinic (Sardhana) or Aryavart Hospital (Daurala), Meerut — or book a tele-consult on WhatsApp.',
  path: '/locations',
  keywords: ['gynaecologist Sardhana', 'gynaecologist Daurala', 'women’s clinic Meerut', 'Maitri Mahila Clinic'],
});

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }]} />
      <Locations headingLevel="h1" />
      <CtaBand title="Not sure which clinic to visit?" text="Message Dr. Roma’s team on WhatsApp and we’ll help you choose the most convenient location and time." />
    </>
  );
}
