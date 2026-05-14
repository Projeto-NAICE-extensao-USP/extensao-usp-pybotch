import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold">
              E+
            </div>
            <span className="font-display font-semibold">Extensão USP São Carlos</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Projeto extensionista de ensino de Python, Scratch e Robótica em escolas
            públicas do Ensino Fundamental II.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
            Disciplinas
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/python" className="text-muted-foreground hover:text-foreground">Python</Link></li>
            <li><Link to="/scratch" className="text-muted-foreground hover:text-foreground">Scratch</Link></li>
            <li><Link to="/robotica" className="text-muted-foreground hover:text-foreground">Robótica</Link></li>
            <li><Link to="/equipe" className="text-muted-foreground hover:text-foreground">Equipe</Link></li>
            <li><Link to="/contato" className="text-muted-foreground hover:text-foreground">Fale conosco</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="mailto:contato@extensao.usp.br" className="hover:text-foreground">
                contato@extensao.usp.br
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>ICMC / USP São Carlos — SP</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Projeto Extensionista — USP São Carlos.</span>
          <span>Materiais sob licença educacional.</span>
        </div>
      </div>
    </footer>
  );
}
