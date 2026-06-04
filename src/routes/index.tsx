import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, BookOpen, Users, School } from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import pythonImg from "@/assets/python-cover.jpg";
import scratchImg from "@/assets/scratch-cover.jpg";
import roboticaImg from "@/assets/robotica-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Início — Extensão USP | ICMC" },
      {
        name: "description",
        content:
          "Banco aberto de planos de aula e projetos de Python, Scratch e Robótica para escolas públicas.",
      },
    ],
  }),
  component: Home,
});

const disciplineCards = [
  {
    to: "/python" as const,
    title: "Python",
    desc: "Lógica, dados e jogos com código.",
    img: pythonImg,
    accent: "from-python/80 to-python/20",
    text: "text-python",
  },
  {
    to: "/scratch" as const,
    title: "Scratch",
    desc: "Histórias e jogos com programação visual.",
    img: scratchImg,
    accent: "from-scratch/80 to-scratch/20",
    text: "text-scratch",
  },
  {
    to: "/robotica" as const,
    title: "Robótica",
    desc: "Eletrônica básica e Arduino na prática.",
    img: roboticaImg,
    accent: "from-robotica/80 to-robotica/20",
    text: "text-robotica",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Estudantes em laboratório de informática"
            className="h-full w-full object-cover"
            width={1920}
            height={1024}
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.88 }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
              Projeto Extensionista · USP São Carlos
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Materiais abertos para ensinar{" "}
              <span className="text-[oklch(0.85_0.15_145)]">Python</span>,{" "}
              <span className="text-[oklch(0.82_0.18_55)]">Scratch</span> e{" "}
              <span className="text-[oklch(0.78_0.16_260)]">Robótica</span>{" "}
              em escolas públicas.
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              Compartilhamos planos de aula, códigos e guias usados nas nossas turmas
              do Ensino Fundamental II — para que outras escolas e professores possam
              aplicar e adaptar livremente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/python"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/90 transition-all shadow-lg"
              >
                Explorar projetos <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/escolas"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
              >
                Levar para minha escola
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: BookOpen, title: "Planos prontos", desc: "Aulas estruturadas, com objetivos pedagógicos claros." },
            { icon: Download, title: "Tudo para baixar", desc: "Códigos, slides e guias em PDF, .py, .sb3, .ino e mais." },
            { icon: Users, title: "Feito por estudantes", desc: "Universitários da USP em parceria com professores das escolas." },
          ].map((h) => (
            <div key={h.title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disciplinas */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Áreas de atuação
            </h2>
            <p className="mt-2 text-muted-foreground">
              Cada área tem seus projetos, materiais e fotos.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {disciplineCards.map((d) => (
            <Link
              key={d.to}
              to={d.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${d.accent} mix-blend-multiply opacity-60`} />
              </div>
              <div className="p-6">
                <h3 className={`font-display text-3xl font-bold ${d.text}`}>{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  Ver projetos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Escolas */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12 shadow-[var(--shadow-card)]">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                Quer levar o projeto à sua escola?
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Atendemos escolas públicas do Ensino Fundamental II e Médio em São Carlos
                e região, sem custo. Conte para a gente sobre sua escola.
              </p>
            </div>
            <Link
              to="/escolas"
              className="inline-flex items-center gap-2 self-start rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 shadow-md"
            >
              <School className="h-4 w-4" /> Falar com a equipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
