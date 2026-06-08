import { createFileRoute } from "@tanstack/react-router";
import { team } from "@/data/team";
import { User, PlayCircle, Maximize2 } from "lucide-react";
import { AboutImpact } from "@/components/AboutImpact";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";


export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title: "Sobre nós — Extensão USP | ICMC" },
      {
        name: "description",
        content:
          "Quem somos: estudantes da USP São Carlos levando programação e robótica para escolas públicas.",
      },
    ],
  }),
  component: SobreNosPage,
});

// === VÍDEOS ===
const videos: { title: string; url?: string; embedUrl?: string; description?: string }[] = [
  {
    title: "Reel sobre o projeto",
    embedUrl: "https://www.instagram.com/reel/DDrn9-OO8dL/embed",
    description: "Bastidores e momentos do projeto no Instagram.",
  },
];

function SobreNosPage() {
  return (
    <div>
      {/* Hero */}
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
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-white">
          <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
            Quem somos
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
            Sobre nós
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 leading-relaxed">
            Estudantes da USP São Carlos que dedicam suas tardes para levar tecnologia,
            criatividade e oportunidade a alunos da rede pública.
          </p>
        </div>
      </section>

      {/* Texto institucional */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          Levando programação e robótica para escolas públicas
        </h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            Somos um grupo de estudantes da{" "}
            <strong className="text-foreground">Universidade de São Paulo (USP), campus São Carlos</strong>,
            dedicados a democratizar o acesso à educação em tecnologia para estudantes do
            ensino fundamental II de escolas públicas da região.
          </p>
          <p>
            Através do nosso projeto de <strong className="text-foreground">atividade extensionista</strong>,
            ministramos aulas semanais de{" "}
            <span className="font-semibold text-python">Python</span>,{" "}
            <span className="font-semibold text-scratch">Scratch</span> e{" "}
            <span className="font-semibold text-robotica">Robótica</span>, adaptando os
            conteúdos para a faixa etária e realidade dos alunos.
          </p>
          <p>
            Este site foi criado para{" "}
            <strong className="text-foreground">compartilhar nossos materiais</strong> com a
            comunidade educacional. Professores, estudantes e outros projetos podem acessar,
            baixar e utilizar todo o conteúdo gratuitamente.
          </p>
          <p>
            Acreditamos que a tecnologia tem o poder de transformar vidas e abrir novas
            oportunidades. Cada linha de código ensinada é uma{" "}
            <strong className="text-foreground">semente plantada para o futuro</strong>.
          </p>
        </div>
      </section>

      {/* Impacto */}
      <AboutImpact />


      {/* Organização */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            Organização
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Direção e coordenação
          </h2>
          <p className="mt-3 text-muted-foreground">
            As pessoas responsáveis por conduzir o projeto. Além delas, dezenas de
            monitores voluntários dão aulas a cada semestre — você encontra os nomes
            de cada turma nas páginas de Python, Scratch e Robótica.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </section>

      {/* Vídeos sobre nós */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            Mídia
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Vídeos sobre o projeto
          </h2>
          <p className="mt-3 text-muted-foreground">
            Reportagens, depoimentos e bastidores das nossas aulas.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <div
              key={v.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]"
            >
              <div className="relative bg-muted aspect-video overflow-hidden">
                {v.url || v.embedUrl ? (
                  <>
                    <iframe
                      src={v.embedUrl ?? v.url}
                      title={v.title}
                      className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ height: "316%" }}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                    {v.embedUrl && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            type="button"
                            aria-label="Abrir vídeo em tamanho maior"
                            className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80 hover:scale-105"
                          >
                            <Maximize2 className="h-4 w-4" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md p-0 overflow-hidden bg-black border-0">
                          <DialogTitle className="sr-only">{v.title}</DialogTitle>
                          <DialogDescription className="sr-only">
                            {v.description ?? "Vídeo do projeto no Instagram"}
                          </DialogDescription>
                          <div className="relative aspect-[9/16] w-full">
                            <iframe
                              src={v.embedUrl}
                              title={v.title}
                              className="absolute inset-0 h-full w-full"
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                    <PlayCircle className="h-10 w-10 opacity-50" />
                    <span className="mt-2 text-xs">Vídeo em breve</span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                {v.description && (
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function MemberCard({
  name, role, photo,
}: { name: string; role: string; photo?: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-primary/30 bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-card)]">
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground">
        {photo ? (
          <img src={photo} alt={name} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <User className="h-6 w-6" />
        )}
      </div>
      <div className="min-w-0">
        <div className="font-display text-lg font-semibold text-foreground truncate">{name}</div>
        <div className="text-sm text-primary font-medium">{role}</div>
      </div>
    </div>
  );
}
