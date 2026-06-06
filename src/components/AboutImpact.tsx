import { useEffect, useRef, useState } from "react";
import { GraduationCap, BookOpenCheck, School, CalendarDays, Target } from "lucide-react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: Stat[] = [
  { value: 350, suffix: "+", label: "Alunos alcançados", icon: GraduationCap },
  { value: 10, suffix: "+", label: "Projetos realizados", icon: BookOpenCheck },
  { value: 2, label: "Escolas parceiras", icon: School },
  { value: 2, suffix: "+", label: "Anos de projeto", icon: CalendarDays },
];

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}

function StatCard({ stat, start }: { stat: Stat; start: boolean }) {
  const v = useCountUp(stat.value, start);
  const Icon = stat.icon;
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-5 text-center font-sans">
      <Icon className="mx-auto h-7 w-7 text-white/90" />
      <div className="mt-2 font-sans text-4xl sm:text-5xl font-bold text-white tabular-nums">
        {v}
        {stat.suffix ?? ""}
      </div>
      <div className="mt-1 text-sm text-white/80 font-sans">{stat.label}</div>
    </div>
  );
}

export function AboutImpact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.6, rootMargin: "0px 0px -15% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 font-sans">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
          Sobre o projeto
        </span>
        <h2 className="mt-4 font-sans text-3xl sm:text-4xl font-bold text-foreground">
          Nosso impacto
        </h2>
        <p className="mt-3 text-muted-foreground font-sans">
          Estamos transformando a educação tecnológica em escolas públicas de São Carlos.
        </p>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl p-8 sm:p-10 text-white shadow-[var(--shadow-card)] font-sans"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(600px circle at 20% 0%, oklch(0.7 0.18 220 / 0.4), transparent 60%)",
          }}
        />
        <div className="relative">
          <div className="flex items-center gap-2">
            <Target className="h-6 w-6" />
            <h3 className="font-sans text-2xl font-bold">Nosso Impacto</h3>
          </div>

          <div ref={ref} className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} stat={s} start={visible} />
            ))}
          </div>

          <div className="mt-6 border-t border-white/15 pt-4">
            <p className="text-sm italic text-white/85 font-sans">
              "A educação é a arma mais poderosa que você pode usar para mudar o mundo." — Nelson Mandela
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

