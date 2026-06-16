import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";

export default function ResultadosBusqueda({ query, resultados, onNavigate }) {
  const total = resultados.reduce((acc, g) => acc + g.productos.length, 0);

  return (
    <div style={{ background: "#F5F7FA", minHeight: "100vh", padding: "36px 0 60px" }}>
      <div className="page-wrap">
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(20px,3vw,28px)", margin: "0 0 6px" }}>
            Resultados para &ldquo;{query}&rdquo;
          </h2>
          <p style={{ color: "#4A6080", fontSize: 14, margin: 0 }}>
            {total} producto{total !== 1 ? "s" : ""} encontrado{total !== 1 ? "s" : ""}
          </p>
        </div>

        {total === 0 && (
          <p style={{ color: "#4A6080", textAlign: "center", marginTop: 60, fontSize: 16 }}>
            No encontramos productos para &ldquo;{query}&rdquo;.
          </p>
        )}

        {resultados.map(grupo => (
          <div key={grupo.seccion.id} style={{ marginBottom: 48 }}>
            <h3 style={{ color: "#1A3F6F", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20, borderBottom: "2px solid #DDE3EC", paddingBottom: 10 }}>
              {grupo.seccion.nombre} &middot; {grupo.productos.length} resultado{grupo.productos.length !== 1 ? "s" : ""}
            </h3>
            <div className="grid-productos">
              {grupo.productos.map((p, i) => (
                <div key={i} className="card">
                  <div className="img-box-prod" style={{ cursor: "pointer" }}
                    onClick={() => onNavigate({ ...p._nav, producto: p })}>
                    <img src={p.img} alt={p.nombre} className="img-cover"
                      onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                  </div>
                  <div style={{ padding: "16px 16px 18px" }}>
                    {p.marca && <span className="marca-tag">{p.marca}</span>}
                    <h3 style={{ color: "#0B1829", fontWeight: 800, fontSize: 15, margin: "0 0 10px", lineHeight: 1.4, cursor: "pointer" }}
                      onClick={() => onNavigate({ ...p._nav, producto: p })}>
                      {p.nombre}
                    </h3>
                    {p.precio && <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 22, margin: "0 0 14px" }}>${p.precio.toLocaleString("es-CL")}</p>}
                    <div style={{ display: "flex", gap: 8 }}>
                      <button className="btn-outline-dark" style={{ flex: 1, fontSize: 13 }}
                        onClick={() => onNavigate({ ...p._nav, producto: p })}>
                        Ver detalle
                      </button>
                      <a href={getWhatsAppQuoteUrl(p.nombre, "producto", { marca: p.marca, sku: p.sku })}
                        target="_blank" rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ flex: 1, fontSize: 13, padding: "12px 8px", textAlign: "center" }}>
                        Cotizar por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
