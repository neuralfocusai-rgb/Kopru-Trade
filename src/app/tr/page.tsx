export default function TurkishPage() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: 48, marginBottom: 20 }}>Köprü 🌉</h1>
      <p style={{ fontSize: 20, color: '#888', marginBottom: 40 }}>
        Türkiye'nin üretim gücünü Latin Amerika, Afrika ve Güneydoğu Asya pazarlarına bağlayan ilk platform.
      </p>
      
      <div style={{ background: '#1a1a1a', padding: 30, borderRadius: 12, marginBottom: 30 }}>
        <h2 style={{ fontSize: 28, marginBottom: 15 }}>🇹🇷 Türk Üreticiler İçin</h2>
        <ul style={{ fontSize: 16, lineHeight: 1.8 }}>
          <li>✓ Kolombiya, Meksika, Peru, Nijerya, Endonezya pazarlarına erişim</li>
          <li>✓ İlk 10 üretici için platform tamamen ücretsiz</li>
          <li>✓ Sadece başarılı satışlardan %5 komisyon</li>
          <li>✓ 970 milyon tüketiciye doğrudan bağlantı</li>
        </ul>
      </div>

      <div style={{ background: '#1a1a1a', padding: 30, borderRadius: 12, marginBottom: 30 }}>
        <h2 style={{ fontSize: 28, marginBottom: 15 }}>🌍 Alıcılar İçin</h2>
        <ul style={{ fontSize: 16, lineHeight: 1.8 }}>
          <li>✓ Doğrulanmış Türk üreticilerle doğrudan bağlantı</li>
          <li>✓ Avrupa kalitesinde ürünler, rekabetçi fiyatlar</li>
          <li>✓ Tekstil, mobilya, otomotiv parçaları, elektronik</li>
          <li>✓ Aracısız, şeffaf ticaret</li>
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
          🚀 Pilot Programa Katıl
        </a>
        <p style={{ marginTop: 20, color: '#666', fontSize: 14 }}>
          İlk 10 üretici ve 50 alıcı için tamamen ücretsiz
        </p>
      </div>

      <div style={{ marginTop: 80, textAlign: 'center', color: '#666', fontSize: 14 }}>
        <p>
          <a href="/en" style={{ color: '#888', marginRight: 20 }}>English</a>
          <a href="/es" style={{ color: '#888' }}>Español</a>
        </p>
        <p style={{ marginTop: 20 }}>
          © 2026 Köprü · Arjantin'den Türkiye için inşa edildi 🇦🇷🇹🇷
        </p>
      </div>
    </div>
  );
}
