'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Reveals elements with the `.reveal` class as they scroll into view.
 * Re-scans on route change so client-navigated pages animate too.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.in)'));
    if (els.length === 0) return;
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
      { threshold: 0.12 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
