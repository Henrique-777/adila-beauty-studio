import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/trabalhos", label: "Trabalhos" },
  { to: "/lista-de-espera", label: "Lista de espera" },
  { to: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-nude-50/90 backdrop-blur-sm shadow-[0_1px_0_0_rgba(185,151,100,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <NavLink to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl sm:text-[1.65rem] text-ink-700 italic">
            Ádila Dauana
          </span>
          <span className="font-body text-[0.62rem] sm:text-xs tracking-widest2 uppercase text-gold-500 mt-1">
            Concept Beauty Studio
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-body tracking-wide transition-colors ${
                  isActive ? "text-gold-500" : "text-ink-500 hover:text-gold-500"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/agendar"
            className="rounded-full border border-gold-400 px-6 py-2 text-sm text-ink-700 hover:bg-gold-400 hover:text-nude-50 transition-colors duration-300"
          >
            Agendar horário
          </NavLink>
        </nav>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="md:hidden text-ink-600"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-nude-50 border-t border-gold-200/70 px-6 pb-6 pt-2 flex flex-col gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-base font-body ${isActive ? "text-gold-500" : "text-ink-600"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/agendar"
            className="rounded-full bg-gold-400 text-nude-50 text-center px-6 py-3 text-sm"
          >
            Agendar horário
          </NavLink>
        </div>
      )}
    </header>
  );
}
