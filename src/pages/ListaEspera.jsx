import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { services, business } from "../data/services";

const initialState = { name: "", phone: "", service: "", period: "", notes: "" };

export default function ListaEspera() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const selectedService = services.find((s) => s.id === form.service);

  const waLink = useMemo(() => {
    const lines = [
      "Olá, Ádila! Gostaria de entrar na lista de espera.",
      "",
      `Nome: ${form.name}`,
      `Serviço desejado: ${selectedService ? selectedService.name : "-"}`,
      `Período de preferência: ${form.period || "sem preferência"}`,
    ];
    if (form.notes) lines.push(`Observações: ${form.notes}`);
    return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [form, selectedService]);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Informe seu nome.";
    if (!form.phone.trim()) next.phone = "Informe um telefone.";
    if (!form.service) next.service = "Escolha o serviço desejado.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) setSent(true);
  }

  if (sent) {
    return (
      <section className="container-page py-24 max-w-[520px] mx-auto text-center">
        <CheckCircle2 className="mx-auto text-gold-500" size={44} strokeWidth={1.4} />
        <h1 className="mt-6 text-3xl italic">Você está quase na lista</h1>
        <p className="mt-3 text-ink-500 font-light">
          Envie a mensagem no WhatsApp para confirmar sua entrada na lista de
          espera. Assim que surgir um horário compatível, a Ádila entra em contato.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-gold-400 text-nude-50 px-8 py-3.5 text-sm hover:bg-gold-500 transition-colors"
        >
          Confirmar no WhatsApp
        </a>
      </section>
    );
  }

  return (
    <section className="container-page py-16 sm:py-20">
      <div className="max-w-[56ch]">
        <h1 className="text-3xl sm:text-4xl italic">Lista de espera</h1>
        <p className="mt-3 text-ink-500 font-light">
          Sem horário disponível na data que você queria? Deixe seus dados
          aqui e a Ádila avisa assim que um horário compatível abrir.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 max-w-[440px] space-y-5">
        <div>
          <label className="block text-sm text-ink-500 mb-1.5" htmlFor="name">
            Nome
          </label>
          <input
            id="name"
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
          <label className="block text-sm text-ink-500 mb-1.5" htmlFor="service">
            Serviço desejado
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className="w-full rounded-lg border border-nude-400 bg-nude-50 px-4 py-3 text-sm focus:border-gold-400"
          >
            <option value="">Selecione</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.service && <p className="text-xs text-rose-400 mt-1.5">{errors.service}</p>}
        </div>

        <div>
          <label className="block text-sm text-ink-500 mb-1.5" htmlFor="period">
            Período de preferência (opcional)
          </label>
          <input
            id="period"
            value={form.period}
            onChange={(e) => update("period", e.target.value)}
            className="w-full rounded-lg border border-nude-400 bg-nude-50 px-4 py-3 text-sm focus:border-gold-400"
            placeholder="Ex.: próxima semana, à tarde"
          />
        </div>

        <div>
          <label className="block text-sm text-ink-500 mb-1.5" htmlFor="notes">
            Observações (opcional)
          </label>
          <textarea
            id="notes"
            rows={3}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            className="w-full rounded-lg border border-nude-400 bg-nude-50 px-4 py-3 text-sm focus:border-gold-400 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-gold-400 text-nude-50 py-3.5 text-sm tracking-wide hover:bg-gold-500 transition-colors"
        >
          Entrar na lista de espera
        </button>
      </form>
    </section>
  );
}
