import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Dynamically generated Open Graph image (no external assets required).
// Note: the OG renderer (Satori) requires every element with more than one
// child to declare an explicit `display: flex`.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #FBF7F4 0%, #F5E6DE 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', color: '#9A4A34' }}>
          {SITE.credentials} · Obstetrician, Gynaecologist & Laparoscopic Surgeon
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>
            <span style={{ color: '#3D2B26' }}>Dr. Roma&nbsp;</span>
            <span style={{ color: '#B65D42' }}>Dubey</span>
          </div>
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 600, color: '#6E5A4C', marginTop: 16 }}>
            Compassionate care for every woman
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', fontSize: 28, color: '#6E5A4C' }}>
          <div style={{ display: 'flex', width: 16, height: 16, borderRadius: 8, background: '#25D366', marginRight: 12 }} />
          <div style={{ display: 'flex' }}>Book on WhatsApp · {SITE.city}, {SITE.regionCode}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
