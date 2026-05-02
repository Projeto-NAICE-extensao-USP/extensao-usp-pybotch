import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Extensão USP São Carlos" },
      {
        name: "description",
        content: "Galeria de fotos das aulas, eventos e momentos do projeto.",
      },
    ],
  }),
  component: GaleriaPage,
});

// Placeholder — substitua pelas fotos reais (importe de @/assets ou /public)
const photos = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  alt: `Momento do projeto ${i + 1}`,
}));

function GaleriaPage() {
  return (
    <div>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Memórias
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-foreground">
            Galeria do projeto
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Fotos das aulas, equipe e eventos — registros dos momentos que tornam o
            projeto possível.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <div
              key={p.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-muted to-muted/50 shadow-[var(--shadow-soft)]"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                <Camera className="h-8 w-8 opacity-40" />
                <span className="mt-2 text-xs">Foto em breve</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground text-center">
          Em breve adicionaremos as fotos reais. Para colaborar com imagens, fale com
          a equipe.
        </p>
      </section>
    </div>
  );
}
