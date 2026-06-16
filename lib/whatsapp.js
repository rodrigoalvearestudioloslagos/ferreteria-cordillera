// Número en formato 569XXXXXXXXX — definir en .env.local y en Vercel > Environment Variables
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? null;

// "+56 9 XXXX XXXX" derivado del mismo número ("56953618768" → "+56 9 5361 8768")
export const PHONE_DISPLAY = (() => {
  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER.length < 11) return null;
  const local = WHATSAPP_NUMBER.slice(2); // quita "56"
  return `+56 ${local[0]} ${local.slice(1, 5)} ${local.slice(5)}`;
})();

function buildUrl(mensaje) {
  if (!WHATSAPP_NUMBER) {
    console.warn("[whatsapp] NEXT_PUBLIC_WHATSAPP_NUMBER no está definida. Define la variable en .env.local y en Vercel.");
    return "#";
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

export const getWhatsAppQuoteUrl = (nombre, tipo = "producto", { marca, sku } = {}) => {
  let mensaje;
  if (tipo === "arriendo") {
    mensaje = `Hola, me gustaría consultar disponibilidad para el arriendo de: ${nombre}.`;
  } else {
    const lineas = [
      "Hola, me gustaría cotizar este producto:",
      "",
      `Producto: ${nombre}`,
    ];
    if (marca) lineas.push(`Marca: ${marca}`);
    if (sku)   lineas.push(`Código: ${sku}`);
    lineas.push("", "Consulta enviada desde el catálogo web de Ferretería Cordillera.");
    mensaje = lineas.join("\n");
  }
  return buildUrl(mensaje);
};

export const getWhatsAppGenericUrl = () =>
  buildUrl("Hola, me gustaría recibir más información sobre sus productos y servicios.");
