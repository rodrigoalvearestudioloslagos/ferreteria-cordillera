export const WHATSAPP_NUMBER = "569XXXXXXXX";

export const getWhatsAppQuoteUrl = (nombre, tipo = "producto") => {
  const mensaje = tipo === "arriendo"
    ? `Hola, quiero consultar por el arriendo de: ${nombre}. ¿Me pueden dar más información?`
    : `Hola, quiero cotizar este producto: ${nombre}. ¿Me pueden dar más información?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
};
