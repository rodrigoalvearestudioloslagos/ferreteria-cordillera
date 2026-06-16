"use client";
import { useState } from "react";
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
        {p.precio != null && <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 22, margin: "0 0 14px" }}>${p.precio.toLocaleString("es-CL")}</p>}
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn-outline-dark" style={{ flex: 1, fontSize: 13 }} onClick={onClick}>Ver detalle</button>
          <a href={getWhatsAppQuoteUrl(p.nombre, "producto", { marca: p.marca, sku: p.sku })} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, fontSize: 13, padding: "12px 8px", textAlign: "center" }}>Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

/**
 * Subcomponente que encapsula filtros y orden de una categoría.
 * Al cambiar de categoría, el padre lo monta con key={cat.id}, lo que reinicia
 * automáticamente marcaFiltro y orden sin necesidad de useEffect.
 */
function CatProductos({ cat, setProdGen }) {
  const [marcaFiltro, setMarcaFiltro] = useState(null);
  const [orden,       setOrden]       = useState("default");

  const marcasDisponibles = [...new Set(cat.productos.map(p => p.marca).filter(Boolean))].sort();

  const productosFiltrados = cat.productos
    .filter(p => !marcaFiltro || p.marca === marcaFiltro)
    .slice()
    .sort((a, b) => {
      if (orden === "nombre")       return a.nombre.localeCompare(b.nombre, "es");
      if (orden === "precio-asc")   return (a.precio ?? Infinity) - (b.precio ?? Infinity);
      if (orden === "precio-desc")  return (b.precio ?? 0) - (a.precio ?? 0);
      return 0;
    });

  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
        <div>
          <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(20px,3vw,28px)", margin: "0 0 4px" }}>{cat.nombre}</h2>
          <p style={{ color: "#4A6080", fontSize: 13, margin: 0 }}>
            {productosFiltrados.length}{marcaFiltro ? ` de ${cat.productos.length}` : ""} productos
          </p>
        </div>
        <select value={orden} onChange={e => setOrden(e.target.value)} className="orden-select">
          <option value="default">Ordenar por</option>
          <option value="nombre">Nombre A–Z</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
        </select>
      </div>

      {marcasDisponibles.length > 1 && (
        <div className="brand-chips">
          <button className={`brand-chip${!marcaFiltro ? " active" : ""}`} onClick={() => setMarcaFiltro(null)}>Todas</button>
          {marcasDisponibles.map(m => (
            <button key={m} className={`brand-chip${marcaFiltro === m ? " active" : ""}`} onClick={() => setMarcaFiltro(m)}>{m}</button>
          ))}
        </div>
      )}

      <div className="grid-productos">
        {productosFiltrados.map((p, i) => <ProdCard key={p.nombre + i} p={p} onClick={() => setProdGen(p)} />)}
      </div>

      {productosFiltrados.length === 0 && marcaFiltro && (
        <p style={{ color: "#4A6080", fontSize: 14, marginTop: 24 }}>Sin productos para la marca seleccionada.</p>
      )}
    </>
  );
}

export default function CatalogoGeneral({ general, catGenId, setCatGenId, prodGen, setProdGen }) {
  const cat = catGenId ? general.find(c => c.id === catGenId) : null;

  const resetNav = () => { setCatGenId(null); setProdGen(null); };

  return (
    <div style={{ background: "#F5F7FA", minHeight: "100vh", paddingBottom: 60 }}>

      {/* Breadcrumb */}
      {(cat || prodGen) && (
        <div style={{ background: "#0B1829", padding: "20px 0 0" }}>
          <div className="page-wrap">
            <div className="breadcrumb">
              <button className="bc-btn" onClick={resetNav}>Catálogo General</button>
              {cat && !prodGen && <><span className="bc-sep">›</span><span className="bc-current">{cat.nombre}</span></>}
              {cat && prodGen && (
                <><span className="bc-sep">›</span>
                <button className="bc-btn" onClick={() => setProdGen(null)}>{cat.nombre}</button></>
              )}
              {prodGen && <><span className="bc-sep">›</span><span className="bc-current">{prodGen.nombre}</span></>}
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
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                {prodGen.marca && <span className="marca-tag" style={{ margin: 0 }}>{prodGen.marca}</span>}
                {prodGen.sku   && <span className="prod-codigo">SKU {prodGen.sku}</span>}
              </div>
              <h1 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,32px)", margin: "0 0 10px", lineHeight: 1.2 }}>{prodGen.nombre}</h1>
              {prodGen.precio != null && (
                <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 34, margin: "0 0 24px" }}>${prodGen.precio.toLocaleString("es-CL")}</p>
              )}
              {(prodGen.specs || []).length > 0 && (
                <div style={{ background: "#F5F7FA", borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
                  <p style={{ color: "#1A3F6F", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Características</p>
                  {(prodGen.specs || []).map((s, i) => (
                    <div key={s} className="spec-row">
                      <span className="spec-num">{i + 1}</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              )}
              <a href={getWhatsAppQuoteUrl(prodGen.nombre, "producto", { marca: prodGen.marca, sku: prodGen.sku })} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "block", textAlign: "center" }}>Cotizar por WhatsApp</a>
            </div>
          </div>
        )}

        {/* Productos de la categoría — key={cat.id} reinicia marcaFiltro/orden al cambiar de cat */}
        {cat && !prodGen && <CatProductos key={cat.id} cat={cat} setProdGen={setProdGen} />}

        {/* Grid de categorías */}
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
