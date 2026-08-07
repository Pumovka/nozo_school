import type { Metadata } from "next";
import "./globals.scss";

import { Header } from "@/widgets/header/ui/Header";

export const metadata: Metadata = {
  title: "NOZO School",
  description: "Accessibility-first learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
