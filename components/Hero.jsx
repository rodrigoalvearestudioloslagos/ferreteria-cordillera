export default function Hero({ irSeccion, setFamActiva, electrico, potencia, heroImg }) {
  return (
    <section style={{ background: "#0B1829", position: "relative", overflow: "hidden", minHeight: 640 }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: .22 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg,#0B1829 48%,rgba(16,40,68,.5) 100%)" }} />
      <div className="page-wrap" style={{ position: "relative", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="grid-hero">
          <div>
            <span style={{ display: "inline-block", background: "#F5B800", color: "#0B1829", fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 99, marginBottom: 20 }}>
              Tu ferretería de confianza · Puerto Varas
            </span>
            <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(34px,4.5vw,58px)", lineHeight: 1.1, margin: "0 0 20px" }}>
              Todo lo que<br />necesitas para<br /><span style={{ color: "#F5B800" }}>tu proyecto</span>
            </h1>
            <p style={{ color: "#7FA4C8", fontSize: "clamp(14px,1.5vw,17px)", lineHeight: 1.7, maxWidth: 440, margin: "0 0 36px" }}>
              Catálogo completo con herramientas, materiales, pinturas, construcción y equipos en arriendo. Todo en un solo lugar.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => irSeccion("electrico", electrico)}>Ver Catálogo Eléctrico</button>
              <button className="btn-outline-white" onClick={() => irSeccion("potencia", potencia)}>Potencia y Control</button>
            </div>
          </div>
          <div className="grid-hero-cards">
            {electrico.slice(0, 4).map(f => (
              <button key={f.id} className="card-dark" style={{ textAlign: "left", padding: 0, width: "100%", cursor: "pointer" }}
                onClick={() => { irSeccion("electrico", electrico); setFamActiva(f.id); }}>
                <div style={{ height: 140, overflow: "hidden", opacity: .8 }}>
                  <img src={f.img} alt={f.nombre} className="img-cover"
                    onError={e => e.target.style.display = "none"} />
                </div>
                <div style={{ padding: "12px 16px 16px" }}>
                  <p style={{ color: "#fff", fontWeight: 800, fontSize: 14, margin: 0, lineHeight: 1.3 }}>{f.nombre}</p>
                  <p style={{ color: "#7FA4C8", fontSize: 12, margin: "4px 0 0" }}>{f.subcats.length} categorías →</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
