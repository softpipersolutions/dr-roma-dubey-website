const { Icon, Avatar } = window.DrRomaDubeyDesignSystem_317be8;

const NAV = [
  { key: 'dashboard', label: 'Dashboard', icon: 'home' },
  { key: 'appointments', label: 'Appointments', icon: 'calendar' },
  { key: 'reports', label: 'Reports', icon: 'file-text' },
  { key: 'messages', label: 'Messages', icon: 'message' },
];

function Sidebar({ active, onNavigate }) {
  return (
    <aside style={{ width: 250, flexShrink: 0, background: 'var(--surface-card)', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', height: '100%', padding: '22px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '4px 8px 22px' }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--clay-600)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16 }}>RD</div>
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontWeight: 800, color: 'var(--sand-800)', letterSpacing: '-0.02em' }}>Dr. Roma Dubey</div>
          <div style={{ fontSize: 11, color: 'var(--text-subtle)' }}>Patient portal</div>
        </div>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        {NAV.map((n) => {
          const on = active === n.key;
          return (
            <button key={n.key} onClick={() => onNavigate(n.key)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', borderRadius: 'var(--radius-md)',
              border: 'none', cursor: 'pointer', font: 'inherit', fontSize: 'var(--text-base)', textAlign: 'left',
              fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
              color: on ? 'var(--clay-800)' : 'var(--text-muted)',
              background: on ? 'var(--clay-50)' : 'transparent',
              transition: 'var(--transition-colors)',
            }}>
              <Icon name={n.icon} size={20} /> {n.label}
            </button>
          );
        })}
      </nav>
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14, marginTop: 8, display: 'flex', alignItems: 'center', gap: 11 }}>
        <Avatar name="Priya Sharma" size="md" status="online" />
        <div style={{ flex: 1, lineHeight: 1.2 }}>
          <div style={{ fontWeight: 600, color: 'var(--text-strong)', fontSize: 'var(--text-sm)' }}>Priya Sharma</div>
          <div style={{ fontSize: 11, color: 'var(--text-subtle)' }}>Patient · #MMC-2048</div>
        </div>
        <span style={{ color: 'var(--text-subtle)', display: 'flex', cursor: 'pointer' }}><Icon name="log-out" size={18} /></span>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
