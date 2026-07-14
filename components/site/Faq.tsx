import { Accordion, Input, Button, Icon } from '@/components/ds';
import { FAQS } from '@/lib/faqs';

const ITEMS = FAQS.map((f) => ({ title: f.question, content: f.answer }));

export function Faq({ items = ITEMS }: { items?: { title: string; content: string }[] }) {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, alignItems: 'start' }}>
          <div className="faq-aside" style={{ position: 'sticky', top: 100 }}>
            <span className="eyebrow">Help &amp; support</span>
            <h2 style={{ fontSize: 'var(--text-display-lg)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', marginTop: 12, lineHeight: 1.1 }}>
              Frequently asked questions
            </h2>
            <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', marginTop: 16 }}>
              Still have a question? Message us on WhatsApp and we&apos;ll guide you step by step.
            </p>
            <div style={{ marginTop: 24, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, color: 'var(--text-strong)', fontWeight: 700 }}>
                <Icon name="mail" size={18} /> Health tips newsletter
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 14 }}>Exclusive updates on women&apos;s wellness and clinic offers.</p>
              <div className="faq-news-row" style={{ display: 'flex', gap: 10 }}>
                <Input placeholder="Your email" leftIcon="mail" containerStyle={{ flex: 1, minWidth: 0 }} />
                <Button variant="primary">Subscribe</Button>
              </div>
            </div>
          </div>
          <Accordion defaultOpen={[0]} items={items} />
        </div>
      </div>
    </section>
  );
}
