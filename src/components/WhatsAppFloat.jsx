import { MessageCircle } from "lucide-react";
import { business } from "../data/services";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Olá, Ádila! Vim pelo site e gostaria de falar sobre um horário."
  );

  return (
    <a
      href={`https://wa.me/${business.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-nude-50 shadow-lg shadow-ink-700/20 hover:bg-gold-500 transition-colors duration-300"
    >
      <MessageCircle size={26} strokeWidth={1.8} />
    </a>
  );
}
