import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "prick_trip — нестандартные путешествия по Европе",
  description:
    "Экспедиции в малых группах с гидом @lingvopunk: ферратты, сплавы и высокогорные маршруты по всей Европе.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="bg-[#0f0f17]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
