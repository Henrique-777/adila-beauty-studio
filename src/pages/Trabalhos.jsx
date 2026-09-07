import { useState } from "react";
import ArchFrame from "../components/ArchFrame";
import { services } from "../data/services";

const categories = [{ id: "todos", name: "Todos" }, ...services];

// Placeholder gallery entries. Replace `src` with real photo paths
// (e.g. "/fotos/sobrancelha-1.jpg") once client photos are available.
const items = [
  { id: 1, category: "sobrancelhas", tone: 0 },
  { id: 2, category: "manicure", tone: 1 },
  { id: 3, category: "pedicure", tone: 2 },
  { id: 4, category: "depilacao", tone: 3 },
  { id: 5, category: "cabelos", tone: 1 },
  { id: 6, category: "sobrancelhas", tone: 2 },
  { id: 7, category: "manicure", tone: 3 },
  { id: 8, category: "cabelos", tone: 0 },
];

export default function Trabalhos() {
  const [active, setActive] = useState("todos");

  const filtered = active === "todos" ? items : items.filter((i) => i.category === active);

  return (
    <section className="container-page py-16 sm:py-20">
      <div className="max-w-[56ch]">
        <h1 className="text-3xl sm:text-4xl italic">Trabalhos</h1>
        <p className="mt-3 text-ink-500 font-light">
          Um pouco do que a Ádila tem feito no estúdio e nos atendimentos em domicílio.
        </p>
      </div>

      <div className="mt-9 flex flex-wrap gap-2.5">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full border px-4 py-1.5 text-xs sm:text-sm transition-colors ${
              active === c.id
                ? "border-gold-400 bg-gold-400 text-nude-50"
                : "border-nude-400 text-ink-500 hover:border-gold-300"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filtered.map((item) => (
          <ArchFrame key={item.id} tone={item.tone} />
        ))}
      </div>
    </section>
  );
}
