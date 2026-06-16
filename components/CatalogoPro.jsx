"use client";
import { useState } from "react";
import { getWhatsAppQuoteUrl } from "@/lib/whatsapp";

export default function CatalogoPro({
  seccion, catData,
  famActiva, setFamActiva,
  subcatActiva, setSubcatActiva,
  prodDetalle, setProdDetalle,
}) {
  const titulo = seccion === "electrico" ? "Catálogo Eléctrico" : "Potencia y Control";
  const [marcaFiltro, setMarcaFiltro] = useState(null);
  const [railOpen,    setRailOpen]    = useState(false);

  const fam = famActiva ? catData?.find(f => f.id === famActiva) : null;
  const sub = subcatActiva && fam ? fam.subcats.find(s => s.nombre === subcatActiva) : null;

  const selFamilia = (famId) => {
    setFamActiva(famId); setSubcatActiva(null); setMarcaFiltro(null); setProdDetalle(null);
  };
  const selSubcat = (sfNombre) => {
    setSubcatActiva(sfNombre); setMarcaFiltro(null); setProdDetalle(null); setRailOpen(false);
  };

  const marcasDisponibles = sub
    ? [...new Set(sub.productos.map(p => p.marca).filter(Boolean))].sort()
    : [];
  const productosFiltrados = sub
    ? (marcaFiltro ? sub.productos.filter(p => p.marca === marcaFiltro) : sub.productos)
    : [];

  return (
    <div style={{ background: "#F5F7FA", minHeight: "100vh", paddingBottom: 60 }}>

      {/* Cabecera con breadcrumb */}
      <div style={{ background: "#0B1829", padding: "20px 0 0" }}>
        <div className="page-wrap">
          <div className="breadcrumb">
            <button className="bc-btn"
              onClick={() => { setFamActiva(null); setSubcatActiva(null); setProdDetalle(null); setMarcaFiltro(null); }}>
              {titulo}
            </button>

            {fam && (
              <>
                <span className="bc-sep">›</span>
                {(sub || prodDetalle)
                  ? <button className="bc-btn" onClick={() => { setSubcatActiva(null); setProdDetalle(null); setMarcaFiltro(null); }}>{fam.nombre}</button>
                  : <span className="bc-current">{fam.nombre}</span>}
              </>
            )}

            {sub && (
              <>
                <span className="bc-sep">›</span>
                {prodDetalle
                  ? <button className="bc-btn" onClick={() => setProdDetalle(null)}>{sub.nombre}</button>
                  : <span className="bc-current">{sub.nombre}</span>}
              </>
            )}

            {prodDetalle && (
              <><span className="bc-sep">›</span><span className="bc-current">{prodDetalle.nombre}</span></>
            )}
          </div>
        </div>
      </div>

      <div className="page-wrap" style={{ paddingTop: 36 }}>

        {/* Nivel 0 — Grid de familias (sin rail) */}
        {!fam && (
          <>
            <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(22px,3vw,30px)", marginBottom: 8 }}>{titulo}</h2>
            <p style={{ color: "#4A6080", marginBottom: 32, fontSize: 15 }}>Selecciona la sección que necesitas</p>
            <div className="grid-familias">
              {catData?.map(f => (
                <button key={f.id} className="card"
                  style={{ textAlign: "left", padding: 0, width: "100%", display: "flex", flexDirection: "column" }}
                  onClick={() => selFamilia(f.id)}>
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

        {/* Niveles 1-3 — Layout con rail lateral */}
        {fam && (
          <div className="layout-pro">

            {/* Rail de categorías */}
            <aside className="pro-rail">
              <button className="rail-toggle" onClick={() => setRailOpen(o => !o)}>
                <span>Categorías</span>
                <span style={{ fontSize: 10 }}>{railOpen ? "▲" : "▼"}</span>
              </button>
              <div className={railOpen ? "" : "rail-body-hidden"}>
                <p className="pro-rail-titulo">{titulo}</p>
                {catData?.map(f2 => (
                  <div key={f2.id}>
                    <button
                      className={`pro-rail-fam${famActiva === f2.id ? " active" : ""}`}
                      onClick={() => selFamilia(f2.id)}>
                      {f2.nombre}
                    </button>
                    {famActiva === f2.id && f2.subcats.map(sf => (
                      <button
                        key={sf.nombre}
                        className={`pro-rail-sf${subcatActiva === sf.nombre ? " active" : ""}`}
                        onClick={() => selSubcat(sf.nombre)}>
                        {sf.nombre}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </aside>

            {/* Área de contenido */}
            <div className="pro-rail-content">

              {/* Nivel 1 — Subcategorías */}
              {!sub && !prodDetalle && (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
                    <div style={{ width: 56, height: 56, borderRadius: 10, overflow: "hidden", flexShrink: 0 }}>
                      <img src={fam.img} alt={fam.nombre} className="img-cover" onError={e => e.target.style.display = "none"} />
                    </div>
                    <div>
                      <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(18px,3vw,26px)", margin: 0 }}>{fam.nombre}</h2>
                      <p style={{ color: "#4A6080", margin: "4px 0 0", fontSize: 13 }}>{fam.subcats.length} categorías disponibles</p>
                    </div>
                  </div>
                  <div className="grid-subcats">
                    {fam.subcats.map(sc => (
                      <button key={sc.nombre} className="card"
                        style={{ textAlign: "left", padding: 0, width: "100%", display: "flex", flexDirection: "column" }}
                        onClick={() => selSubcat(sc.nombre)}>
                        <div className="img-box-subcat">
                          <img src={sc.img} alt={sc.nombre} className="img-cover"
                            onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                        </div>
                        <div style={{ padding: "14px 16px 16px", flex: 1 }}>
                          <h3 style={{ color: "#0B1829", fontWeight: 800, fontSize: 14, margin: "0 0 4px" }}>{sc.nombre}</h3>
                          <p style={{ color: "#4A6080", fontSize: 13, margin: 0 }}>{sc.productos.length} productos</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Nivel 2 — Productos con filtro por marca */}
              {sub && !prodDetalle && (
                <>
                  <div style={{ marginBottom: 20 }}>
                    <h2 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(18px,3vw,24px)", margin: "0 0 4px" }}>{sub.nombre}</h2>
                    <p style={{ color: "#4A6080", fontSize: 13, margin: 0 }}>{sub.productos.length} productos</p>
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
                    {productosFiltrados.map((p, i) => (
                      <div key={i} className="card">
                        <div className="img-box-prod" onClick={() => setProdDetalle(p)}>
                          <img src={p.img} alt={p.nombre} className="img-cover"
                            onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                        </div>
                        <div style={{ padding: "16px 16px 18px" }}>
                          {p.marca && <span className="marca-tag">{p.marca}</span>}
                          <h3 style={{ color: "#0B1829", fontWeight: 800, fontSize: 14, margin: "0 0 10px", lineHeight: 1.4, cursor: "pointer" }}
                            onClick={() => setProdDetalle(p)}>{p.nombre}</h3>
                          {p.precio && <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 20, margin: "0 0 14px" }}>${p.precio.toLocaleString("es-CL")}</p>}
                          <div style={{ display: "flex", gap: 8 }}>
                            <button className="btn-outline-dark" style={{ flex: 1, fontSize: 11, padding: "10px 6px" }} onClick={() => setProdDetalle(p)}>Ver detalle</button>
                            <a href={getWhatsAppQuoteUrl(p.nombre, "producto", { marca: p.marca, sku: p.sku })}
                              target="_blank" rel="noopener noreferrer"
                              className="btn-primary" style={{ flex: 1, fontSize: 11, padding: "10px 6px" }}>
                              Cotizar por WhatsApp
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                    {productosFiltrados.length === 0 && marcaFiltro && (
                      <p style={{ color: "#4A6080", fontSize: 14, gridColumn: "1/-1", paddingTop: 8 }}>
                        Sin productos para la marca seleccionada.
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Nivel 3 — Ficha técnica detalle */}
              {prodDetalle && (
                <div className="grid-detalle">
                  <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #DDE3EC" }}>
                    <img src={prodDetalle.img} alt={prodDetalle.nombre} className="img-cover" style={{ height: 340 }}
                      onError={e => { e.target.parentNode.style.background = "#E8EEF5"; e.target.style.display = "none"; }} />
                  </div>
                  <div>
                    {/* Marca + SKU */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                      {prodDetalle.marca && <span className="marca-tag" style={{ margin: 0 }}>{prodDetalle.marca}</span>}
                      {prodDetalle.sku   && <span className="prod-codigo">SKU {prodDetalle.sku}</span>}
                    </div>

                    <h1 style={{ color: "#0B1829", fontWeight: 900, fontSize: "clamp(20px,3vw,30px)", margin: "0 0 12px", lineHeight: 1.2 }}>
                      {prodDetalle.nombre}
                    </h1>

                    {prodDetalle.precio && (
                      <p style={{ color: "#0B1829", fontWeight: 900, fontSize: 32, margin: "0 0 24px" }}>
                        ${prodDetalle.precio.toLocaleString("es-CL")}
                      </p>
                    )}

                    {(prodDetalle.specs || []).length > 0 && (
                      <div style={{ background: "#F5F7FA", borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
                        <p style={{ color: "#1A3F6F", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                          Especificaciones técnicas
                        </p>
                        {(prodDetalle.specs || []).map((s, i) => (
                          <div key={s} className="spec-row">
                            <span className="spec-num">{i + 1}</span>
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <a href={getWhatsAppQuoteUrl(prodDetalle.nombre, "producto", { marca: prodDetalle.marca, sku: prodDetalle.sku })}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-primary" style={{ display: "block", textAlign: "center" }}>
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
