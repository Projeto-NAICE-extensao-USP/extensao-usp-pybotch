import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Instagram, Send, School, Sparkles, HandHeart, CheckCircle2 } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/escolas")({
  head: () => ({
    meta: [
      { title: "Escolas — Leve o projeto à sua escola" },
      {
        name: "description",
        content:
          "Sua escola pode receber aulas gratuitas de Python, Scratch e Robótica do projeto extensionista da USP São Carlos.",
      },
    ],
  }),
  component: EscolasPage,
});

const CONTACT_EMAIL = "contato@extensao.usp.br";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  school: z.string().trim().min(2, "Informe a escola").max(150),
  email: z.string().trim().email("E-mail inválido").max(255),
  subject: z.string().trim().min(3, "Informe um assunto").max(150),
  message: z.string().trim().min(10, "Mensagem muito curta").max(2000),
});

function EscolasPage() {
  const [form, setForm] = useState({ name: "", school: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        if (issue.path[0]) errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, school, email, subject, message } = result.data;
    const body = `Nome: ${name}\nEscola: ${school}\nE-mail: ${email}\n\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      CONTACT_EMAIL,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const a = document.createElement("a");
    a.href = gmailUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div>
      {/* Hero — "contrate nosso serviço" */}
      <section
        className="relative overflow-hidden border-b border-border"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
            <School className="h-3.5 w-3.5" /> Para escolas e gestores
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl">
            Leve programação e robótica para sua escola — sem custo.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 leading-relaxed">
            Somos um projeto extensionista da USP São Carlos. Levamos aulas regulares
            de Python, Scratch e Robótica para escolas públicas do Ensino Fundamental
            II e Médio, com monitores universitários e materiais próprios.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/90 transition-all shadow-lg"
            >
              <HandHeart className="h-4 w-4" /> Quero levar para minha escola
            </a>
          </div>
        </div>
      </section>

      {/* O que oferecemos */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            O que oferecemos
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Um programa pronto para começar
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Aulas semanais gratuitas", desc: "Monitores universitários conduzem turmas de Python, Scratch ou Robótica ao longo do semestre." },
            { icon: CheckCircle2, title: "Material e planejamento", desc: "Trazemos planos de aula, projetos e (no caso de robótica) os kits de eletrônica." },
            { icon: School, title: "Parceria de longo prazo", desc: "Estamos em duas escolas há mais de dois anos. Buscamos relações duradouras com a gestão." },
          ].map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulário */}
      <section id="contato" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Fale com a gente
          </h2>
          <p className="mt-3 text-muted-foreground">
            Conte um pouco sobre sua escola e o que você procura. Vamos abrir o Gmail
            com sua mensagem pronta para envio.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)] flex flex-col"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Seu nome" value={form.name} onChange={(v) => update("name", v)} error={errors.name} maxLength={100} />
              <Field label="Escola / instituição" value={form.school} onChange={(v) => update("school", v)} error={errors.school} maxLength={150} />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="E-mail" type="email" value={form.email} onChange={(v) => update("email", v)} error={errors.email} maxLength={255} />
              <Field label="Assunto" value={form.subject} onChange={(v) => update("subject", v)} error={errors.subject} maxLength={150} />
            </div>
            <div className="mt-4 flex-1 flex flex-col">
              <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={6}
                maxLength={2000}
                placeholder="Conte sobre a escola: localização, séries atendidas, horários disponíveis, etc."
                className="w-full flex-1 min-h-[140px] rounded-md border border-input bg-background px-3 py-2.5 text-sm shadow-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 shadow-sm"
            >
              <Send className="h-4 w-4" /> Enviar mensagem
            </button>
          </form>

          <aside className="grid gap-4 grid-rows-3">
            <InfoCard icon={Mail} title="E-mail">
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-foreground hover:underline">
                {CONTACT_EMAIL}
              </a>
            </InfoCard>
            <InfoCard icon={MapPin} title="Onde estamos">
              <p className="text-sm text-muted-foreground">
                ICMC / USP — Av. Trab. São-carlense, 400
                <br />
                São Carlos · SP
              </p>
            </InfoCard>
            <InfoCard icon={Instagram} title="Instagram">
              <span className="text-sm text-muted-foreground">@projeto.extensao</span>
            </InfoCard>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label, value, onChange, error, type = "text", maxLength,
}: {
  label: string; value: string; onChange: (v: string) => void; error?: string; type?: string; maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm shadow-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({
  icon: Icon, title, children,
}: {
  icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <div className="font-display font-semibold text-sm text-foreground">{title}</div>
      </div>
      <div className="mt-3 pl-12">{children}</div>
    </div>
  );
}
