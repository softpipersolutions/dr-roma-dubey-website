// Central site configuration — single source of truth for identity,
// contact details, clinics, and the canonical URL used across SEO.

import { CLINIC_PHONE_DISPLAY, CLINIC_WHATSAPP } from './whatsapp';

/**
 * Canonical production origin. Set NEXT_PUBLIC_SITE_URL in the hosting
 * environment (e.g. Vercel) to the real domain — everything SEO-related
 * (canonical URLs, sitemap, Open Graph, structured data) reads from here.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://drromadubey.com'
).replace(/\/$/, '');

export const SITE = {
  name: 'Dr. Roma Dubey',
  legalName: 'Dr. Roma Dubey — Women’s Health & Gynaecology',
  shortName: 'Dr. Roma Dubey',
  tagline: 'Women’s Health & Gynaecology',
  role: 'Obstetrician, Gynaecologist & Laparoscopic Surgeon',
  credentials: 'MBBS | MD',
  experience: '8+ years',
  city: 'Meerut',
  region: 'Uttar Pradesh',
  regionCode: 'UP',
  country: 'India',
  countryCode: 'IN',
  phoneDisplay: CLINIC_PHONE_DISPLAY,
  whatsapp: CLINIC_WHATSAPP,
  hours: 'Mon–Sat · 10:00 AM – 6:00 PM',
  description:
    'Compassionate, evidence-based women’s health care in Meerut — pregnancy & antenatal care, PCOS & hormonal health, fertility support, laparoscopic surgery, and preventive screening. Book instantly on WhatsApp.',
  url: SITE_URL,
} as const;

export interface Clinic {
  name: string;
  area: string;
  address: string;
  tag: string;
}

export const CLINICS: Clinic[] = [
  {
    name: 'Maitri Mahila Clinic',
    area: 'Kaland Chungi, Sardhana',
    address: 'Kaland Chungi, Sardhana, Meerut, Uttar Pradesh',
    tag: 'Primary clinic',
  },
  {
    name: 'Aryavart Hospital',
    area: 'NH-58, Daurala, Meerut',
    address: 'NH-58, Daurala, Meerut, Uttar Pradesh',
    tag: 'Surgery & deliveries',
  },
];

/** Absolute URL helper for canonical/OG/sitemap. */
export function absoluteUrl(path = '/'): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Specialities', href: '/services' },
  { label: 'Clinics', href: '/locations' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const;
