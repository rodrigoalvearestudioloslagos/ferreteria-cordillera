export default function PorQue() {
  return (
    <section style={{ background: "#fff", padding: "64px 0" }}>
      <div className="page-wrap">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="badge-amber">¿Por qué elegirnos?</span>
          <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,32px)", margin: "14px 0 10px" }}>Tu ferretería de barrio</h2>
          <p style={{ color: "#4A6080", maxWidth: 540, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
            Tu ferretería de barrio con todo lo que necesitas, desde herramientas hasta materiales de construcción.
          </p>
        </div>
        <div className="grid-porque">
          {[
            { icon: "⚡", t: "Atención personalizada",  d: "Te asesoramos para que encuentres exactamente lo que necesitas." },
            { icon: "📦", t: "Catálogo completo",        d: "Amplia variedad de productos para el hogar, la obra y la industria." },
            { icon: "🚚", t: "Despacho a domicilio",     d: "Llevamos tus productos directamente a la obra o tu hogar." },
            { icon: "💲", t: "Precios competitivos",     d: "Los mejores proveedores para darte el mejor valor del mercado." },
            { icon: "🔒", t: "Compra segura",            d: "Proceso simple, transparente y confiable para cotizar o comprar." },
            { icon: "📞", t: "Asesoría en terreno",      d: "Consulta por WhatsApp o visítanos directamente en Puerto Varas." },
          ].map(it => (
            <div key={it.t} style={{ background: "#F5F7FA", borderRadius: 16, padding: "24px 22px", borderLeft: "4px solid #F5B800" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{it.icon}</div>
              <h3 style={{ color: "#0B1829", fontWeight: 800, fontSize: 16, margin: "0 0 8px" }}>{it.t}</h3>
              <p style={{ color: "#4A6080", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
