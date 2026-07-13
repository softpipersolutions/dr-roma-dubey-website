'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Input, Select, Textarea, Icon, Badge } from '@/components/ds';
import { BLOBS } from '@/lib/photos';
import { buildWhatsAppLink, CLINIC_PHONE_DISPLAY, type BookingDetails } from '@/lib/whatsapp';

const SERVICES = [
  'Pregnancy / antenatal care',
  'PCOS & hormonal',
  'Fertility consult',
  'Pap smear & wellness exam',
  'Laparoscopy consult',
  'Menopause clinic',
  'General consultation',
];
const LOCATIONS = ['Maitri Mahila Clinic, Sardhana', 'Aryavart Hospital, Daurala', 'Tele-consult (online)'];
const TIMES = ['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM', '4:30 PM', '5:30 PM', 'Any time'];

const STEPS = [
  { icon: 'message', title: 'Share a few details', body: 'Tell us who you are and what you need — it takes under a minute.' },
  { icon: 'phone', title: 'Continue on WhatsApp', body: 'We open a chat with your details ready. Confirm the slot and secure UPI payment right there.' },
  { icon: 'check-circle', title: 'Instant confirmation', body: 'Dr. Roma’s team confirms your appointment on WhatsApp. No forms, no hassle.' },
] as const;

type Errors = Partial<Record<keyof BookingDetails, string>>;

export default function BookPage() {
  const [form, setForm] = useState<BookingDetails>({
    name: '',
    phone: '',
    service: '',
    location: LOCATIONS[0],
    preferredDay: '',
    preferredTime: TIMES[0],
    notes: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<string | null>(null);

  const set = (key: keyof BookingDetails) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Please tell us your name';
    if (!form.service) next.service = 'Choose a service';
    if (!form.preferredDay) next.preferredDay = 'Pick a preferred day';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const link = buildWhatsAppLink(form);
    setSubmitted(link);
    // Hand the patient off to WhatsApp with the pre-filled message.
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <main style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: 'var(--surface-page)' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={BLOBS.blush} alt="" aria-hidden="true" style={{ position: 'absolute', top: -160, left: -140, width: 480, opacity: 0.55, pointerEvents: 'none' }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={BLOBS.clay} alt="" aria-hidden="true" style={{ position: 'absolute', bottom: -180, right: -140, width: 460, opacity: 0.4, pointerEvents: 'none' }} />

      {/* top bar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76, position: 'relative', zIndex: 1 }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--sand-800)' }}>
            Dr. Roma <span style={{ color: 'var(--clay-600)' }}>Dubey</span>
          </span>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginTop: 3 }}>
            Gynaecology · Women&apos;s Health
          </span>
        </Link>
        <Button variant="ghost" as={Link} href="/" leftIcon="chevron-left">
          Back to site
        </Button>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 72 }}>
        <div className="book-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 48, alignItems: 'start', paddingTop: 24 }}>
          {/* left — reassurance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, position: 'sticky', top: 24 }}>
            <Badge tone="brand" icon="sparkles">Book in under a minute</Badge>
            <h1 style={{ fontSize: 'var(--text-display-lg)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', lineHeight: 1.08 }}>
              Let&apos;s get you the <span style={{ color: 'var(--clay-600)' }}>care you need</span>
            </h1>
            <p style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', maxWidth: 440 }}>
              Share a few details and we&apos;ll continue on WhatsApp — where you can confirm your slot, pay securely, and get instant confirmation. Everything in one chat.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 4 }}>
              {STEPS.map((s, i) => (
                <div key={s.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'color-mix(in srgb, var(--whatsapp) 14%, white)', color: 'var(--whatsapp-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={s.icon} size={22} />
                  </span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 'var(--text-base)' }}>{i + 1}. {s.title}</div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)', marginTop: 2 }}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6, color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
              <Icon name="phone" size={16} /> Prefer to call? <strong style={{ color: 'var(--text-strong)' }}>{CLINIC_PHONE_DISPLAY}</strong>
            </div>
          </div>

          {/* right — form / confirmation */}
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', padding: 'var(--space-8)' }}>
            {submitted ? (
              <Confirmation form={form} link={submitted} onEdit={() => setSubmitted(null)} />
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }} noValidate>
                <div>
                  <h2 style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>
                    Appointment details
                  </h2>
                  <p style={{ margin: '6px 0 0', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                    We&apos;ll send these along to start your WhatsApp chat.
                  </p>
                </div>

                <Input
                  label="Your name" required placeholder="e.g. Priya Sharma" leftIcon="user"
                  value={form.name} onChange={set('name')} error={errors.name}
                />
                <div className="book-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <Input
                    label="Phone (optional)" placeholder="+91 …" leftIcon="phone"
                    value={form.phone} onChange={set('phone')} inputMode="tel"
                  />
                  <Select
                    label="Preferred clinic" options={LOCATIONS}
                    value={form.location} onChange={set('location')}
                  />
                </div>
                <Select
                  label="Service" required placeholder="Choose a service" options={SERVICES}
                  value={form.service} onChange={set('service')} error={errors.service}
                />
                <div className="book-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <Input
                    label="Preferred day" required type="date"
                    value={form.preferredDay} onChange={set('preferredDay')} error={errors.preferredDay}
                  />
                  <Select
                    label="Preferred time" options={TIMES}
                    value={form.preferredTime} onChange={set('preferredTime')}
                  />
                </div>
                <Textarea
                  label="Anything we should know? (optional)" rows={3}
                  placeholder="Symptoms, questions, previous reports…"
                  value={form.notes} onChange={set('notes')}
                />

                <Button type="submit" variant="whatsapp" size="lg" leftIcon="message" fullWidth>
                  Continue on WhatsApp
                </Button>
                <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--text-subtle)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <Icon name="shield" size={14} /> Your details are only used to start your chat with the clinic.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Confirmation({ form, link, onEdit }: { form: BookingDetails; link: string; onEdit: () => void }) {
  const rows: { icon: Parameters<typeof Icon>[0]['name']; label: string }[] = [
    { icon: 'user', label: form.name },
    { icon: 'heart', label: form.service },
    { icon: 'map-pin', label: form.location },
    { icon: 'calendar', label: `${form.preferredDay || 'Any day'} · ${form.preferredTime}` },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, textAlign: 'center', alignItems: 'center' }}>
      <span style={{ width: 64, height: 64, borderRadius: '50%', background: 'color-mix(in srgb, var(--whatsapp) 16%, white)', color: 'var(--whatsapp-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="message" size={32} />
      </span>
      <div>
        <h2 style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-strong)' }}>Opening WhatsApp…</h2>
        <p style={{ margin: '8px 0 0', fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)', maxWidth: 360 }}>
          If the chat didn&apos;t open automatically, tap the button below. Your message is ready to send.
        </p>
      </div>
      <div style={{ width: '100%', background: 'var(--surface-cream)', borderRadius: 'var(--radius-md)', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left' }}>
        {rows.map((r) => (
          <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-body)', fontSize: 'var(--text-sm)' }}>
            <span style={{ color: 'var(--clay-600)', display: 'flex' }}><Icon name={r.icon} size={16} /></span>
            {r.label}
          </div>
        ))}
      </div>
      <Button variant="whatsapp" size="lg" leftIcon="message" fullWidth as="a" href={link} target="_blank" rel="noopener noreferrer">
        Open WhatsApp
      </Button>
      <button
        type="button" onClick={onEdit}
        style={{ border: 'none', background: 'transparent', color: 'var(--text-link)', font: 'inherit', fontWeight: 600, cursor: 'pointer' }}
      >
        Edit details
      </button>
    </div>
  );
}
