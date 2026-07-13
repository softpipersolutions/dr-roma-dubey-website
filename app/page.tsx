'use client';

import { useEffect } from 'react';
import { Nav } from '@/components/site/Nav';
import { Hero } from '@/components/site/Hero';
import { Services } from '@/components/site/Services';
import { HowItWorks } from '@/components/site/HowItWorks';
import { About } from '@/components/site/About';
import { Reviews } from '@/components/site/Reviews';
import { Locations } from '@/components/site/Locations';
import { Faq } from '@/components/site/Faq';
import { Footer } from '@/components/site/Footer';

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <Reviews />
      <Locations />
      <Faq />
      <Footer />
    </>
  );
}
