import type { Metadata } from "next";
import type { ReactNode } from "react";
import { allowIndexing, siteUrl } from "@/lib/site";
import "./globals.css";

const siteTitle = "Oliveiras Hortifruti | Hortifrúti em São José do Rio Preto";
const siteDescription =
  "Hortifrúti para restaurantes, hotéis, cozinhas profissionais e clientes residenciais em São José do Rio Preto e região. Solicite um orçamento pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: "%s | Oliveiras Hortifruti",
  },
  description: siteDescription,
  robots: { index: allowIndexing, follow: allowIndexing },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Oliveiras Hortifruti",
    title: siteTitle,
    description: siteDescription,
    url: "/",
    images: [{ url: "/images/produce-crates-jennifer-yung.webp", width: 1440, height: 960, alt: "Caixas com variedade de frutas, verduras e legumes." }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/produce-crates-jennifer-yung.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
