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
              <div className="img-box-arriendo">
                <img src={item.img} alt={item.nombre} className="img-cover"
                  onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                <span className="precio-badge">${item.precio.toLocaleString("es-CL")} {item.periodo}</span>
              </div>
              <div style={{ padding: "18px 18px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ color: "#0B1829", fontWeight: 900, fontSize: 17, margin: "0 0 8px" }}>{item.nombre}</h3>
                <p style={{ color: "#4A6080", fontSize: 13, margin: "0 0 14px", lineHeight: 1.5, flex: 1 }}>{item.desc}</p>
                <div style={{ background: "#F5F7FA", borderRadius: 10, padding: "10px 14px", marginBottom: 16, border: "1px solid #EEF0F5" }}>
                  {item.specs.slice(0, 3).map(s => (
                    <div key={s} style={{ fontSize: 13, color: "#4A6080", display: "flex", gap: 8, padding: "3px 0" }}>
                      <span style={{ color: "#F5B800", fontWeight: 900 }}>✓</span> {s}
                    </div>
                  ))}
                </div>
                <a href={getWhatsAppQuoteUrl(item.nombre, "arriendo")} target="_blank" rel="noopener noreferrer" className="btn-dark">Consultar disponibilidad</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
