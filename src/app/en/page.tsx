export default function EnglishPage() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: 48, marginBottom: 20 }}>Köprü 🌉</h1>
      <p style={{ fontSize: 20, color: '#888', marginBottom: 40 }}>
        The first platform connecting Turkish manufacturers with buyers in Latin America, Africa, and Southeast Asia.
      </p>
      
      <div style={{ background: '#1a1a1a', padding: 30, borderRadius: 12, marginBottom: 30 }}>
        <h2 style={{ fontSize: 28, marginBottom: 15 }}>🇹🇷 For Turkish Manufacturers</h2>
        <ul style={{ fontSize: 16, lineHeight: 1.8 }}>
          <li>✓ Access to Colombia, Mexico, Peru, Nigeria, Indonesia markets</li>
          <li>✓ Free platform for the first 10 manufacturers</li>
          <li>✓ Only 5% commission on successful sales</li>
          <li>✓ Direct connection to 970 million consumers</li>
        </ul>
      </div>

      <div style={{ background: '#1a1a1a', padding: 30, borderRadius: 12, marginBottom: 30 }}>
        <h2 style={{ fontSize: 28, marginBottom: 15 }}>🌍 For Buyers</h2>
        <ul style={{ fontSize: 16, lineHeight: 1.8 }}>
          <li>✓ Direct connection to verified Turkish manufacturers</li>
          <li>✓ European quality products at competitive prices</li>
          <li>✓ Textiles, furniture, automotive parts, electronics</li>
          <li>✓ No middlemen, transparent trade</li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', marginTop: 60 }}>
        <a href="mailto:lucas@neuralfocus.ai" style={{ 
          display: 'inline-block', 
          background: 'linear-gradient(135deg, #ef4444, #dc2626)', 
          color: '#fff', 
          padding: '16px 40px', 
          borderRadius: 99, 
          textDecoration: 'none',
          fontSize: 18,
          fontWeight: 700
        }}>
          🚀 Join Pilot Program
        </a>
        <p style={{ marginTop: 20, color: '#666', fontSize: 14 }}>
          Completely free for the first 10 manufacturers and 50 buyers
        </p>
      </div>

      <div style={{ marginTop: 80, textAlign: 'center', color: '#666', fontSize: 14 }}>
        <p>
          <a href="/tr" style={{ color: '#888', marginRight: 20 }}>Türkçe</a>
          <a href="/es" style={{ color: '#888' }}>Español</a>
        </p>
        <p style={{ marginTop: 20 }}>
          © 2026 Köprü · Built from Argentina for Turkey 🇦🇷🇹🇷
        </p>
      </div>
    </div>
  );
}
