import { useState } from "react";
import { Download, FileText, Clock, GraduationCap, Target } from "lucide-react";
import type { Discipline, DisciplineId } from "@/data/projects";
import { disciplineTheme } from "@/lib/discipline-theme";

interface Props {
  discipline: Discipline;
  cover: string;
}

export function DisciplinePage({ discipline, cover }: Props) {
  const theme = disciplineTheme[discipline.id as DisciplineId];
  const [activeId, setActiveId] = useState(discipline.projects[0]?.id);
  const active = discipline.projects.find((p) => p.id === activeId) ?? discipline.projects[0];

  return (
    <div>
      {/* Hero */}
      <section className={`relative overflow-hidden ${theme.soft}`}>
        <div className="absolute inset-0 opacity-30">
          <img
            src={cover}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${theme.chip}`}>
            Disciplina
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            {discipline.name}
          </h1>
          <p className={`mt-3 text-lg sm:text-xl font-medium ${theme.text}`}>
            {discipline.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
            {discipline.description}
          </p>
        </div>
      </section>

      {/* Conteúdo + abas */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Abas (projetos) */}
          <aside>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Projetos
            </h2>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {discipline.projects.map((p) => {
                const isActive = p.id === active?.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveId(p.id)}
                    className={`group text-left shrink-0 lg:shrink rounded-lg border px-4 py-3 transition-all ${
                      isActive
                        ? `${theme.border} ${theme.soft} shadow-sm`
                        : "border-border bg-card hover:border-foreground/20 hover:bg-muted/50"
                    }`}
                  >
                    <div className={`text-sm font-semibold ${isActive ? theme.text : "text-foreground"}`}>
                      {p.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2 max-w-[240px]">
                      {p.summary}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Detalhe do projeto */}
          {active && (
            <article className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {active.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{active.summary}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-foreground">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {active.level}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {active.duration}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                    <Target className={`h-4 w-4 ${theme.text}`} /> Objetivos pedagógicos
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {active.objectives.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`mt-2 h-1.5 w-1.5 rounded-full ${theme.bg} shrink-0`} />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                    <Download className={`h-4 w-4 ${theme.text}`} /> Materiais para download
                  </h3>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {active.files.map((f) => (
                      <a
                        key={f.name}
                        href={f.url}
                        download
                        className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-background px-4 py-3 transition-all hover:border-foreground/20 hover:shadow-sm"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`flex h-9 w-9 items-center justify-center rounded-md ${theme.soft} ${theme.text} shrink-0`}>
                            <FileText className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-foreground truncate">
                              {f.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {f.type} · {f.size}
                            </div>
                          </div>
                        </div>
                        <Download className="h-4 w-4 text-muted-foreground group-hover:text-foreground shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}
