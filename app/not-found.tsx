import Link from 'next/link';
import { Button } from '@/components/ds';

export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-8)' }}>
      <div style={{ textAlign: 'center', maxWidth: 460 }}>
        <div style={{ fontSize: 'var(--text-display-lg)', fontWeight: 800, color: 'var(--clay-600)', letterSpacing: 'var(--tracking-tighter)' }}>404</div>
        <h1 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-strong)', margin: '8px 0 10px' }}>Page not found</h1>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', marginBottom: 22 }}>
          The page you’re looking for doesn’t exist or may have moved. Let’s get you back on track.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" as={Link} href="/" leftIcon="home">Back home</Button>
          <Button variant="outline" as={Link} href="/services" rightIcon="arrow-right">Browse services</Button>
        </div>
      </div>
    </main>
  );
}
