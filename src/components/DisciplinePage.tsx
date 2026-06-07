import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Download, FileText, Clock, GraduationCap, Target, Camera, Users } from "lucide-react";
import type { Discipline, DisciplineId, ProjectPhoto, PhotoCategory } from "@/data/projects";
import { disciplineTheme } from "@/lib/discipline-theme";
import { Lightbox } from "@/components/Lightbox";

interface Props {
  discipline: Discipline;
  cover: string;
}

const categoryLabels: Record<PhotoCategory, string> = {
  aula: "Aulas",
  visita: "Visita USP",
  convite: "Convite aos alunos",
  culminancia: "Culminância",
};

const categoryOrder: PhotoCategory[] = ["convite", "aula", "visita", "culminancia"];

export function DisciplinePage({ discipline, cover }: Props) {
  const theme = disciplineTheme[discipline.id as DisciplineId];
  const [activeId, setActiveId] = useState(discipline.projects[0]?.id);
  const active = discipline.projects.find((p) => p.id === activeId) ?? discipline.projects[0];
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [openCats, setOpenCats] = useState<Record<string, boolean>>({});

  const groupedPhotos = useMemo(() => {
    const photos = active?.photos ?? [];
    const groups = new Map<string, ProjectPhoto[]>();
    for (const p of photos) {
      const key = p.category ?? "outros";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(p);
    }
    return groups;
  }, [active]);

  // Reset/collapse all categories when project changes (default: first open)
  useEffect(() => {
    const cats = Array.from(groupedPhotos.keys());
    const next: Record<string, boolean> = {};
    cats.forEach((c, i) => { next[c] = i === 0; });
    setOpenCats(next);
  }, [activeId, groupedPhotos]);

  const allPhotos = active?.photos ?? [];

  const toggleCat = (cat: string) =>
    setOpenCats((prev) => ({ ...prev, [cat]: !prev[cat] }));


  return (
    <div>
      {/* Hero */}
      <section className={`relative overflow-hidden ${theme.soft}`}>
        <div className="absolute inset-0 opacity-30">
          <img src={cover} alt="" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${theme.chip}`}>
            Disciplina
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            {discipline.name}
          </h1>
          <p className={`mt-3 text-lg sm:text-xl font-medium ${theme.text}`}>{discipline.tagline}</p>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">{discipline.description}</p>
        </div>
      </section>

      {/* Conteúdo + abas */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Projetos
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
            {discipline.projects.map((p) => {
              const isActive = p.id === active?.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`group text-left shrink-0 snap-start rounded-lg border px-4 py-3 w-[240px] transition-all ${
                    isActive
                      ? `${theme.border} ${theme.soft} shadow-sm`
                      : "border-border bg-card hover:border-foreground/20 hover:bg-muted/50"
                  }`}
                >
                  <div className={`text-sm font-semibold ${isActive ? theme.text : "text-foreground"}`}>
                    {p.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {p.summary}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div>


          {active && (
            <article className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{active.title}</h2>
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
                            <div className="text-sm font-medium text-foreground truncate">{f.name}</div>
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

                {active.team && active.team.length > 0 && (
                  <div className="mt-8">
                    <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                      <Users className={`h-4 w-4 ${theme.text}`} /> Quem participou
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {active.team.map((person) => (
                        <span
                          key={person}
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${theme.chip}`}
                        >
                          {person}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {allPhotos.length > 0 && (
                  <div className="mt-10">
                    <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                      <Camera className={`h-4 w-4 ${theme.text}`} /> Registros do projeto
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Clique em uma seção para abrir, e em uma imagem para ampliar.
                    </p>


                    <div className="mt-5 space-y-8">
                      {categoryOrder
                        .filter((cat) => groupedPhotos.has(cat))
                        .map((cat) => {
                          const photosInCat = groupedPhotos.get(cat)!;
                          const isOpen = openCats[cat] ?? false;
                          return (
                            <div key={cat} className="rounded-xl border border-border overflow-hidden">
                              <button
                                type="button"
                                onClick={() => toggleCat(cat)}
                                aria-expanded={isOpen}
                                className="flex w-full items-center justify-between gap-3 bg-muted/40 px-4 py-3 text-left hover:bg-muted transition-colors"
                              >
                                <div className="flex items-center gap-2">
                                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${theme.chip}`}>
                                    {categoryLabels[cat]}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {photosInCat.length} {photosInCat.length === 1 ? "foto" : "fotos"}
                                  </span>
                                </div>
                                <ChevronDown
                                  className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                                />
                              </button>
                              {isOpen && (
                                <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
                                  {photosInCat.map((p) => {
                                    const globalIdx = allPhotos.indexOf(p);
                                    return (
                                      <button
                                        type="button"
                                        key={globalIdx}
                                        onClick={() => setLightboxIdx(globalIdx)}
                                        className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted text-left focus:outline-none focus:ring-2 focus:ring-ring"
                                      >
                                        <img
                                          src={p.src}
                                          alt={p.alt}
                                          loading="lazy"
                                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {p.caption && (
                                          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 text-xs font-medium text-white">
                                            {p.caption}
                                          </span>
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}


                      {/* Fotos sem categoria */}
                      {groupedPhotos.has("outros") && (
                        <div>
                          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {groupedPhotos.get("outros")!.map((p) => {
                              const globalIdx = allPhotos.indexOf(p);
                              return (
                                <button
                                  type="button"
                                  key={globalIdx}
                                  onClick={() => setLightboxIdx(globalIdx)}
                                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted text-left focus:outline-none focus:ring-2 focus:ring-ring"
                                >
                                  <img
                                    src={p.src}
                                    alt={p.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                  {p.caption && (
                                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 text-xs font-medium text-white">
                                      {p.caption}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {active.videos && active.videos.length > 0 && (
                  <div className="mt-10">
                    <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                      <Camera className={`h-4 w-4 ${theme.text}`} /> Vídeos
                    </h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {active.videos.map((v) => (
                        <figure key={v.src} className="overflow-hidden rounded-xl border border-border bg-muted">
                          <video
                            src={v.src}
                            controls
                            preload="metadata"
                            className="w-full aspect-video bg-black"
                          />
                          {v.caption && (
                            <figcaption className="px-3 py-2 text-xs text-muted-foreground">
                              {v.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          )}
        </div>
      </section>

      {lightboxIdx !== null && allPhotos.length > 0 && (
        <Lightbox
          images={allPhotos}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onChange={setLightboxIdx}
        />
      )}
    </div>
  );
}
