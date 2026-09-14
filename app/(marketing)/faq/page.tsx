import type { Metadata } from 'next';
import { Faq } from '@/components/site/Faq';
import { CtaBand } from '@/components/site/CtaBand';
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { FAQS } from '@/lib/faqs';

export const metadata: Metadata = pageMetadata({
  title: 'Frequently asked questions',
  description:
    'Answers about booking, first visits, high-risk pregnancy, tests, laparoscopic surgery, tele-consults and clinic timings with Dr. Roma Dubey.',
  path: '/faq',
  keywords: ['gynaecologist FAQ', 'Dr. Roma Dubey questions', 'appointment booking Meerut'],
});

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'FAQs', path: '/faq' }]} />
      <FaqJsonLd items={FAQS} />
      <Faq />
      <CtaBand title="Still have a question?" text="Message Dr. Roma’s team on WhatsApp — we’ll guide you step by step." />
    </>
  );
}
