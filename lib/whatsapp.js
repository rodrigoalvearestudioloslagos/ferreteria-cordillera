// ⚠️  ANTES DE PUBLICAR: reemplaza este valor con el número real en formato 569XXXXXXXXX (sin espacios ni +)
export const WHATSAPP_NUMBER = "569XXXXXXXX";

export const getWhatsAppQuoteUrl = (nombre, tipo = "producto", { marca, sku } = {}) => {
  let ref = nombre;
  if (marca) ref = `${marca} ${ref}`;
  if (sku)   ref += ` (código: ${sku})`;
  const mensaje = tipo === "arriendo"
    ? `Hola, quiero consultar disponibilidad del equipo: ${ref}. ¿Está disponible?`
    : `Hola, quiero cotizar: ${ref}. ¿Me pueden dar precio y disponibilidad?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
};
