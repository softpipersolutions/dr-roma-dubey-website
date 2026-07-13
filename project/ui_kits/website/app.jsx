const DS = window.DrRomaDubeyDesignSystem_317be8;
const { Dialog, Button, Icon } = DS;

function ConnectDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} size="sm" showClose>
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <span style={{ width: 64, height: 64, borderRadius: '50%', background: 'color-mix(in srgb, var(--whatsapp) 16%, white)', color: 'var(--whatsapp-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="message" size={32} />
        </span>
        <h2 style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-strong)' }}>Chat with our team</h2>
        <p style={{ margin: 0, fontSize: 'var(--text-base)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>
          You'll be connected on WhatsApp to ask questions, share concerns and book your appointment — all in one chat.
        </p>
        <div style={{ width: '100%', background: 'var(--surface-cream)', borderRadius: 'var(--radius-md)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
          <Icon name="phone" size={18} /> <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>+91 98765 43210</span>
        </div>
        <Button variant="whatsapp" size="lg" leftIcon="message" fullWidth onClick={onClose}>Open WhatsApp</Button>
      </div>
    </Dialog>
  );
}

function App() {
  const [connect, setConnect] = React.useState(false);
  const onConnect = () => setConnect(true);

  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.15 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <window.Nav onConnect={onConnect} />
      <window.Hero onConnect={onConnect} />
      <window.Services />
      <window.HowItWorks />
      <window.About />
      <window.Reviews />
      <window.Faq />
      <window.Footer onConnect={onConnect} />
      <ConnectDialog open={connect} onClose={() => setConnect(false)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
