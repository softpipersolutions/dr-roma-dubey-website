import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Book an appointment',
  description:
    'Book an appointment with Dr. Roma Dubey in Meerut. Share a few details and continue on WhatsApp — confirm your slot and get instant confirmation.',
  path: '/book',
  keywords: ['book gynaecologist Meerut', 'appointment Dr. Roma Dubey', 'WhatsApp booking'],
});

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
