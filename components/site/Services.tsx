import { ServiceCard, Button } from '@/components/ds';

const SERVICES = [
  { icon: 'droplet', title: 'Pap Smear', description: 'Cervical cancer screening designed for early, reassuring detection.', tone: 'brand' },
  { icon: 'heart', title: 'Wellness Exam', description: 'A complete check-up covering all your health essentials.', tone: 'blush' },
  { icon: 'activity', title: 'Hormonal & PCOS', description: 'Mood swings or fatigue? Personalised hormonal and PCOS/PCOD care.', tone: 'sage' },
  { icon: 'baby', title: 'Fertility Test', description: 'Planning for a family? Follicular monitoring and fertility guidance.', tone: 'dusk' },
  { icon: 'shield-check', title: 'Vaccination', description: 'Cervical cancer (HPV) vaccination for lasting protection.', tone: 'brand' },
  { icon: 'stethoscope', title: 'Breast Health', description: 'Prioritise your breast health with a thorough clinical exam.', tone: 'blush' },
] as const;

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 40, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 560 }}>
            <span className="eyebrow">From routine screenings to specialised care</span>
            <h2 style={{ fontSize: 'var(--text-display-lg)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', marginTop: 12, lineHeight: 1.1 }}>
              Services offered
            </h2>
          </div>
          <Button variant="outline" as="a" href="#services" rightIcon="arrow-right">
            View all services
          </Button>
        </div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {SERVICES.map((s) => (
            <div key={s.title} className="reveal">
              <ServiceCard {...s} href="#" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
