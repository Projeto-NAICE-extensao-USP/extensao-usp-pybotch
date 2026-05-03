import { createFileRoute } from "@tanstack/react-router";
import { team } from "@/data/team";
import { User } from "lucide-react";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Extensão USP São Carlos" },
      {
        name: "description",
        content: "Conheça os membros atuais e ex-membros do projeto extensionista.",
      },
    ],
  }),
  component: EquipePage,
});

const ORG_ROLES = new Set([
  "Diretora Geral",
  "Diretor Geral",
  "Coordenadora",
  "Coordenador",
]);

function isOrg(role: string) {
  return ORG_ROLES.has(role);
}

function EquipePage() {
  const current = team.filter((m) => m.status === "current");
  const organization = current.filter((m) => isOrg(m.role));
  const volunteers = current.filter((m) => !isOrg(m.role));
  const alumni = team.filter((m) => m.status === "alumni");

  return (
    <div className="bg-[var(--equipe-soft)]/40 min-h-screen">
      <section
        className="relative overflow-hidden border-b border-border"
        style={{
          background:
            "linear-gradient(135deg, var(--equipe) 0%, oklch(0.32 0.06 230) 60%, oklch(0.26 0.05 250) 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-white">
          <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
            Quem somos
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
            A equipe por trás do projeto
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Estudantes universitários da USP São Carlos que dedicam suas tardes para
            levar tecnologia, criatividade e oportunidade a alunos da rede pública.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">Organização</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Direção e coordenação responsáveis por conduzir o projeto.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {organization.map((m) => (
            <MemberCard key={m.name} {...m} highlight />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">Voluntários</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Estudantes que dedicam seu tempo para dar aulas e produzir materiais.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {volunteers.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </section>

      {alumni.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Ex-membros</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Pessoas que passaram pelo projeto e ajudaram a construir o que somos hoje.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alumni.map((m) => (
              <MemberCard key={m.name} {...m} muted />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function MemberCard({
  name,
  role,
  photo,
  muted,
  highlight,
}: {
  name: string;
  role: string;
  photo?: string;
  muted?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-xl border bg-card p-4 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-card)] ${
        highlight ? "border-primary/30" : "border-border"
      } ${muted ? "opacity-90" : ""}`}
    >
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground">
        {photo ? (
          <img
            src={photo}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <User className="h-6 w-6" />
        )}
      </div>
      <div className="min-w-0">
        <div className="font-display font-semibold text-foreground truncate">{name}</div>
        <div className={`text-sm ${highlight ? "text-primary font-medium" : "text-muted-foreground"}`}>
          {role}
        </div>
      </div>
    </div>
  );
}
