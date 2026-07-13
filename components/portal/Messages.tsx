'use client';

import { useState } from 'react';
import { Avatar, Icon } from '@/components/ds';

const THREADS = [
  { id: 'roma', name: 'Dr. Roma Dubey', preview: 'Your ultrasound looks great — let’s review it on Tuesday.', time: '9:24 AM', unread: 1 },
  { id: 'reception', name: 'Reception · Maitri', preview: 'Your slot on 16 Jul, 11:30 AM is confirmed.', time: 'Yesterday', unread: 0 },
  { id: 'lab', name: 'Lab Team', preview: 'Your blood panel is being processed.', time: 'Mon', unread: 0 },
];

const CONVO: { from: 'them' | 'me'; text: string }[] = [
  { from: 'them', text: 'Hello Priya! Your Pap smear and pelvic ultrasound results are in — everything looks healthy. 💛' },
  { from: 'me', text: 'That’s such a relief, thank you Doctor!' },
  { from: 'them', text: 'Of course. Let’s do a quick review at your antenatal visit on Tuesday. Any symptoms meanwhile, message me here anytime.' },
  { from: 'me', text: 'Will do. See you Tuesday.' },
];

export function Messages() {
  const [active, setActive] = useState('roma');
  return (
    <div>
      <h2 style={{ margin: '0 0 20px', fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--sand-800)', letterSpacing: '-0.02em' }}>Messages</h2>
      <div className="portal-messages" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 0, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', height: 520 }}>
        {/* threads */}
        <div style={{ borderRight: '1px solid var(--border-subtle)', overflowY: 'auto' }}>
          {THREADS.map((t) => {
            const on = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                style={{ width: '100%', display: 'flex', gap: 12, padding: '16px 18px', border: 'none', borderBottom: '1px solid var(--border-subtle)', background: on ? 'var(--clay-50)' : 'transparent', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}
              >
                <Avatar name={t.name} size="md" style={{ flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 'var(--text-sm)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.name}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-subtle)', flexShrink: 0 }}>{t.time}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginTop: 3 }}>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.preview}</span>
                    {t.unread > 0 && <span style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: 'var(--clay-600)', color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t.unread}</span>}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        {/* conversation */}
        <div className="portal-convo" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderBottom: '1px solid var(--border-subtle)' }}>
            <Avatar name="Dr. Roma Dubey" size="sm" status="online" />
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 'var(--text-sm)' }}>Dr. Roma Dubey</div>
              <div style={{ fontSize: 11, color: 'var(--success-text)' }}>online</div>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--surface-page)' }}>
            {CONVO.map((c, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: c.from === 'me' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '74%', padding: '9px 13px', borderRadius: 14, borderTopLeftRadius: c.from === 'them' ? 3 : 14, borderTopRightRadius: c.from === 'me' ? 3 : 14, background: c.from === 'me' ? 'var(--clay-600)' : 'var(--surface-card)', color: c.from === 'me' ? '#fff' : 'var(--sand-900)', fontSize: 'var(--text-sm)', lineHeight: 1.45, boxShadow: 'var(--shadow-xs)' }}>{c.text}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ flex: 1, background: 'var(--surface-page)', borderRadius: 'var(--radius-pill)', padding: '10px 16px', color: 'var(--sand-400)', fontSize: 'var(--text-sm)' }}>Write a message…</div>
            <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--clay-600)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="message" size={19} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
