/**
 * Selectores del catálogo — capa anti-corrupción entre datos y UI.
 *
 * Los componentes importan SOLO desde aquí, nunca desde data/* directamente.
 * Cuando se conecte Supabase/ERP, solo cambia el interior de estas funciones;
 * los componentes no se tocan porque el contrato de forma no cambia.
 *
 * Contrato de vista (lo que la UI espera y no debe cambiar):
 *   getCatalogoPro()   → [{ id, nombre, img, subcats:[{ nombre, img, productos:[{nombre,marca,precio,img,specs}] }] }]
 *   getCatalogoGeneral() → [{ id, nombre, img, productos:[{nombre,marca,precio,img,specs}] }]
 *   getArriendos()     → [{ id, nombre, precio, periodo, img, specs, desc }]
 *
 * Gobernanza de campos al sincronizar con ERP/Supabase:
 *   Curados localmente (NO pisar en sync):  nombre, specs, imagen, marca, taxonomía, destacado, quoteEnabled, showStock
 *   Sincronizables (ERP/Supabase escribe):  stock, availability, lastStockSync → stockSource cambia a "erp"/"supabase"
 *   Configurable por política:             priceReference, sku, barcode
 */
import { secciones, familias, subfamilias } from "@/data/taxonomia";
import productos from "@/data/productos";
import arriendos from "@/data/arriendos";

/** Mapea un producto interno al shape que espera la UI */
function toViewProducto(p) {
  return {
    nombre: p.nombre,
    marca:  p.marca,
    precio: p.priceReference,
    img:    p.imagen,
    specs:  p.specs,
    sku:    p.sku,
  };
}

/**
 * Devuelve el catálogo de una sección "pro" (Especialidad Eléctrica o Potencia y Control)
 * en la forma anidada que consume CatalogoPro.jsx: familias → subcats → productos.
 */
export function getCatalogoPro(seccionId) {
  return familias
    .filter(f => f.seccionId === seccionId && f.activo)
    .sort((a, b) => a.orden - b.orden)
    .map(f => {
      const subcats = subfamilias
        .filter(sf => sf.familiaId === f.id && sf.activo)
        .sort((a, b) => a.orden - b.orden)
        .map(sf => ({
          nombre:    sf.nombre,
          img:       sf.imagen,
          productos: productos
            .filter(p => p.subfamiliaId === sf.id && p.activo)
            .sort((a, b) => a.orden - b.orden)
            .map(toViewProducto),
        }));

      return { id: f.id, nombre: f.nombre, img: f.imagen, subcats };
    });
}

/**
 * Devuelve el Catálogo General en la forma que consume CatalogoGeneral.jsx:
 * familias → productos (sin subfamilia).
 */
export function getCatalogoGeneral() {
  return familias
    .filter(f => f.seccionId === "general" && f.activo)
    .sort((a, b) => a.orden - b.orden)
    .map(f => ({
      id:       f.id,
      nombre:   f.nombre,
      img:      f.imagen,
      productos: productos
        .filter(p => p.familiaId === f.id && p.activo)
        .sort((a, b) => a.orden - b.orden)
        .map(toViewProducto),
    }));
}

/**
 * Búsqueda global sobre todos los productos activos (Eléctrica, Potencia, General).
 * Busca en nombre, marca, specs, familia, subfamilia y sección.
 * Devuelve resultados agrupados por sección, cada producto con _nav para routing.
 */
export function buscarProductos(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();

  const seccionMap   = Object.fromEntries(secciones.map(s  => [s.id,  s]));
  const familiaMap   = Object.fromEntries(familias.map(f   => [f.id,  f]));
  const subfamiliaMap = Object.fromEntries(subfamilias.map(sf => [sf.id, sf]));

  const grouped = {};
  productos
    .filter(p => {
      if (!p.activo) return false;
      const fam = familiaMap[p.familiaId];
      const sf  = subfamiliaMap[p.subfamiliaId] ?? null;
      return (
        p.nombre?.toLowerCase().includes(q) ||
        p.marca?.toLowerCase().includes(q) ||
        (p.specs ?? []).some(s => s.toLowerCase().includes(q)) ||
        fam?.nombre.toLowerCase().includes(q) ||
        sf?.nombre.toLowerCase().includes(q) ||
        seccionMap[p.seccionId]?.nombre.toLowerCase().includes(q)
      );
    })
    .forEach(p => {
      if (!grouped[p.seccionId]) {
        grouped[p.seccionId] = { seccion: seccionMap[p.seccionId], productos: [] };
      }
      const sf = subfamiliaMap[p.subfamiliaId] ?? null;
      grouped[p.seccionId].productos.push({
        ...toViewProducto(p),
        _nav: {
          seccionId:    p.seccionId,
          familiaId:    p.familiaId,
          subcatNombre: sf?.nombre ?? null,
        },
      });
    });

  return Object.values(grouped);
}

/**
 * Devuelve los arriendos en la forma que consume SeccionArriendos.jsx.
 */
export function getArriendos() {
  return arriendos
    .filter(a => a.activo)
    .sort((a, b) => a.orden - b.orden)
    .map(a => ({
      id:      a.id,
      nombre:  a.nombre,
      precio:  a.precio,
      periodo: a.periodo,
      img:     a.imagen,
      specs:   a.specs,
      desc:    a.descripcion,
    }));
}
