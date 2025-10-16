import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

import { cn } from "@/lib/utils";

const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "prick_trip — нестандартные путешествия по Европе",
  description:
    "Экспериментальные походы по Европе с @lingvopunk: малые группы, максимум впечатлений и забота о каждом участнике.",
  metadataBase: new URL("https://prick-trip.example"),
  openGraph: {
    title: "prick_trip",
    description:
      "Нестандартные путешествия по Европе с гидом @lingvopunk. Малые группы, максимум впечатлений и живые эмоции.",
    url: "https://prick-trip.example",
    siteName: "prick_trip",
    locale: "ru_RU",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={cn("bg-[#0f0f17] text-foreground min-h-screen font-sans", manrope.className)}>
        {children}
      </body>
    </html>
  );
}
