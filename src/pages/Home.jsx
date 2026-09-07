import { Link } from "react-router-dom";
import { Scissors, Sparkles, Droplet, Hand, Clock } from "lucide-react";
import ArchFrame from "../components/ArchFrame";
import { services, business } from "../data/services";

const icons = {
  sobrancelhas: Sparkles,
  manicure: Hand,
  pedicure: Hand,
  depilacao: Droplet,
  cabelos: Scissors,
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="container-page pt-10 sm:pt-16 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-balance italic text-ink-700">
            Beleza e sofisticação<br className="hidden sm:block" /> em um só lugar
          </h1>
          <p className="mt-6 text-ink-500 max-w-[46ch] text-base sm:text-lg font-light">
            O estúdio da {business.name} reúne sobrancelhas, unhas, depilação e
            cabelo em um atendimento calmo e cuidadoso — no espaço dela ou no
            conforto da sua casa.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/agendar"
              className="rounded-full bg-gold-400 text-nude-50 px-8 py-3.5 text-sm tracking-wide hover:bg-gold-500 transition-colors duration-300"
            >
              Agendar meu horário
            </Link>
            <Link
              to="/trabalhos"
              className="text-sm text-ink-600 border-b border-ink-600/40 pb-0.5 hover:border-gold-500 hover:text-gold-500 transition-colors"
            >
              Ver trabalhos
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2 mx-auto w-[72%] sm:w-[60%] md:w-full max-w-[340px]">
          <ArchFrame tone={0} label="Ádila em atendimento" />
        </div>
      </section>

      <div className="hairline container-page" />

      {/* Services */}
      <section className="container-page py-20">
        <div className="max-w-[52ch]">
          <h2 className="text-3xl sm:text-4xl italic">Serviços</h2>
          <p className="mt-3 text-ink-500 font-light">
            Cada procedimento é feito no seu tempo, com produtos de qualidade
            e atenção aos detalhes.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-gold-200/70 border-t border-b border-gold-200/70">
          {services.map((s) => {
            const Icon = icons[s.id];
            return (
              <li key={s.id} className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto] items-center gap-5 py-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-300 text-gold-500">
                  <Icon size={19} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="font-display text-lg sm:text-xl text-ink-700">{s.name}</p>
                  <p className="text-sm text-ink-400 mt-1 max-w-[52ch] font-light">
                    {s.description}
                  </p>
                </div>
                <span className="hidden sm:flex items-center gap-1.5 text-xs text-ink-400 whitespace-nowrap">
                  <Clock size={14} /> {s.duration}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Quote / brand moment */}
      <section className="bg-ink-700 py-20">
        <div className="container-page text-center max-w-[38ch] mx-auto">
          <p className="font-display italic text-2xl sm:text-3xl text-nude-100 leading-relaxed">
            "Cuidar de você é o que eu mais gosto de fazer."
          </p>
          <p className="mt-5 text-gold-200 text-xs tracking-widest2 uppercase">
            {business.name} · {business.subtitle}
          </p>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="container-page py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-3xl sm:text-4xl italic">Trabalhos recentes</h2>
          <Link
            to="/trabalhos"
            className="text-sm text-ink-600 border-b border-ink-600/40 pb-0.5 hover:border-gold-500 hover:text-gold-500 transition-colors"
          >
            Ver todos
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[0, 1, 2, 3].map((i) => (
            <ArchFrame key={i} tone={i} />
          ))}
        </div>
      </section>

      {/* Booking modes */}
      <section className="container-page pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border border-gold-300 rounded-2xl p-8">
            <h3 className="font-display text-xl text-ink-700">No estúdio</h3>
            <p className="mt-2 text-sm text-ink-500 font-light">
              Atendimento no espaço da Ádila, no Park das Acácias, em Gurupi - TO.
            </p>
          </div>
          <div className="border border-gold-300 rounded-2xl p-8">
            <h3 className="font-display text-xl text-ink-700">Na sua casa</h3>
            <p className="mt-2 text-sm text-ink-500 font-light">
              A Ádila vai até você. O deslocamento é combinado à parte, conforme o endereço.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
