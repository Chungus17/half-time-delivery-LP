export function createWhatsAppLink(message: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}