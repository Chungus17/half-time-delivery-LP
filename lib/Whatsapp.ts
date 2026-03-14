export function createWhatsAppLink(message: string) {
  const phone = "96541112154";
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}