import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";

export default function CatalogoPro({
  seccion,
  catData,
  famActiva,
  setFamActiva,
  subcatActiva,
  setSubcatActiva,
  prodDetalle,
  setProdDetalle,
}) {
  const titulo = seccion === "electrico" ? "Catálogo Eléctrico" : "Potencia y Control";
  const fam = famActiva ? catData?.find(f => f.id === famActiva) : null;
  const sub = subcatActiva && fam ? fam.subcats.find(s => s.nombre === subcatActiva) : null;

  return (
    <div style={{ background: "#F5F7FA", minHeight: "100vh", paddingBottom: 60 }}>
      {/* Cabecera azul con breadcrumb */}
      <div style={{ background: "#0B1829", padding: "20px 0 0" }}>
        <div className="page-wrap">
          <div className="breadcrumb">
            <button className="bc-btn" onClick={() => { setFamActiva(null); setSubcatActiva(null); setProdDetalle(null); }}>{titulo}</button>
            {fam && <><span className="bc-sep">›</span>
              <button className="bc-btn" onClick={() => { setSubcatActiva(null); setProdDetalle(null); }}>{fam.nombre}</button></>}
            {sub && <><span className="bc-sep">›</span>
              <button className="bc-btn" onClick={() => setProdDetalle(null)}>{sub.nombre}</button></>}
            {prodDetalle && <><span className="bc-sep">›</span>
              <span className="bc-current">{prodDetalle.nombre}</span></>}
          </div>
        </div>
      </div>

      <div className="page-wrap" style={{ paddingTop: 36 }}>

        {/* Detalle producto */}
        {prodDetalle && (
          <div className="grid-detalle">
            <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #DDE3EC" }}>
              <img src={prodDetalle.img} alt={prodDetalle.nombre} className="img-cover" style={{ height: 320 }}
                onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
            </div>
            <div>
              <span className="marca-tag">{prodDetalle.marca}</span>
              <h1 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,32px)", margin: "10px 0 8px", lineHeight: 1.2 }}>{prodDetalle.nombre}</h1>
              {prodDetalle.precio && <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 34, margin: "0 0 24px" }}>${prodDetalle.precio.toLocaleString("es-CL")}</p>}
              <div style={{ background: "#F5F7FA", borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
                <p style={{ color: "#4A6080", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Características</p>
                {(prodDetalle.specs || []).map(s => (
                  <div key={s} className="spec-item"><div className="spec-dot" />{s}</div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={getWhatsAppQuoteUrl(prodDetalle.nombre, "producto", { marca: prodDetalle.marca, sku: prodDetalle.sku })} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1 }}>Cotizar por WhatsApp</a>
              </div>
            </div>
          </div>
        )}

        {/* Vista familias */}
        {!fam && !prodDetalle && (
          <>
            <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,30px)", marginBottom: 8 }}>{titulo}</h2>
            <p style={{ color: "#4A6080", marginBottom: 32, fontSize: 15 }}>Selecciona la sección que necesitas</p>
            <div className="grid-familias">
              {catData.map(f => (
                <button key={f.id} className="card" style={{ textAlign: "left", padding: 0, width: "100%", display: "flex", flexDirection: "column" }} onClick={() => setFamActiva(f.id)}>
                  <div className="img-box-familia">
                    <img src={f.img} alt={f.nombre} className="img-cover"
                      onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                    <div className="overlay-bottom" />
                    <span className="overlay-label">{f.nombre}</span>
                  </div>
                  <div style={{ padding: "14px 16px 18px", flex: 1 }}>
                    {f.subcats.map(s => (
                      <div key={s.nombre} style={{ fontSize: 13, color: "#4A6080", padding: "5px 0", borderBottom: "1px solid #F5F7FA" }}>
                        <span style={{ color: "#F5B800", fontWeight: 900 }}>›</span> {s.nombre}
                      </div>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Vista subcategorías */}
        {fam && !sub && !prodDetalle && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
              <div style={{ width: 64, height: 64, borderRadius: 12, overflow: "hidden", flexShrink: 0 }}>
                <img src={fam.img} alt={fam.nombre} className="img-cover"
                  onError={e => e.target.style.display = "none"} />
              </div>
              <div>
                <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(20px,3vw,28px)", margin: 0 }}>{fam.nombre}</h2>
                <p style={{ color: "#4A6080", margin: "4px 0 0", fontSize: 14 }}>{fam.subcats.length} categorías disponibles</p>
              </div>
            </div>
            <div className="grid-subcats">
              {fam.subcats.map(sc => (
                <button key={sc.nombre} className="card" style={{ textAlign: "left", padding: 0, width: "100%", display: "flex", flexDirection: "column" }} onClick={() => setSubcatActiva(sc.nombre)}>
                  <div className="img-box-subcat">
                    <img src={sc.img} alt={sc.nombre} className="img-cover"
                      onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                  </div>
                  <div style={{ padding: "14px 16px 16px", flex: 1 }}>
                    <h3 style={{ color: "#0B1829", fontWeight: 800, fontSize: 15, margin: "0 0 6px" }}>{sc.nombre}</h3>
                    <p style={{ color: "#4A6080", fontSize: 13, margin: 0 }}>{sc.productos.length} productos</p>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Vista productos */}
        {sub && !prodDetalle && (
          <>
            <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(20px,3vw,26px)", marginBottom: 8 }}>{sub.nombre}</h2>
            <p style={{ color: "#4A6080", marginBottom: 32, fontSize: 14 }}>{sub.productos.length} productos</p>
            <div className="grid-productos">
              {sub.productos.map((p, i) => (
                <div key={i} className="card">
                  <div className="img-box-prod" onClick={() => setProdDetalle(p)}>
                    <img src={p.img} alt={p.nombre} className="img-cover"
                      onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                  </div>
                  <div style={{ padding: "16px 16px 18px" }}>
                    <span className="marca-tag">{p.marca}</span>
                    <h3 style={{ color: "#0B1829", fontWeight: 800, fontSize: 15, margin: "0 0 10px", lineHeight: 1.4, cursor: "pointer" }} onClick={() => setProdDetalle(p)}>{p.nombre}</h3>
                    {p.precio && <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 22, margin: "0 0 14px" }}>${p.precio.toLocaleString("es-CL")}</p>}
                    <div style={{ display: "flex", gap: 8 }}>
                      <button className="btn-outline-dark" style={{ flex: 1, fontSize: 13 }} onClick={() => setProdDetalle(p)}>Ver detalle</button>
                      <a href={getWhatsAppQuoteUrl(p.nombre, "producto", { marca: p.marca, sku: p.sku })} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, fontSize: 13, padding: "12px 8px" }}>Cotizar por WhatsApp</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
