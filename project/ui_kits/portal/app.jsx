const DS = window.DrRomaDubeyDesignSystem_317be8;
const { Input, IconButton, Avatar, Dialog, Button, Select, Textarea } = DS;

function BookDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} size="md" title="Book an appointment" description="Pick a service and time — we'll confirm on WhatsApp.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Select label="Service" placeholder="Choose a service" options={['Antenatal check-up', 'PCOS & hormonal', 'Fertility consult', 'Pap smear & wellness', 'General consult']} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Select label="Clinic" options={['Maitri Mahila Clinic', 'Aryavart Hospital', 'Tele-consult']} />
          <Select label="Preferred day" options={['Tue 16 Jul', 'Wed 17 Jul', 'Thu 18 Jul']} />
        </div>
        <Textarea label="Anything we should know? (optional)" rows={3} placeholder="Symptoms, questions, previous reports…" />
      </div>
    </Dialog>
  );
}

function App() {
  const [view, setView] = React.useState('dashboard');
  const [booking, setBooking] = React.useState(false);
  const onBook = () => setBooking(true);

  const View = { dashboard: window.Dashboard, appointments: window.Appointments, reports: window.Reports, messages: window.Messages }[view];

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--surface-page)' }}>
      <window.Sidebar active={view} onNavigate={setView} />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* topbar */}
        <header style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '16px 30px', borderBottom: '1px solid var(--border-subtle)', background: 'color-mix(in srgb, var(--surface-page) 80%, transparent)', backdropFilter: 'blur(var(--blur-md))', flexShrink: 0 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-subtle)' }}>Good morning</div>
            <div style={{ fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--sand-800)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Hello, Priya 👋</div>
          </div>
          <div style={{ width: 260 }}><Input placeholder="Search reports, visits…" leftIcon="search" size="sm" /></div>
          <IconButton icon="bell" label="Notifications" variant="soft" round />
          <Button variant="primary" leftIcon="plus" onClick={onBook}>Book</Button>
        </header>
        {/* content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '28px 30px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            {View ? <View onBook={onBook} /> : null}
          </div>
        </div>
      </main>
      <BookDialog open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
