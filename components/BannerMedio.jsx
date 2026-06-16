export default function BannerMedio({ irSeccion, sectionBgImg }) {
  return (
    <section style={{ background: "#0B1829", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${sectionBgImg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: .22 }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(11,24,41,.68)" }} />
      <div className="page-wrap" style={{ position: "relative", padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(24px,3.5vw,40px)", margin: "0 0 16px", maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
          Tu ferretería de confianza en Puerto Varas
        </h2>
        <p style={{ color: "#7FA4C8", fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 32px" }}>
          Materiales, herramientas y equipos para tus proyectos. Asesoría incluida.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => irSeccion("general")}>Ver Catálogo General</button>
          <button className="btn-outline-white" onClick={() => irSeccion("arriendos")}>Arriendos</button>
        </div>
      </div>
    </section>
  );
}
