import { useMemo, useState } from "react";
import { CheckCircle2, MapPin, Home as HomeIcon } from "lucide-react";
import { services, locationOptions, timeSlots, business } from "../data/services";

const initialState = {
  name: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  location: "studio",
  address: "",
  notes: "",
};

function todayISO() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

export default function Agendar() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const selectedService = services.find((s) => s.id === form.service);

  const waLink = useMemo(() => {
    const lines = [
      `Olá, Ádila! Gostaria de agendar um horário pelo site.`,
      ``,
      `Nome: ${form.name}`,
      `Serviço: ${selectedService ? selectedService.name : "-"}`,
      `Data: ${form.date ? formatDate(form.date) : "-"}`,
      `Horário: ${form.time || "-"}`,
      `Local: ${form.location === "studio" ? "No estúdio" : "Na minha casa"}`,
    ];
    if (form.location === "home" && form.address) {
      lines.push(`Endereço: ${form.address}`);
    }
    if (form.notes) {
      lines.push(`Observações: ${form.notes}`);
    }
    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${business.whatsapp}?text=${text}`;
  }, [form, selectedService]);

  function formatDate(iso) {
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  }

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Informe seu nome.";
    if (!form.phone.trim()) next.phone = "Informe um telefone para contato.";
    if (!form.service) next.service = "Escolha um serviço.";
    if (!form.date) next.date = "Escolha uma data.";
    if (!form.time) next.time = "Escolha um horário.";
    if (form.location === "home" && !form.address.trim())
      next.address = "Informe o endereço de atendimento.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
  }

  if (sent) {
    return (
      <section className="container-page py-24 max-w-[520px] mx-auto text-center">
        <CheckCircle2 className="mx-auto text-gold-500" size={44} strokeWidth={1.4} />
        <h1 className="mt-6 text-3xl italic">Quase lá</h1>
        <p className="mt-3 text-ink-500 font-light">
          Confirme o pedido de horário direto no WhatsApp da Ádila. Ela vai
          confirmar a disponibilidade com você por lá.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-gold-400 text-nude-50 px-8 py-3.5 text-sm hover:bg-gold-500 transition-colors"
        >
          Confirmar no WhatsApp
        </a>
        <button
          onClick={() => {
            setForm(initialState);
            setSent(false);
          }}
          className="block mx-auto mt-5 text-sm text-ink-500 border-b border-ink-500/30 hover:text-gold-500 hover:border-gold-500"
        >
          Fazer outro agendamento
        </button>
      </section>
    );
  }

  return (
    <section className="container-page py-16 sm:py-20">
      <div className="max-w-[56ch]">
        <h1 className="text-3xl sm:text-4xl italic">Agendar horário</h1>
        <p className="mt-3 text-ink-500 font-light">
          Preencha os dados abaixo. O pedido é enviado direto para o WhatsApp
          da Ádila, que confirma a disponibilidade com você.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
        <div className="space-y-8">
          <div>
            <p className="text-xs tracking-widest2 uppercase text-gold-500 mb-3">
              Serviço
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => update("service", s.id)}
                  className={`text-left rounded-xl border px-4 py-3 transition-colors ${
                    form.service === s.id
                      ? "border-gold-400 bg-gold-100/60"
                      : "border-nude-400 hover:border-gold-300"
                  }`}
                >
                  <span className="font-display text-base text-ink-700">{s.name}</span>
                  <span className="block text-xs text-ink-400 mt-0.5">{s.duration}</span>
                </button>
              ))}
            </div>
            {errors.service && <p className="text-xs text-rose-400 mt-2">{errors.service}</p>}
          </div>

          <div>
            <p className="text-xs tracking-widest2 uppercase text-gold-500 mb-3">
              Local do atendimento
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {locationOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => update("location", opt.id)}
                  className={`text-left rounded-xl border px-4 py-3 flex items-start gap-3 transition-colors ${
                    form.location === opt.id
                      ? "border-gold-400 bg-gold-100/60"
                      : "border-nude-400 hover:border-gold-300"
                  }`}
                >
                  {opt.id === "studio" ? (
                    <MapPin size={18} className="text-gold-500 mt-0.5 shrink-0" />
                  ) : (
                    <HomeIcon size={18} className="text-gold-500 mt-0.5 shrink-0" />
                  )}
                  <span>
                    <span className="block font-display text-base text-ink-700">{opt.label}</span>
                    <span className="block text-xs text-ink-400 mt-0.5">{opt.detail}</span>
                  </span>
                </button>
              ))}
            </div>
            {form.location === "home" && (
              <div className="mt-4">
                <label className="block text-sm text-ink-500 mb-1.5" htmlFor="address">
                  Endereço para atendimento
                </label>
                <input
                  id="address"
                  type="text"
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  placeholder="Rua, número, bairro, cidade"
                  className="w-full rounded-lg border border-nude-400 bg-nude-50 px-4 py-3 text-sm focus:border-gold-400"
                />
                {errors.address && <p className="text-xs text-rose-400 mt-1.5">{errors.address}</p>}
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-ink-500 mb-1.5" htmlFor="date">
                Data
              </label>
              <input
                id="date"
                type="date"
                min={todayISO()}
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="w-full rounded-lg border border-nude-400 bg-nude-50 px-4 py-3 text-sm focus:border-gold-400"
              />
              {errors.date && <p className="text-xs text-rose-400 mt-1.5">{errors.date}</p>}
            </div>
            <div>
              <p className="block text-sm text-ink-500 mb-1.5">Horário</p>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => update("time", t)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                      form.time === t
                        ? "border-gold-400 bg-gold-400 text-nude-50"
                        : "border-nude-400 text-ink-500 hover:border-gold-300"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {errors.time && <p className="text-xs text-rose-400 mt-1.5">{errors.time}</p>}
            </div>
          </div>
        </div>

        <div className="bg-nude-200/60 rounded-2xl p-7 h-fit space-y-5">
          <div>
            <label className="block text-sm text-ink-500 mb-1.5" htmlFor="name">
              Nome
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full rounded-lg border border-nude-400 bg-nude-50 px-4 py-3 text-sm focus:border-gold-400"
              placeholder="Seu nome"
            />
            {errors.name && <p className="text-xs text-rose-400 mt-1.5">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm text-ink-500 mb-1.5" htmlFor="phone">
              Telefone / WhatsApp
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-lg border border-nude-400 bg-nude-50 px-4 py-3 text-sm focus:border-gold-400"
              placeholder="(87) 9 0000-0000"
            />
            {errors.phone && <p className="text-xs text-rose-400 mt-1.5">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm text-ink-500 mb-1.5" htmlFor="notes">
              Observações (opcional)
            </label>
            <textarea
              id="notes"
              rows={4}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              className="w-full rounded-lg border border-nude-400 bg-nude-50 px-4 py-3 text-sm focus:border-gold-400 resize-none"
              placeholder="Alguma preferência ou detalhe importante"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gold-400 text-nude-50 py-3.5 text-sm tracking-wide hover:bg-gold-500 transition-colors"
          >
            Revisar e enviar pedido
          </button>
          <p className="text-xs text-ink-400 text-center font-light">
            O pedido é finalizado no WhatsApp da Ádila.
          </p>
        </div>
      </form>
    </section>
  );
}
