import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, School, Sparkles, HandHeart, GraduationCap, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import pythonImg from "@/assets/python-cover.jpg";
import scratchImg from "@/assets/scratch-cover.jpg";
import roboticaImg from "@/assets/robotica-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Extensão USP ICMC — Python, Scratch e Robótica em escolas públicas" },
      {
        name: "description",
        content:
          "Somos um projeto de extensão da USP São Carlos que leva aulas gratuitas de Python, Scratch e Robótica para escolas públicas do Ensino Fundamental II e Médio.",
      },
    ],
  }),
  component: Home,
});

const disciplineCards = [
  {
    to: "/python" as const,
    title: "Python",
    desc: "Lógica, dados e jogos com código de verdade.",
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

const offers = [
  {
    icon: GraduationCap,
    title: "Aulas semanais na sua escola",
    desc: "Universitários da USP dão aulas presenciais de programação e robótica para turmas do Fundamental II e Médio.",
  },
  {
    icon: HandHeart,
    title: "Totalmente gratuito",
    desc: "Não cobramos nada da escola nem das famílias. Somos um projeto de extensão financiado pela universidade.",
  },
  {
    icon: Sparkles,
    title: "Material próprio e testado",
    desc: "Trazemos planos de aula, projetos e a infraestrutura básica — a escola só precisa oferecer o espaço e a turma.",
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
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.9 }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
              Projeto de Extensão · USP ICMC São Carlos
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Levamos{" "}
              <span className="text-[oklch(0.85_0.15_145)]">Python</span>,{" "}
              <span className="text-[oklch(0.82_0.18_55)]">Scratch</span> e{" "}
              <span className="text-[oklch(0.78_0.16_260)]">Robótica</span>{" "}
              para dentro da escola pública.
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              Somos estudantes da USP São Carlos que dão aulas gratuitas de programação
              e robótica em escolas públicas do Ensino Fundamental II e Médio da região.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/escolas"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/90 transition-all shadow-lg"
              >
                <School className="h-4 w-4" /> Levar para minha escola
              </Link>
              <Link
                to="/sobre-nos"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
              >
                Conheça o projeto <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quem somos — identidade curta */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            Quem somos
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Universitários ensinando o que amam a quem tem menos acesso.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Somos alunos da{" "}
            <strong className="text-foreground">USP São Carlos (ICMC)</strong> que
            dedicam suas tardes para levar tecnologia, criatividade e oportunidade
            a estudantes da rede pública. Cada turma tem professores e universitários
            acompanhando de perto, com material próprio e projetos que os alunos
            constroem do zero.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
            {[
              "Aulas presenciais semanais",
              "Do 6º ano ao Ensino Médio",
              "Sem custo para a escola",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-medium text-foreground shadow-[var(--shadow-soft)]"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* O que oferecemos às escolas */}
      <section
        className="border-y border-border"
        style={{ background: "var(--muted, oklch(0.98 0 0))" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
              Para escolas
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
              O que a gente leva pra sua escola
            </h2>
            <p className="mt-3 text-muted-foreground">
              Uma parceria simples: a escola abre as portas, a gente entra com equipe,
              material e projeto pronto.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {offers.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <o.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplinas */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            O que ensinamos
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
            Três frentes, uma mesma missão
          </h2>
          <p className="mt-3 text-muted-foreground">
            Cada área tem seus projetos, turmas e resultados dos alunos.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {disciplineCards.map((d) => (
            <Link
              key={d.to}
              to={d.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
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

      {/* CTA Escolas — final, forte */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div
          className="relative overflow-hidden rounded-3xl border border-border p-8 sm:p-12 lg:p-16 shadow-[var(--shadow-card)]"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.18 250) 0%, oklch(0.45 0.16 260) 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_auto] md:items-center">
            <div className="text-white">
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
                Vagas abertas para 2026
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Quer levar Python, Scratch ou Robótica para seus alunos?
              </h2>
              <p className="mt-4 text-white/85 max-w-2xl leading-relaxed">
                Atendemos escolas públicas de São Carlos e região sem nenhum custo.
                Conte pra gente sobre a sua escola — a gente cuida do resto.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/escolas"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/90 shadow-lg transition-all"
                >
                  <School className="h-4 w-4" /> Falar com a equipe
                </Link>
                <Link
                  to="/sobre-nos"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all"
                >
                  <Users className="h-4 w-4" /> Conheça a equipe
                </Link>
              </div>
            </div>
            <div className="hidden md:flex h-40 w-40 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur">
              <School className="h-20 w-20 text-white/90" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
