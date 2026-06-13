import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://leonardobrandao.dev"),
  title: `${profile.name} | Desenvolvedor de IA e software`,
  description:
    "Portfólio de Leonardo Brandão. Desenvolvedor de IA generativa, automações e sistemas full-stack. Python, Go, LangChain, Open Finance.",
  keywords: [
    "Leonardo Brandão",
    "desenvolvedor",
    "inteligência artificial",
    "IA generativa",
    "full-stack",
    "Python",
    "Go",
    "LangChain",
    "Open Finance",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} | Desenvolvedor de IA e software`,
    description:
      "IA generativa, automações e sistemas full-stack, do protótipo à produção.",
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
