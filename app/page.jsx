"use client";
import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PorQue from "@/components/PorQue";
import BannerMedio from "@/components/BannerMedio";
import CatalogoPro from "@/components/CatalogoPro";
import CatalogoGeneral from "@/components/CatalogoGeneral";
import SeccionArriendos from "@/components/SeccionArriendos";
import SeccionContacto from "@/components/SeccionContacto";
import I from "@/data/images";
import electrico from "@/data/especialidadElectrica";
import potencia from "@/data/potenciaControl";
import general from "@/data/catalogoGeneral";
import arriendos from "@/data/arriendos";

export default function Home() {
  const [busqueda,      setBusqueda]      = useState("");
  const [seccion,       setSeccion]       = useState("inicio");
  const [catData,       setCatData]       = useState(null);
  const [famActiva,     setFamActiva]     = useState(null);
  const [subcatActiva,  setSubcatActiva]  = useState(null);
  const [prodDetalle,   setProdDetalle]   = useState(null);
  const [catGenId,      setCatGenId]      = useState(null);
  const [prodGen,       setProdGen]       = useState(null);

  const irSeccion = (s, data = null) => {
    setSeccion(s); setCatData(data);
    setFamActiva(null); setSubcatActiva(null); setProdDetalle(null);
    setCatGenId(null); setProdGen(null); setBusqueda("");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 60);
  };

  const navItems = [
    { k: "inicio",    label: "Inicio" },
    { k: "electrico", label: "⚡ Catálogo Eléctrico",  data: electrico },
    { k: "potencia",  label: "⚙️ Potencia y Control",  data: potencia },
    { k: "general",   label: "Catálogo General" },
    { k: "arriendos", label: "Arriendos" },
    { k: "contacto",  label: "Contacto" },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#F5F7FA" }}>
      <Header
        seccion={seccion}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        navItems={navItems}
        irSeccion={irSeccion}
      />

      {seccion === "inicio" && (
        <>
          <Hero
            irSeccion={irSeccion}
            setFamActiva={setFamActiva}
            electrico={electrico}
            potencia={potencia}
            heroImg={I.hero}
          />
          <PorQue />
          <BannerMedio irSeccion={irSeccion} sectionBgImg={I.sectionBg} />
          <SeccionArriendos arriendos={arriendos} />
          <SeccionContacto />
        </>
      )}

      {(seccion === "electrico" || seccion === "potencia") && (
        <CatalogoPro
          seccion={seccion}
          catData={catData}
          famActiva={famActiva}
          setFamActiva={setFamActiva}
          subcatActiva={subcatActiva}
          setSubcatActiva={setSubcatActiva}
          prodDetalle={prodDetalle}
          setProdDetalle={setProdDetalle}
        />
      )}

      {seccion === "general" && (
        <CatalogoGeneral
          general={general}
          busqueda={busqueda}
          catGenId={catGenId}
          setCatGenId={setCatGenId}
          prodGen={prodGen}
          setProdGen={setProdGen}
        />
      )}

      {seccion === "arriendos" && <SeccionArriendos arriendos={arriendos} />}
      {seccion === "contacto"  && <SeccionContacto />}

      <footer style={{ background: "#0B1829", borderTop: "1px solid #1A3F6F", textAlign: "center", color: "#7FA4C8", padding: "28px 16px", fontSize: 13 }}>
        © 2026 Ferretería Cordillera — Ferretería profesional · Puerto Varas
      </footer>

      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
        style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999, display: "flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", padding: "13px 20px", borderRadius: 99, textDecoration: "none", fontWeight: 800, fontSize: 14, boxShadow: "0 4px 20px rgba(37,211,102,.4)" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hide-mobile">¿Necesitas ayuda?</span>
      </a>
    </main>
  );
}
