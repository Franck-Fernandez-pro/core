import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Franck Fernandez - Full stack developer",
  description:
    "Full stack developer / Web3 developer / Blockchain enthusiastic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={`${montserrat.className} h-full bg-[#ece7e1] text-[#1a1818]`}
      >
        <Navbar />
        <div className="mx-auto h-full max-w-[85%] ">
          {children}
        </div>
      </body>
    </html>
  );
}
