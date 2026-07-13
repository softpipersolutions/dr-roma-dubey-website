'use client';

import { useState } from 'react';
import { Input, IconButton, Dialog, Button, Select, Textarea } from '@/components/ds';
import { Sidebar, type PortalView } from '@/components/portal/Sidebar';
import { Dashboard } from '@/components/portal/Dashboard';
import { Appointments } from '@/components/portal/Appointments';
import { Reports } from '@/components/portal/Reports';
import { Messages } from '@/components/portal/Messages';
import { buildWhatsAppLink } from '@/lib/whatsapp';

const SERVICES = ['Antenatal check-up', 'PCOS & hormonal', 'Fertility consult', 'Pap smear & wellness', 'General consult'];
const CLINICS = ['Maitri Mahila Clinic', 'Aryavart Hospital', 'Tele-consult'];

function BookDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [service, setService] = useState('');
  const [clinic, setClinic] = useState(CLINICS[0]);
  const [day, setDay] = useState('');
  const [notes, setNotes] = useState('');

  const onContinue = () => {
    const link = buildWhatsAppLink({
      name: 'Priya Sharma',
      service: service || 'General consult',
      location: clinic,
      preferredDay: day || 'Any day',
      preferredTime: 'Any time',
      notes,
    });
    window.open(link, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      size="md"
      title="Book an appointment"
      description="Pick a service and time — we'll confirm on WhatsApp."
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="whatsapp" leftIcon="message" onClick={onContinue}>Continue on WhatsApp</Button>
        </>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Select label="Service" placeholder="Choose a service" options={SERVICES} value={service} onChange={(e) => setService(e.target.value)} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Select label="Clinic" options={CLINICS} value={clinic} onChange={(e) => setClinic(e.target.value)} />
          <Input label="Preferred day" type="date" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <Textarea label="Anything we should know? (optional)" rows={3} placeholder="Symptoms, questions, previous reports…" value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>
    </Dialog>
  );
}

export default function PortalPage() {
  const [view, setView] = useState<PortalView>('dashboard');
  const [booking, setBooking] = useState(false);
  const onBook = () => setBooking(true);

  return (
    <div className="portal-shell" style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--surface-page)' }}>
      <Sidebar active={view} onNavigate={setView} />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* topbar */}
        <header style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '16px 30px', borderBottom: '1px solid var(--border-subtle)', background: 'color-mix(in srgb, var(--surface-page) 80%, transparent)', backdropFilter: 'blur(var(--blur-md))', flexShrink: 0 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-subtle)' }}>Good morning</div>
            <div style={{ fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--sand-800)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Hello, Priya 👋</div>
          </div>
          <div className="portal-search" style={{ width: 260 }}>
            <Input placeholder="Search reports, visits…" leftIcon="search" size="sm" />
          </div>
          <IconButton icon="bell" label="Notifications" variant="soft" round />
          <Button variant="primary" leftIcon="plus" onClick={onBook}>Book</Button>
        </header>
        {/* content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '28px 30px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            {view === 'dashboard' && <Dashboard onBook={onBook} />}
            {view === 'appointments' && <Appointments onBook={onBook} />}
            {view === 'reports' && <Reports />}
            {view === 'messages' && <Messages />}
          </div>
        </div>
      </main>
      <BookDialog open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}
