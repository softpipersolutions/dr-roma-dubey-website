const { Testimonial } = window.DrRomaDubeyDesignSystem_317be8;

const REVIEWS = [
  { rating: 5, quote: 'Dr. Roma guided me through my entire pregnancy with so much care and expertise. From the first scan to my safe delivery, I always felt supported and heard.', author: 'Priya Sharma', role: 'New mother' },
  { rating: 5, quote: 'I struggled with PCOS for years until I found Dr. Roma. Her personalised plan and clear explanations made such a difference. I feel healthier than ever!', author: 'Aarti Verma', role: 'PCOS care' },
  { rating: 5, quote: 'My laparoscopic surgery was smooth and the recovery was quick. Dr. Roma explained everything patiently and put my whole family at ease.', author: 'Sunita Rani', role: 'Laparoscopy' },
];

function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 44px' }}>
          <span className="eyebrow">Client reviews</span>
          <h2 style={{ fontSize: 'var(--text-display-lg)', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--sand-800)', marginTop: 12, lineHeight: 1.1 }}>
            Caring for every woman's journey
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {REVIEWS.map((r) => <div key={r.author} className="reveal"><Testimonial {...r} /></div>)}
        </div>
      </div>
    </section>
  );
}
window.Reviews = Reviews;
