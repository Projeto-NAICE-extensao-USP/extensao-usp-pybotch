import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Link } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O conteúdo que você procura não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Extensão USP São Carlos — Python, Scratch e Robótica" },
      {
        name: "description",
        content:
          "Materiais didáticos abertos de Python, Scratch e Robótica para escolas públicas. Projeto extensionista da USP São Carlos.",
      },
      { property: "og:title", content: "Extensão USP São Carlos — Python, Scratch e Robótica" },
      {
        property: "og:description",
        content:
          "Banco aberto de projetos e planos de aula para professores de escolas públicas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Extensão USP São Carlos — Python, Scratch e Robótica" },
      { name: "description", content: "Projetos Extensão USP: Promovendo o conhecimento tecnológico para estudantes do ensino fundamental." },
      { property: "og:description", content: "Projetos Extensão USP: Promovendo o conhecimento tecnológico para estudantes do ensino fundamental." },
      { name: "twitter:description", content: "Projetos Extensão USP: Promovendo o conhecimento tecnológico para estudantes do ensino fundamental." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/355322e0-51c9-4b44-851b-47750e1f168b/id-preview-2ae7c912--91298f5e-50aa-4b65-976b-1265cab5786d.lovable.app-1780418207963.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/355322e0-51c9-4b44-851b-47750e1f168b/id-preview-2ae7c912--91298f5e-50aa-4b65-976b-1265cab5786d.lovable.app-1780418207963.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Karla:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
