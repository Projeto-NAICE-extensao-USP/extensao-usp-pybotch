import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const professoresLinks = [
  { to: "/python" as const, label: "Python" },
  { to: "/scratch" as const, label: "Scratch" },
  { to: "/robotica" as const, label: "Robótica" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [profOpen, setProfOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-border shadow-sm overflow-hidden transition-transform group-hover:scale-105">
            <img
              src={logo.url}
              alt="Logo Extensão USP ICMC"
              className="h-8 w-8 object-contain"
            />
          </span>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-foreground">
              Extensão USP <span className="text-muted-foreground font-normal">|</span> ICMC
            </span>
            <span className="text-[11px] text-muted-foreground">
              Python · Scratch · Robótica
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1 ml-auto">
          <NavLinkItem to="/" exact label="Home" />

          {/* Dropdown Professores */}
          <div
            className="relative"
            onMouseEnter={() => setProfOpen(true)}
            onMouseLeave={() => setProfOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-muted"
              onClick={() => setProfOpen((v) => !v)}
              aria-expanded={profOpen}
            >
              Professores
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {profOpen && (
              <div className="absolute right-0 top-full pt-2">
                <div className="min-w-[180px] rounded-md border border-border bg-background shadow-lg overflow-hidden">
                  {professoresLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setProfOpen(false)}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                      activeProps={{ className: "block px-4 py-2.5 text-sm bg-muted text-foreground font-medium" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLinkItem to="/escolas" label="Escolas" />
          <NavLinkItem to="/sobre-nos" label="Sobre nós" />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl flex flex-col p-4 gap-1">
            <MobileLink to="/" exact label="Home" onClick={() => setOpen(false)} />
            <div className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Professores
            </div>
            {professoresLinks.map((l) => (
              <MobileLink key={l.to} to={l.to} label={l.label} onClick={() => setOpen(false)} />
            ))}
            <MobileLink to="/escolas" label="Escolas" onClick={() => setOpen(false)} />
            <MobileLink to="/sobre-nos" label="Sobre nós" onClick={() => setOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLinkItem({ to, label, exact }: { to: "/" | "/escolas" | "/sobre-nos"; label: string; exact?: boolean }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: !!exact }}
      className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-muted"
      activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md text-foreground bg-muted" }}
    >
      {label}
    </Link>
  );
}

function MobileLink({
  to,
  label,
  exact,
  onClick,
}: {
  to: "/" | "/escolas" | "/sobre-nos" | "/python" | "/scratch" | "/robotica";
  label: string;
  exact?: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: !!exact }}
      onClick={onClick}
      className="px-3 py-2.5 text-sm font-medium text-muted-foreground rounded-md hover:bg-muted hover:text-foreground"
      activeProps={{ className: "px-3 py-2.5 text-sm font-medium rounded-md text-foreground bg-muted" }}
    >
      {label}
    </Link>
  );
}
