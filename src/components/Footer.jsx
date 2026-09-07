import { MapPin, Phone } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { business } from "../data/services";

export default function Footer() {
  return (
    <footer className="bg-ink-700 text-nude-100">
      <div className="container-page grid grid-cols-1 sm:grid-cols-3 gap-10 py-14">
        <div>
          <p className="font-display italic text-2xl text-nude-50">{business.name}</p>
          <p className="text-xs tracking-widest2 uppercase text-gold-200 mt-1">
            {business.subtitle}
          </p>
          <p className="text-sm text-nude-300 mt-4 max-w-[26ch]">{business.slogan}</p>
        </div>

        <div className="text-sm text-nude-200 flex flex-col gap-3">
          <p className="text-gold-200 text-xs tracking-widest2 uppercase mb-1">Contato</p>
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gold-200 transition-colors"
          >
            <Phone size={16} /> {business.whatsappDisplay}
          </a>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-gold-200 transition-colors"
          >
            <InstagramIcon size={16} /> {business.instagram}
          </a>
        </div>

        <div className="text-sm text-nude-200 flex flex-col gap-3">
          <p className="text-gold-200 text-xs tracking-widest2 uppercase mb-1">Endereço</p>
          <p className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>
              {business.address.line1}
              <br />
              {business.address.line2}
              <br />
              CEP {business.address.cep} — {business.address.city}
            </span>
          </p>
        </div>
      </div>

      <div className="hairline opacity-40" />

      <p className="text-center text-xs text-nude-400 py-5">
        © {new Date().getFullYear()} {business.name} {business.subtitle}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
