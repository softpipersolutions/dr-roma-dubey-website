import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Roma Dubey — Women’s Health & Gynaecology',
  description:
    'Compassionate, evidence-based women’s health care in Meerut — periods & PCOS, fertility & pregnancy, laparoscopic surgery, and preventive screening. Book on WhatsApp.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hanken.variable}>
      <body>{children}</body>
    </html>
  );
}
