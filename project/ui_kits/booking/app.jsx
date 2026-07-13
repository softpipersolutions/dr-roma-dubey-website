function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '44px 20px', position: 'relative', overflow: 'hidden' }}>
      <img src="../../assets/blob-blush.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: -140, left: -120, width: 480, opacity: 0.6 }} />
      <img src="../../assets/blob-clay.png" alt="" aria-hidden="true" style={{ position: 'absolute', bottom: -160, right: -120, width: 460, opacity: 0.4 }} />
      <div style={{ position: 'relative' }}>
        <window.Phone>
          <window.Chat />
        </window.Phone>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
