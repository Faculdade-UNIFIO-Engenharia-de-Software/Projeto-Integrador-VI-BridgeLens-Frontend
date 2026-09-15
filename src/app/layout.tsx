import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeshAI - RAG Chatbots",
  description: "Projeto Integrador VI",
  icons: "./logo-icon-nav.png",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className="antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
