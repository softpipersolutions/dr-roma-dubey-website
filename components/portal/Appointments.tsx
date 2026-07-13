'use client';

import { Tabs, Badge, Button, IconButton, Icon } from '@/components/ds';

type Apt = { d: string; m: string; title: string; time: string; mode: string; loc: string; tone: 'success' | 'warning' | 'neutral'; status: string };

const UPCOMING: Apt[] = [
  { d: '16', m: 'Jul', title: 'Antenatal check-up', time: 'Tue · 11:30 AM', mode: 'In-clinic', loc: 'Maitri Mahila Clinic', tone: 'success', status: 'Confirmed' },
  { d: '22', m: 'Jul', title: 'Follicular monitoring scan', time: 'Mon · 9:00 AM', mode: 'In-clinic', loc: 'Aryavart Hospital', tone: 'warning', status: 'Awaiting' },
];
const PAST: Apt[] = [
  { d: '28', m: 'Jun', title: 'PCOS follow-up', time: 'Sat · 4:30 PM', mode: 'Tele-consult', loc: 'Online', tone: 'neutral', status: 'Completed' },
  { d: '10', m: 'Jun', title: 'Pap smear & wellness exam', time: 'Tue · 10:00 AM', mode: 'In-clinic', loc: 'Maitri Mahila Clinic', tone: 'neutral', status: 'Completed' },
  { d: '02', m: 'Jun', title: 'First consultation', time: 'Mon · 12:15 PM', mode: 'Tele-consult', loc: 'Online', tone: 'neutral', status: 'Completed' },
];

function AptRow({ a, past }: { a: Apt; past?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '16px 4px', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ width: 62, textAlign: 'center', background: past ? 'var(--sand-100)' : 'var(--clay-50)', borderRadius: 'var(--radius-md)', padding: '8px 0', flexShrink: 0 }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: past ? 'var(--sand-600)' : 'var(--clay-700)', lineHeight: 1 }}>{a.d}</div>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-subtle)' }}>{a.m}</div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 'var(--text-md)' }}>{a.title}</div>
        <div style={{ display: 'flex', gap: 16, marginTop: 5, fontSize: 'var(--text-sm)', color: 'var(--text-subtle)', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="clock" size={15} /> {a.time}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name={a.mode === 'Tele-consult' ? 'video' : 'map-pin'} size={15} /> {a.mode} · {a.loc}</span>
        </div>
      </div>
      <Badge tone={a.tone} dot>{a.status}</Badge>
      {past ? (
        <Button variant="ghost" size="sm" leftIcon="file-text">Summary</Button>
      ) : (
        <div style={{ display: 'flex', gap: 6 }}>
          <Button variant="outline" size="sm">Reschedule</Button>
          <IconButton icon="video" label="Join" variant="soft" size="sm" />
        </div>
      )}
    </div>
  );
}

export function Appointments({ onBook }: { onBook: () => void }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--sand-800)', letterSpacing: '-0.02em' }}>Appointments</h2>
        <Button variant="primary" leftIcon="plus" onClick={onBook}>Book new</Button>
      </div>
      <Tabs
        defaultValue="up"
        items={[
          { value: 'up', label: 'Upcoming', icon: 'calendar', content: <div>{UPCOMING.map((a) => <AptRow key={a.title} a={a} />)}</div> },
          { value: 'past', label: 'Past visits', icon: 'clock', content: <div>{PAST.map((a) => <AptRow key={a.title} a={a} past />)}</div> },
        ]}
      />
    </div>
  );
}
