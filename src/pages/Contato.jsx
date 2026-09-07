import { MapPin, Phone } from "lucide-react";
import InstagramIcon from "../components/InstagramIcon";
import { business } from "../data/services";

export default function Contato() {
  const fullAddress = `${business.address.line1}, ${business.address.line2}, ${business.address.city}`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

  return (
    <section className="container-page py-16 sm:py-20">
      <div className="max-w-[56ch]">
        <h1 className="text-3xl sm:text-4xl italic">Contato</h1>
        <p className="mt-3 text-ink-500 font-light">
          Prefere falar diretamente? Chama no WhatsApp ou vem dar uma olhada no Instagram.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-gold-300 px-6 py-5 hover:border-gold-400 transition-colors"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-500 shrink-0">
              <Phone size={19} />
            </span>
            <span>
              <span className="block text-xs text-ink-400 uppercase tracking-widest2">WhatsApp</span>
              <span className="block font-display text-lg text-ink-700">{business.whatsappDisplay}</span>
            </span>
          </a>

          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-gold-300 px-6 py-5 hover:border-gold-400 transition-colors"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-500 shrink-0">
              <InstagramIcon size={19} />
            </span>
            <span>
              <span className="block text-xs text-ink-400 uppercase tracking-widest2">Instagram</span>
              <span className="block font-display text-lg text-ink-700">{business.instagram}</span>
            </span>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-gold-300 px-6 py-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-500 shrink-0">
              <MapPin size={19} />
            </span>
            <span>
              <span className="block text-xs text-ink-400 uppercase tracking-widest2">Endereço</span>
              <span className="block font-display text-lg text-ink-700 leading-snug">
                {business.address.line1}
                <br />
                {business.address.line2}
              </span>
              <span className="block text-sm text-ink-400 mt-1">
                CEP {business.address.cep} — {business.address.city}
              </span>
            </span>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gold-300 min-h-[320px]">
          <iframe
            title="Localização do estúdio"
            src={mapSrc}
            className="w-full h-full min-h-[320px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
