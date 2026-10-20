import type { Metadata } from "next";
import "./globals.scss";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export const metadata: Metadata = {
  title: "NOZO School — Образование без барьеров",
  description:
    "Доступная образовательная платформа: онлайн-курсы с субтитрами, сурдопереводом и расшифровками",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
