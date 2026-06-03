import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Logo Extensão USP ICMC" className="h-10 w-10 object-contain" />
            <span className="font-display font-semibold">
              Extensão USP <span className="text-muted-foreground font-normal">|</span> ICMC
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Projeto extensionista de ensino de Python, Scratch e Robótica em escolas
            públicas do Ensino Fundamental II.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
            Navegar
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link to="/python" className="text-muted-foreground hover:text-foreground">Python</Link></li>
            <li><Link to="/scratch" className="text-muted-foreground hover:text-foreground">Scratch</Link></li>
            <li><Link to="/robotica" className="text-muted-foreground hover:text-foreground">Robótica</Link></li>
            <li><Link to="/escolas" className="text-muted-foreground hover:text-foreground">Escolas</Link></li>
            <li><Link to="/sobre-nos" className="text-muted-foreground hover:text-foreground">Sobre nós</Link></li>
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
