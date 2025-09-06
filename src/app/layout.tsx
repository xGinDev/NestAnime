import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ver Anime Online Gratis en HD | NestAnime sin Anuncios",
  description:
    "NestAnime: mira anime online gratis en HD, subtitulado y doblado al español. Sin anuncios, sin cortes, disfruta tus series y películas favoritas siempre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-black`}>
        <Header />
        <div className="pt-10 px-4 p-2 md:max-w-7xl md:mx-auto md:py-6 lg:pt-34">
          {children}
        </div>
      </body>
    </html>
  );
}
