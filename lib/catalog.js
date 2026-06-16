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
import { familias, subfamilias } from "@/data/taxonomia";
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
