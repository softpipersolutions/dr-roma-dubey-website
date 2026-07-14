import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Patient portal',
  description: 'Demo patient portal for Dr. Roma Dubey — appointments, reports and messages.',
  path: '/portal',
  index: false,
});

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
