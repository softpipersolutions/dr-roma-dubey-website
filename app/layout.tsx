import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { SITE, SITE_URL } from '@/lib/site';
import { OrganizationJsonLd } from '@/components/seo/JsonLd';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.legalName,
  authors: [{ name: SITE.name }],
  keywords: [
    'gynaecologist Meerut',
    'women’s health Meerut',
    'obstetrician Meerut',
    'PCOS treatment',
    'pregnancy care',
    'laparoscopic surgery',
    'Dr. Roma Dubey',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.legalName,
    locale: 'en_IN',
    url: SITE_URL,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hanken.variable}>
      <body>
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
