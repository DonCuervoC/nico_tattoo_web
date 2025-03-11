/* eslint-disable prettier/prettier */
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: "Artista del tatuaje en Bogota, Colombia",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Nicolas Cuervo",
    description: "Tattoo Artist in Bogotá, Colombia",
    images: "/logo/NACC LOGO-01.png",
  },
  keywords: [
    // Español (Colombia - Bogotá)
    "tatuador en Bogotá", "mejor tatuador Bogotá", "estudio de tatuajes Bogotá",
    "tatuajes personalizados Bogotá", "artista del tatuaje Bogotá", "tatuajes realistas Bogotá",
    "tatuador a color Bogotá", "tatuajes blackwork Bogotá", "tatuador minimalista Bogotá",
    "tatuajes geométricos Bogotá", "tatuajes tribales Bogotá", "tatuajes para hombres Bogotá",
    "tatuajes para mujeres Bogotá", "tatuajes en Chapinero Bogotá", "estudio de tattoo en Bogotá",
    "tatuador especializado en Bogotá", "tattoo Bogotá centro", "tattoo Bogotá norte",
    "tatuador profesional Bogotá", "tatuador con experiencia Bogotá", "tatuador fine line Bogotá",
    "mejor estudio de tatuajes Bogotá", "citas para tatuajes en Bogotá",
    "tatuajes personalizados en Bogotá", "tatuador de retratos en Bogotá",
    "diseño de tatuajes Bogotá", "tatuador en Colombia", "tatuajes en la Candelaria Bogotá",
    "arte corporal Bogotá", "tatuador artístico Bogotá",

    // Localidad de Suba (Bogotá)
    "tatuador en Suba Bogotá", "mejor tatuador en Suba", "estudio de tatuajes en Suba",
    "tattoo en Suba Bogotá", "tatuajes personalizados en Suba", "artista del tatuaje en Suba",
    "tatuajes realistas en Suba", "tatuajes a color en Suba", "tatuador blackwork en Suba",
    "tatuajes geométricos en Suba", "tatuajes minimalistas en Suba", "tatuador fine line en Suba",
    "mejor estudio de tatuajes en Suba", "citas para tatuajes en Suba",
    "tatuador profesional en Suba", "tatuador con experiencia en Suba",
    "diseño de tatuajes en Suba Bogotá", "tattoo shop en Suba",

    // Inglés (para turistas y clientes internacionales)
    "tattoo artist in Bogotá", "best tattoo studio Bogotá", "custom tattoos Bogotá",
    "realistic tattoos Bogotá", "black and grey tattoos Bogotá", "color tattoo artist Bogotá",
    "fine line tattoo Bogotá", "small tattoos Bogotá", "geometric tattoos Bogotá",
    "best tattoo shop in Bogotá", "tattoo studio in Bogotá Colombia",
    "professional tattoo artist Bogotá", "portrait tattoo artist Bogotá",
    "Bogotá tattoo booking", "American tourists tattoo Bogotá", "tattoo parlour Bogotá",
    "where to get a tattoo in Bogotá", "top-rated tattoo artist Bogotá",
    "body art Bogotá", "minimalist tattoos Bogotá", "handpoke tattoos Bogotá",
    "tattoo ink Bogotá", "tattoo aftercare Bogotá", "best tattoo places Bogotá",
    "tattoo artists Colombia", "Colombia tattoo tourism",
  ],

};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nc-website-ochre.vercel.app/"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Developed by</span>
                <p className="text-primary">@NelDev Inc</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
