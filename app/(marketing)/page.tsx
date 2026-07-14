import type { Metadata } from 'next';
import { Hero } from '@/components/site/Hero';
import { Services } from '@/components/site/Services';
import { HowItWorks } from '@/components/site/HowItWorks';
import { About } from '@/components/site/About';
import { Reviews } from '@/components/site/Reviews';
import { Locations } from '@/components/site/Locations';
import { CtaBand } from '@/components/site/CtaBand';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <Reviews />
      <Locations />
      <CtaBand />
    </>
  );
}
