import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";

export default function SeccionArriendos({ arriendos }) {
  return (
    <section id="arriendos-sec" style={{ background: "#F5F7FA", padding: "64px 0" }}>
      <div className="page-wrap">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="badge-amber">Arriendo de equipos</span>
          <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,32px)", margin: "14px 0 10px" }}>Equipos por día o semana</h2>
          <p style={{ color: "#4A6080", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontSize: 15 }}>
            Sin necesidad de comprar equipos costosos. Ideal para obras, remodelaciones y trabajos puntuales.
          </p>
        </div>

        <div className="grid-arriendos">
          {arriendos.map(item => (
            <div key={item.id} className="card" style={{ display: "flex", flexDirection: "column" }}>
              {/* Imagen con badge de precio */}
              <div className="img-box-arriendo">
                <img src={item.img} alt={item.nombre} className="img-cover"
                  onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                <span className="precio-badge">Desde ${item.precio.toLocaleString("es-CL")} {item.periodo}</span>
              </div>

              <div style={{ padding: "18px 18px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ color: "#0B1829", fontWeight: 900, fontSize: 17, margin: "0 0 8px" }}>{item.nombre}</h3>

                {/* Precio destacado en el cuerpo */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 10 }}>
                  <span style={{ color: "#0B1829", fontWeight: 900, fontSize: 24 }}>
                    ${item.precio.toLocaleString("es-CL")}
                  </span>
                  <span style={{ color: "#4A6080", fontSize: 13, fontWeight: 600 }}>
                    {item.periodo}
                  </span>
                </div>

                <p style={{ color: "#4A6080", fontSize: 13, margin: "0 0 14px", lineHeight: 1.6, flex: 1 }}>{item.desc}</p>

                {/* Checklist de specs */}
                {(item.specs || []).length > 0 && (
                  <div style={{ background: "#F0F4F8", borderRadius: 10, padding: "10px 14px", marginBottom: 16 }}>
                    <p style={{ color: "#1A3F6F", fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Incluye</p>
                    {item.specs.map(s => (
                      <div key={s} style={{ fontSize: 13, color: "#0B1829", display: "flex", gap: 8, padding: "4px 0", alignItems: "flex-start" }}>
                        <span style={{ color: "#F5B800", fontWeight: 900, flexShrink: 0 }}>✓</span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                )}

                <a href={getWhatsAppQuoteUrl(item.nombre, "arriendo")} target="_blank" rel="noopener noreferrer" className="btn-dark">
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
