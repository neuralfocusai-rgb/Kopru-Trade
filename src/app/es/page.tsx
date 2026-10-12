export default function SpanishPage() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: 48, marginBottom: 20 }}>Köprü 🌉</h1>
      <p style={{ fontSize: 20, color: '#888', marginBottom: 40 }}>
        La primera plataforma que conecta fabricantes turcos con compradores de América Latina, África y el Sudeste Asiático.
      </p>
      
      <div style={{ background: '#1a1a1a', padding: 30, borderRadius: 12, marginBottom: 30 }}>
        <h2 style={{ fontSize: 28, marginBottom: 15 }}>🇹🇷 Para Fabricantes Turcos</h2>
        <ul style={{ fontSize: 16, lineHeight: 1.8 }}>
          <li>✓ Acceso a mercados de Colombia, México, Perú, Nigeria, Indonesia</li>
          <li>✓ Plataforma gratuita para los primeros 10 fabricantes</li>
          <li>✓ Solo 5% de comisión en ventas exitosas</li>
          <li>✓ Conexión directa con 970 millones de consumidores</li>
        </ul>
      </div>

      <div style={{ background: '#1a1a1a', padding: 30, borderRadius: 12, marginBottom: 30 }}>
        <h2 style={{ fontSize: 28, marginBottom: 15 }}>🌍 Para Compradores</h2>
        <ul style={{ fontSize: 16, lineHeight: 1.8 }}>
          <li>✓ Conexión directa con fabricantes turcos verificados</li>
          <li>✓ Productos de calidad europea a precios competitivos</li>
          <li>✓ Textiles, muebles, autopartes, electrónica</li>
          <li>✓ Sin intermediarios, comercio transparente</li>
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
          🚀 Únete al Programa Piloto
        </a>
        <p style={{ marginTop: 20, color: '#666', fontSize: 14 }}>
          Completamente gratis para los primeros 10 fabricantes y 50 compradores
        </p>
      </div>

      <div style={{ marginTop: 80, textAlign: 'center', color: '#666', fontSize: 14 }}>
        <p>
          <a href="/tr" style={{ color: '#888', marginRight: 20 }}>Türkçe</a>
          <a href="/en" style={{ color: '#888' }}>English</a>
        </p>
        <p style={{ marginTop: 20 }}>
          © 2026 Köprü · Construido desde Argentina para Turquía 🇦🇷🇹🇷
        </p>
      </div>
    </div>
  );
}
