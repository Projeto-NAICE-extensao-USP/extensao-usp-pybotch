import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Instagram, Send } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Extensão USP São Carlos" },
      {
        name: "description",
        content:
          "Entre em contato com o projeto extensionista para parcerias, dúvidas ou colaboração.",
      },
    ],
  }),
  component: ContatoPage,
});

const CONTACT_EMAIL = "contato@extensao.usp.br"; // ← ajuste para o e-mail real

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  subject: z.string().trim().min(3, "Informe um assunto").max(150),
  message: z.string().trim().min(10, "Mensagem muito curta").max(2000),
});

function ContatoPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
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
    const { name, email, subject, message } = result.data;
    const body = `Nome: ${name}\nE-mail: ${email}\n\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <div>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Fale conosco
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-foreground">
            Vamos conversar
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Professores, escolas e parceiros: envie sua mensagem e responderemos em
            breve. Estamos abertos a colaborações.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]"
            noValidate
          >
            <h2 className="font-display text-xl font-bold text-foreground">
              Envie uma mensagem
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Vamos abrir o seu app de e-mail com a mensagem pronta para envio.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field
                label="Seu nome"
                value={form.name}
                onChange={(v) => update("name", v)}
                error={errors.name}
                maxLength={100}
              />
              <Field
                label="E-mail"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                error={errors.email}
                maxLength={255}
              />
            </div>

            <div className="mt-4">
              <Field
                label="Assunto"
                value={form.subject}
                onChange={(v) => update("subject", v)}
                error={errors.subject}
                maxLength={150}
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Mensagem
              </label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={6}
                maxLength={2000}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm shadow-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 shadow-sm"
            >
              <Send className="h-4 w-4" /> Enviar mensagem
            </button>
          </form>

          {/* Info de contato */}
          <aside className="space-y-4">
            <InfoCard icon={Mail} title="E-mail">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-foreground hover:underline"
              >
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
            <InfoCard icon={Github} title="GitHub">
              <span className="text-sm text-muted-foreground">github.com/projeto-extensao</span>
            </InfoCard>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  maxLength?: number;
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
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
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
