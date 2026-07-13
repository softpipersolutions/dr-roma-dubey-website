const { Card, Badge, Button, Icon } = window.DrRomaDubeyDesignSystem_317be8;

function Stat({ icon, tone, label, value, sub }) {
  const tones = {
    clay: ['var(--clay-50)', 'var(--clay-600)'], sage: ['var(--sage-100)', 'var(--sage-700)'],
    blush: ['var(--blush-100)', 'var(--clay-700)'], dusk: ['var(--dusk-100)', 'var(--dusk-700)'],
  }[tone] || ['var(--clay-50)', 'var(--clay-600)'];
  return (
    <Card variant="elevated" padding="md">
      <span style={{ display: 'inline-flex', width: 42, height: 42, borderRadius: 'var(--radius-md)', background: tones[0], color: tones[1], alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon name={icon} size={22} /></span>
      <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--sand-800)', letterSpacing: '-0.02em', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', fontWeight: 600, marginTop: 4 }}>{label}</div>
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)', marginTop: 2 }}>{sub}</div>
    </Card>
  );
}

function Dashboard({ onBook }) {
  const reports = [
    { name: 'Pap Smear Report', date: '10 Jul 2026', status: 'ready', tone: 'success' },
    { name: 'Pelvic Ultrasound', date: '10 Jul 2026', status: 'ready', tone: 'success' },
    { name: 'Blood Panel (CBC, TSH)', date: 'Processing', status: 'pending', tone: 'warning' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      {/* next appointment hero */}
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(120deg, var(--clay-600), var(--clay-500))', color: '#fff', padding: '28px 30px', boxShadow: 'var(--shadow-brand)' }}>
        <img src="../../assets/blob-cream.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: -80, right: -40, width: 300, opacity: 0.25 }} />
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: 'var(--radius-pill)', fontSize: 12.5, fontWeight: 600, marginBottom: 12 }}><Icon name="clock" size={14} /> In 2 days</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>Antenatal check-up</h2>
            <div style={{ display: 'flex', gap: 20, marginTop: 12, fontSize: 'var(--text-sm)', opacity: 0.95, flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><Icon name="calendar" size={16} /> Tue, 16 Jul · 11:30 AM</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><Icon name="map-pin" size={16} /> Maitri Mahila Clinic, Sardhana</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="secondary">Reschedule</Button>
            <Button variant="whatsapp" leftIcon="video">Join tele-consult</Button>
          </div>
        </div>
      </div>
      {/* stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        <Stat icon="droplet" tone="clay" value="Day 14" label="Cycle" sub="Ovulation window" />
        <Stat icon="shield-check" tone="sage" value="Due Sep" label="Next screening" sub="HPV vaccination" />
        <Stat icon="file-text" tone="dusk" value="2 ready" label="Reports" sub="1 processing" />
        <Stat icon="activity" tone="blush" value="Healthy" label="Last check-up" sub="BP 118/76" />
      </div>
      {/* reports + tip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
        <Card variant="elevated" padding="none">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', borderBottom: '1px solid var(--border-subtle)' }}>
            <h3 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-strong)' }}>Recent reports</h3>
            <a href="#" style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>View all</a>
          </div>
          <div>
            {reports.map((r, i) => (
              <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 22px', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
                <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--clay-50)', color: 'var(--clay-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="file-text" size={20} /></span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-strong)', fontSize: 'var(--text-base)' }}>{r.name}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)' }}>{r.date}</div>
                </div>
                <Badge tone={r.tone} dot>{r.status === 'ready' ? 'Ready' : 'Processing'}</Badge>
                <span style={{ color: r.status === 'ready' ? 'var(--clay-600)' : 'var(--sand-300)', display: 'flex', cursor: r.status === 'ready' ? 'pointer' : 'default' }}><Icon name="download" size={19} /></span>
              </div>
            ))}
          </div>
        </Card>
        <Card variant="cream" padding="lg">
          <span style={{ display: 'inline-flex', width: 42, height: 42, borderRadius: '50%', background: 'var(--surface-card)', color: 'var(--clay-600)', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon name="heart" size={22} /></span>
          <h3 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-strong)' }}>Health tip</h3>
          <p style={{ margin: '8px 0 16px', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)' }}>
            Around ovulation, staying hydrated and tracking symptoms helps you and Dr. Roma plan care with confidence.
          </p>
          <Button variant="outline" onClick={onBook} rightIcon="arrow-right">Book a consult</Button>
        </Card>
      </div>
    </div>
  );
}
window.Dashboard = Dashboard;
