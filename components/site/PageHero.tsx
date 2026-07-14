import { BLOBS } from '@/lib/photos';

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-brand-soft)' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={BLOBS.blush} alt="" aria-hidden="true" style={{ position: 'absolute', top: -160, right: -120, width: 480, opacity: 0.5, pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', paddingTop: 56, paddingBottom: 56 }}>
        <div className="reveal-group" style={{ maxWidth: 720, display: 'flex', flexDirection: 'column' }}>
          <span className="eyebrow reveal reveal-up">{eyebrow}</span>
          <h1 className="reveal reveal-up" style={{ fontSize: 'clamp(2rem, 1.1rem + 4.6vw, 4rem)', fontWeight: 800, letterSpacing: 'var(--tracking-tighter)', color: 'var(--sand-800)', lineHeight: 1.06, marginTop: 12, textWrap: 'balance' }}>
            {title}
          </h1>
          {lede && (
            <p className="reveal reveal-up" style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', marginTop: 18, maxWidth: 620 }}>
              {lede}
            </p>
          )}
          {children && <div className="reveal reveal-up" style={{ marginTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap' }}>{children}</div>}
        </div>
      </div>
    </section>
  );
}
