
// ⚠️  Define el número en .env.local (local) y en las variables de entorno de Vercel (producción)
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "569XXXXXXXX";

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
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
};

export const getWhatsAppGenericUrl = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, me gustaría recibir más información sobre sus productos y servicios.")}`;

