const { Icon } = window.DrRomaDubeyDesignSystem_317be8;

const FLOW = {
  start: {
    msgs: [
      { t: 'text', text: "Hi 👋 Welcome to Dr. Roma Dubey's clinic. I'm here to help you book a consultation." },
      { t: 'text', text: 'How can we help you today?' },
    ],
    options: [{ label: 'Book a consultation', next: 'service' }, { label: 'Ask a question', next: 'ask' }],
  },
  service: {
    msgs: [{ t: 'text', text: 'Wonderful! Which area would you like help with?' }],
    options: [
      { label: 'Pregnancy care', next: 'type' }, { label: 'PCOS & hormonal', next: 'type' },
      { label: 'Fertility', next: 'type' }, { label: 'General consult', next: 'type' },
    ],
  },
  type: {
    msgs: [{ t: 'text', text: 'Great choice. How would you like to consult?' }],
    options: [{ label: 'Tele-consult · ₹500', next: 'pay' }, { label: 'In-clinic · ₹800', next: 'pay' }],
  },
  pay: {
    msgs: [
      { t: 'text', text: 'Please complete payment to confirm. Scan this secure UPI QR — quick and safe.' },
      { t: 'qr' },
    ],
    options: [{ label: "I've paid ✓", next: 'slots' }],
  },
  slots: {
    msgs: [{ t: 'text', text: 'Payment received ✓ Now pick a slot that suits you:' }],
    options: [
      { label: 'Tue 16 Jul · 11:30 AM', next: 'done' },
      { label: 'Wed 17 Jul · 4:00 PM', next: 'done' },
      { label: 'Thu 18 Jul · 10:00 AM', next: 'done' },
    ],
  },
  done: { msgs: [{ t: 'confirm' }], options: [{ label: 'Start over', next: 'restart' }] },
  ask: { msgs: [{ t: 'text', text: 'Sure — type your question below and our team will reply shortly. 💛' }], options: [{ label: 'Actually, book a visit', next: 'service' }] },
};

function Bubble({ from, children }) {
  const clinic = from === 'clinic';
  return (
    <div style={{ display: 'flex', justifyContent: clinic ? 'flex-start' : 'flex-end', padding: '2px 0' }}>
      <div style={{
        maxWidth: '80%', padding: '8px 11px 6px', borderRadius: 14,
        borderTopLeftRadius: clinic ? 3 : 14, borderTopRightRadius: clinic ? 14 : 3,
        background: clinic ? '#fff' : '#E3F3D4',
        boxShadow: '0 1px 1px rgba(61,43,38,0.10)', color: 'var(--sand-900)',
        fontSize: 14.5, lineHeight: 1.4,
      }}>
        {children}
        <span style={{ float: 'right', fontSize: 10.5, color: 'var(--sand-500)', marginLeft: 10, marginTop: 5 }}>9:4{clinic ? '1' : '2'}</span>
        <div style={{ clear: 'both' }} />
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '2px 0' }}>
      <div style={{ background: '#fff', borderRadius: 14, borderTopLeftRadius: 3, padding: '11px 14px', boxShadow: '0 1px 1px rgba(61,43,38,0.10)', display: 'flex', gap: 4 }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--sand-400)', animation: `bt 1.2s ${i * 0.16}s infinite ease-in-out` }} />
        ))}
      </div>
    </div>
  );
}

function QRCard() {
  return (
    <Bubble from="clinic">
      <div style={{ width: 210 }}>
        <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 12, padding: 10, textAlign: 'center' }}>
          <img src="../../assets/booking-qr.png" alt="Sample UPI QR code" style={{ width: '100%', borderRadius: 6, display: 'block' }} />
          <div style={{ marginTop: 8, fontWeight: 700, color: 'var(--text-strong)', fontSize: 13 }}>drromadubey@upi</div>
          <div style={{ fontSize: 11, color: 'var(--text-subtle)' }}>Sample QR · not a live payment</div>
        </div>
      </div>
    </Bubble>
  );
}

function ConfirmCard({ sel }) {
  return (
    <Bubble from="clinic">
      <div style={{ width: 230 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, color: 'var(--sage-700)', fontWeight: 700 }}>
          <Icon name="check-circle" size={20} /> Appointment confirmed
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 13.5 }}>
          <Row icon="heart" label={sel.service || 'Consultation'} />
          <Row icon="video" label={sel.type || 'Consultation'} />
          <Row icon="calendar" label={sel.slot || 'Your slot'} />
          <Row icon="map-pin" label="Maitri Mahila Clinic, Sardhana" />
        </div>
        <div style={{ marginTop: 10, fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.45 }}>See you soon — take care! 💛</div>
      </div>
    </Bubble>
  );
}
function Row({ icon, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-body)' }}>
      <span style={{ color: 'var(--clay-600)', display: 'flex' }}><Icon name={icon} size={15} /></span>{label}
    </div>
  );
}

function Chat() {
  const [items, setItems] = React.useState([]);
  const [options, setOptions] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const [sel, setSel] = React.useState({});
  const scroller = React.useRef(null);
  const selRef = React.useRef({});

  const pushNode = React.useCallback((id) => {
    const node = FLOW[id];
    setTyping(true);
    setOptions([]);
    setTimeout(() => {
      setTyping(false);
      setItems((prev) => [...prev, ...node.msgs.map((m) => ({ from: 'clinic', ...m }))]);
      setOptions(node.options || []);
    }, 650);
  }, []);

  React.useEffect(() => { pushNode('start'); }, [pushNode]);

  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [items, typing, options]);

  const choose = (opt, fromId) => {
    if (fromId === 'service') { selRef.current.service = opt.label; }
    if (fromId === 'type') { selRef.current.type = opt.label; }
    if (fromId === 'slots') { selRef.current.slot = opt.label; }
    setSel({ ...selRef.current });
    if (opt.next === 'restart') {
      selRef.current = {}; setSel({}); setItems([]); setOptions([]);
      setTimeout(() => pushNode('start'), 50);
      return;
    }
    setItems((prev) => [...prev, { from: 'user', t: 'text', text: opt.label }]);
    pushNode(opt.next);
  };

  // determine current node id from last options set
  const currentId = React.useMemo(() => {
    for (const id in FLOW) { if (FLOW[id].options === options) return id; }
    return null;
  }, [options]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* header */}
      <div style={{ background: '#128C7E', paddingTop: 44, color: '#fff', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px 12px' }}>
          <Icon name="chevron-left" size={24} />
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--clay-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, color: '#fff' }}>RD</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 15.5 }}>Dr. Roma Dubey Clinic</div>
            <div style={{ fontSize: 12, opacity: 0.85, display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#8ef0a6' }} /> online</div>
          </div>
          <div style={{ display: 'flex', gap: 16, opacity: 0.95 }}><Icon name="video" size={21} /><Icon name="phone" size={19} /></div>
        </div>
      </div>
      {/* messages */}
      <div ref={scroller} style={{ flex: 1, overflowY: 'auto', padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ alignSelf: 'center', background: 'color-mix(in srgb, #fff 70%, var(--whatsapp-bg))', color: 'var(--sand-600)', fontSize: 11.5, padding: '4px 12px', borderRadius: 8, marginBottom: 8 }}>Today</div>
        {items.map((m, i) => (
          m.t === 'qr' ? <QRCard key={i} /> :
          m.t === 'confirm' ? <ConfirmCard key={i} sel={sel} /> :
          <Bubble key={i} from={m.from}>{m.text}</Bubble>
        ))}
        {typing && <Typing />}
      </div>
      {/* quick replies */}
      {options.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '10px 12px 6px', justifyContent: 'flex-end' }}>
          {options.map((o) => (
            <button key={o.label} onClick={() => choose(o, currentId)} style={{
              border: '1.5px solid #128C7E', background: '#fff', color: '#0d7266',
              padding: '8px 14px', borderRadius: 'var(--radius-pill)', fontSize: 13.5, fontWeight: 600,
              fontFamily: 'var(--font-sans)', cursor: 'pointer', boxShadow: '0 1px 2px rgba(61,43,38,0.08)',
            }}>{o.label}</button>
          ))}
        </div>
      )}
      {/* input row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px 12px', flexShrink: 0 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, background: '#fff', borderRadius: 'var(--radius-pill)', padding: '9px 14px', color: 'var(--sand-400)', boxShadow: '0 1px 2px rgba(61,43,38,0.08)' }}>
          <span style={{ fontSize: 14 }}>Message</span>
        </div>
        <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#128C7E', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name="message" size={20} />
        </div>
      </div>
      <style>{`@keyframes bt{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}`}</style>
    </div>
  );
}
window.Chat = Chat;
