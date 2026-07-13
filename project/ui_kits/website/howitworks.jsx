const { Icon } = window.DrRomaDubeyDesignSystem_317be8;

const STEPS = [
  { icon: 'message', title: 'Connect on WhatsApp', body: 'Tap any Connect button and chat directly with our team. Ask questions and share your concerns.' },
  { icon: 'credit-card', title: 'Secure payment & slot', body: 'We share a secure UPI QR code. Pay for your consult, then pick the appointment slot that suits you.' },
  { icon: 'check-circle', title: 'Instant confirmation', body: 'You receive a confirmation on WhatsApp — no forms, no hassle. Fully managed in one chat.' },
];

function HowItWorks() {
  return (
    <section id="how" style={{ background: 'var(--surface-brand-soft)' }}>
      <div className="container section">
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 48px' }}>
          <span className="eyebrow">How it works</span>
          <h2 style={{ fontSize: 'var(--text-display-lg)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', marginTop: 12, lineHeight: 1.1 }}>
            Book in one simple chat
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, position: 'relative' }}>
          {STEPS.map((s, i) => (
            <div key={s.title} className="reveal" style={{ position: 'relative', background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8) var(--space-6)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-subtle)' }}>
              <span style={{ position: 'absolute', top: 18, right: 20, fontSize: 40, fontWeight: 800, color: 'var(--clay-100)', lineHeight: 1 }}>{i + 1}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 54, height: 54, borderRadius: 'var(--radius-md)', background: 'color-mix(in srgb, var(--whatsapp) 14%, white)', color: 'var(--whatsapp-dark)', marginBottom: 18 }}>
                <Icon name={s.icon} size={26} />
              </span>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-strong)', marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--text-muted)' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
