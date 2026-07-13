import { Accordion, Input, Button, Icon } from '@/components/ds';

const FAQS = [
  { title: 'How can I book an appointment with Dr. Roma Dubey?', content: 'You can book through call or WhatsApp for either Maitri Mahila Clinic (Kaland Chungi, Sardhana) or Aryavart Hospital (NH-58, Daurala, Meerut).' },
  { title: 'What should I bring for my first visit?', content: 'Please carry any previous medical records, test reports and a list of current medications. If you are pregnant, bring your ultrasound scans and reports if available.' },
  { title: 'Does Dr. Roma Dubey handle high-risk pregnancies?', content: 'Yes — Dr. Roma is experienced in managing high-risk pregnancies and provides complete care, from early monitoring to safe delivery.' },
  { title: 'Are ultrasound and diagnostic tests available at the clinic?', content: 'Yes. Pap smear, pelvic ultrasound, follicular monitoring and hormonal tests are available to support accurate diagnosis and treatment.' },
];

export function Faq() {
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
              <div style={{ display: 'flex', gap: 10 }}>
                <Input placeholder="Your email" leftIcon="mail" containerStyle={{ flex: 1 }} />
                <Button variant="primary">Subscribe</Button>
              </div>
            </div>
          </div>
          <Accordion defaultOpen={[0]} items={FAQS} />
        </div>
      </div>
    </section>
  );
}
