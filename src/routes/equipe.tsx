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

function EquipePage() {
  const current = team.filter((m) => m.status === "current");
  const alumni = team.filter((m) => m.status === "alumni");

  return (
    <div>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Quem somos
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-foreground">
            A equipe por trás do projeto
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Estudantes universitários da USP São Carlos que dedicam suas tardes para
            levar tecnologia, criatividade e oportunidade a alunos da rede pública.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">Membros atuais</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {current.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </section>

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
    </div>
  );
}

function MemberCard({
  name,
  role,
  muted,
}: {
  name: string;
  role: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-card)] ${
        muted ? "opacity-90" : ""
      }`}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <User className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <div className="font-display font-semibold text-foreground truncate">{name}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  );
}
