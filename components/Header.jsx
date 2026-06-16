"use client";
import Logo from "./Logo";

export default function Header({ seccion, busqueda, setBusqueda, navItems, irSeccion }) {
  return (
    <>
      <div style={{ background: "#F5B800", color: "#0B1829", fontSize: 12, fontWeight: 700 }}>
        <div className="page-wrap" style={{ padding: "7px 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
          <span>🚚 Retiro en tienda y despacho a domicilio · Puerto Varas</span>
          <span className="hide-mobile">📞 +56 9 XXXX XXXX</span>
        </div>
      </div>

      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "#0B1829", borderBottom: "1px solid #1A3F6F", boxShadow: "0 2px 16px rgba(0,0,0,.3)" }}>
        <div className="page-wrap" style={{ padding: "12px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <button onClick={() => irSeccion("inicio")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 12 }}>
            <Logo size={60} />
            <div style={{ textAlign: "left" }}>
              <p style={{ color: "#fff", fontWeight: 900, fontSize: 16, margin: 0, letterSpacing: "0.02em", lineHeight: 1.1 }}>
                FERRETERÍA <span style={{ color: "#F5B800" }}>CORDILLERA</span>
              </p>
              <p style={{ color: "#7FA4C8", fontSize: 11, margin: "3px 0 0" }}>Ferretería · Puerto Varas</p>
            </div>
          </button>

          <div style={{ flex: 1, minWidth: 180, display: "flex", maxWidth: 460 }}>
            <input
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              style={{ width: "100%", padding: "10px 16px", background: "#102844", border: "1px solid #1A3F6F", borderRight: "none", borderRadius: "9px 0 0 9px", color: "#fff", fontSize: 14, outline: "none" }}
              placeholder="Buscar productos..."
            />
            <button style={{ background: "#F5B800", color: "#0B1829", border: "none", padding: "10px 18px", borderRadius: "0 9px 9px 0", fontWeight: 900, fontSize: 13, cursor: "pointer" }}>
              Buscar
            </button>
          </div>

          <div style={{ marginLeft: "auto" }} />
        </div>

        <nav className="nav-scroll" style={{ borderTop: "1px solid #1A3F6F" }}>
          <div className="page-wrap" style={{ padding: "5px 24px", display: "flex", gap: 2 }}>
            {navItems.map(({ k, label, data }) => (
              <button key={k} className={`nav-btn${seccion === k ? " active" : ""}`}
                onClick={() => irSeccion(k, data || null)}>
                {label}
              </button>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
