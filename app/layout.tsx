import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Franck Fernandez - Développeur Full Stack",
  description: "Franck Fernandez - Développeur Full Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} bg-[#ece7e1] text-[#1a1818]`}>
        {children}
      </body>
    </html>
  );
}
