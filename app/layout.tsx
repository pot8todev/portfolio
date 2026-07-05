import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://pot8todev.com"),
  title: `${profile.name} | Desenvolvedor Web Full Stack`,
  description:
    "Portfólio de Pedro Henrique Jesus. Desenvolvedor Web Full Stack com experiência em React, Node.js, TypeScript e automação de processos.",
  keywords: [
    "Pedro Henrique Jesus",
    "desenvolvedor web",
    "full-stack",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "Tesch Solutions",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} | Desenvolvedor Web Full Stack`,
    description:
      "Aplicações web e APIs REST com React, Node.js e TypeScript, do protótipo à produção.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body>
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
