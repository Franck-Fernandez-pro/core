import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Locale } from "@/utils/i18n-config";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Franck Fernandez",
    default: "Franck Fernandez | Full stack developer",
  },
  description: "Full stack & Web3 developer / Blockchain enthusiastic",
};

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ lang: Locale }>;
  }
) {
  const params = await props.params;

  const {
    children
  } = props;

  return (
    <html lang={params.lang} className="h-full">
      <body
        className={`${montserrat.className} h-full bg-[#ece7e1] text-[#1a1818]`}
      >
        <Navbar lang={params.lang} />
        <div className="mx-auto h-full max-w-[85%] ">{children}</div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
