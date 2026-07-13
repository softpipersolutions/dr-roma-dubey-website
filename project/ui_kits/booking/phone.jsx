function Phone({ children }) {
  return (
    <div style={{
      width: 402, background: '#1c1310', borderRadius: 54, padding: 12,
      boxShadow: '0 40px 90px -30px rgba(61,43,38,0.55), 0 12px 30px -12px rgba(61,43,38,0.35)',
      position: 'relative',
    }}>
      <div style={{
        position: 'relative', borderRadius: 44, overflow: 'hidden',
        background: 'var(--whatsapp-bg)', height: 812, display: 'flex', flexDirection: 'column',
      }}>
        {/* status bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 44, zIndex: 5,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 26px', color: '#fff', fontSize: 14, fontWeight: 700, pointerEvents: 'none',
        }}>
          <span>9:41</span>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ width: 17, height: 11, border: '1.5px solid #fff', borderRadius: 3, position: 'relative' }}>
              <span style={{ position: 'absolute', inset: 1.5, background: '#fff', borderRadius: 1, width: '70%' }} />
            </span>
          </div>
        </div>
        {/* notch */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 150, height: 30, background: '#1c1310', borderRadius: '0 0 18px 18px', zIndex: 6 }} />
        {children}
      </div>
    </div>
  );
}
window.Phone = Phone;
