import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Geist, Inter, JetBrains_Mono } from "next/font/google"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})



export const metadata: Metadata = {
  title: "MeshAI - RAG Chatbots",
  description: "Projeto Integrador VI",
  icons: "./logo-icon-nav.png",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className={cn("antialiased", "font-sans", `${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
