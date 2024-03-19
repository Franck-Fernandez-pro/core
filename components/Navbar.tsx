"use client";

import { Locale } from "@/utils/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(props: { lang: Locale }) {
  const pathName = usePathname();

  function redirectedPathName(locale: Locale) {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  }

  return (
    <nav className="fixed flex h-full w-[6%] flex-col items-center justify-start pt-[10%] md:pt-[5%]">
      <Link
        href={`/${props.lang}`}
        style={{
          flex: "0 auto",
        }}
        className="link mb-10 -rotate-90 !border-transparent pl-5 pr-4 text-center text-[10px] font-medium uppercase tracking-[5px]"
      >
        HOME
      </Link>

      <div className="mb-20 mt-3 h-24 w-[1px] bg-[#1a1818]"></div>

      <div className="mb-10 mt-auto hidden pl-5 pr-4 text-center text-[10px] font-medium uppercase md:block">
        {props.lang === "en" ? (
          <Link href={redirectedPathName("fr")} locale="fr">
            FR
          </Link>
        ) : (
          <Link href={redirectedPathName("en")} locale="en">
            ENG
          </Link>
        )}
      </div>

      <div className="mb-10 hidden -rotate-90 pl-5 pr-4 text-center text-[10px] font-medium uppercase tracking-[5px] md:block">
        ©2024
      </div>
    </nav>
  );
}
