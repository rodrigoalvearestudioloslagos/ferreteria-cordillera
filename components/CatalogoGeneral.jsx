import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";

function ProdCard({ p, onClick }) {
  return (
    <div className="card">
      <div className="img-box-prod" onClick={onClick}>
        <img src={p.img} alt={p.nombre} className="img-cover"
          onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
      </div>
      <div style={{ padding: "16px 16px 18px" }}>
        {p.marca && <span className="marca-tag">{p.marca}</span>}
        <h3 style={{ color: "#0B1829", fontWeight: 800, fontSize: 15, margin: "0 0 8px", lineHeight: 1.4, cursor: "pointer" }} onClick={onClick}>{p.nombre}</h3>
        <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 22, margin: "0 0 14px" }}>${p.precio.toLocaleString("es-CL")}</p>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn-outline-dark" style={{ flex: 1, fontSize: 13 }} onClick={onClick}>Ver detalle</button>
          <a href={getWhatsAppQuoteUrl(p.nombre, "producto", { marca: p.marca, sku: p.sku })} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, fontSize: 13, padding: "12px 8px", textAlign: "center" }}>Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

export default function CatalogoGeneral({ general, catGenId, setCatGenId, prodGen, setProdGen }) {
  const cat = catGenId ? general.find(c => c.id === catGenId) : null;

  return (
    <div style={{ background: "#F5F7FA", minHeight: "100vh", paddingBottom: 60 }}>

      {/* Breadcrumb — visible cuando se está dentro de una familia o en detalle */}
      {(cat || prodGen) && (
        <div style={{ background: "#0B1829", padding: "20px 0 0" }}>
          <div className="page-wrap">
            <div className="breadcrumb">
              <button className="bc-btn" onClick={() => { setCatGenId(null); setProdGen(null); }}>Catálogo General</button>
              {cat && !prodGen && (
                <><span className="bc-sep">›</span><span className="bc-current">{cat.nombre}</span></>
              )}
              {cat && prodGen && (
                <><span className="bc-sep">›</span>
                <button className="bc-btn" onClick={() => setProdGen(null)}>{cat.nombre}</button></>
              )}
              {prodGen && (
                <><span className="bc-sep">›</span><span className="bc-current">{prodGen.nombre}</span></>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="page-wrap" style={{ paddingTop: 36 }}>

        {/* Detalle producto */}
        {prodGen && (
          <div className="grid-detalle">
            <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #DDE3EC" }}>
              <img src={prodGen.img} alt={prodGen.nombre} className="img-cover" style={{ height: 320 }}
                onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
            </div>
            <div>
              <span className="marca-tag">{prodGen.marca}</span>
              <h1 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,32px)", margin: "10px 0 8px" }}>{prodGen.nombre}</h1>
              <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 34, margin: "0 0 24px" }}>${prodGen.precio.toLocaleString("es-CL")}</p>
              <div style={{ background: "#F5F7FA", borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
                <p style={{ color: "#4A6080", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Características</p>
                {(prodGen.specs || []).map(s => <div key={s} className="spec-item"><div className="spec-dot" />{s}</div>)}
              </div>
              <a href={getWhatsAppQuoteUrl(prodGen.nombre, "producto", { marca: prodGen.marca, sku: prodGen.sku })} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "block", width: "100%", textAlign: "center" }}>Cotizar por WhatsApp</a>
            </div>
          </div>
        )}

        {/* Productos de la familia */}
        {cat && !prodGen && (
          <>
            <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(20px,3vw,28px)", marginBottom: 28 }}>{cat.nombre}</h2>
            <div className="grid-productos">
              {cat.productos.map((p, i) => <ProdCard key={i} p={p} onClick={() => setProdGen(p)} />)}
            </div>
          </>
        )}

        {/* Grid de familias */}
        {!cat && !prodGen && (
          <>
            <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,30px)", marginBottom: 8 }}>Catálogo General</h2>
            <p style={{ color: "#4A6080", marginBottom: 32, fontSize: 15 }}>Herramientas, pinturas, seguridad, construcción y más</p>
            <div className="grid-general">
              {general.map(c => (
                <button key={c.id} className="card" style={{ textAlign: "left", padding: 0, width: "100%", display: "flex", flexDirection: "column" }} onClick={() => setCatGenId(c.id)}>
                  <div className="img-box-general">
                    <img src={c.img} alt={c.nombre} className="img-cover"
                      onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                  </div>
                  <div style={{ padding: "16px 18px 20px", flex: 1 }}>
                    <h3 style={{ color: "#0B1829", fontWeight: 900, fontSize: 17, margin: "0 0 4px" }}>{c.nombre}</h3>
                    <p style={{ color: "#4A6080", fontSize: 13, margin: 0 }}>{c.productos.length} productos</p>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
