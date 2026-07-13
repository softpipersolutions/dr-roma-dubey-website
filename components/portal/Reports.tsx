'use client';

import { Card, Badge, Button, Icon } from '@/components/ds';

const REPORTS: { name: string; type: string; date: string; tone: 'success' | 'warning'; status: string }[] = [
  { name: 'Pap Smear Report', type: 'Screening', date: '10 Jul 2026', tone: 'success', status: 'Ready' },
  { name: 'Pelvic Ultrasound', type: 'Imaging', date: '10 Jul 2026', tone: 'success', status: 'Ready' },
  { name: 'Follicular Study', type: 'Imaging', date: '22 Jun 2026', tone: 'success', status: 'Ready' },
  { name: 'Blood Panel (CBC, TSH)', type: 'Lab', date: 'Processing', tone: 'warning', status: 'Pending' },
  { name: 'Hormonal Profile (LH/FSH)', type: 'Lab', date: '28 May 2026', tone: 'success', status: 'Ready' },
];

const COLS = '1.6fr 0.8fr 0.9fr 0.7fr 0.5fr';

export function Reports() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--sand-800)', letterSpacing: '-0.02em' }}>Reports &amp; results</h2>
        <Button variant="outline" leftIcon="download">Download all</Button>
      </div>
      <Card variant="elevated" padding="none">
        <div style={{ display: 'grid', gridTemplateColumns: COLS, padding: '14px 22px', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
          <span>Report</span><span>Type</span><span>Date</span><span>Status</span><span></span>
        </div>
        {REPORTS.map((r, i) => (
          <div key={r.name} style={{ display: 'grid', gridTemplateColumns: COLS, alignItems: 'center', padding: '15px 22px', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 600, color: 'var(--text-strong)' }}>
              <span style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', background: 'var(--clay-50)', color: 'var(--clay-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="file-text" size={18} />
              </span>
              {r.name}
            </span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{r.type}</span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{r.date}</span>
            <span><Badge tone={r.tone} dot>{r.status}</Badge></span>
            <span style={{ display: 'flex', justifyContent: 'flex-end', color: r.status === 'Ready' ? 'var(--clay-600)' : 'var(--sand-300)', cursor: r.status === 'Ready' ? 'pointer' : 'default' }}>
              <Icon name="download" size={19} />
            </span>
          </div>
        ))}
      </Card>
    </div>
  );
}
