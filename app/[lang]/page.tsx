import { fondamento } from "@/constant";
import { getDictionary } from "@/utils/i18n-config";
import { Locale } from "@/utils/i18n-config";
import Link from "next/link";

const linkProps = {
  className: "hover:italic hover:translate-x-1 pr-6",
  style: {
    transition:
      "transform .3s ease-in-out, color .3s ease-in-out, font-size .3s ease-in-out",
  },
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <main className="grid-cols-0 lg:grid-rows-0 grid gap-7 lg:grid-cols-3 lg:gap-3">
      <section className="flex flex-col pt-[30%] lg:h-screen lg:justify-center lg:pt-0">
        <h1 className="mb-4 text-base font-medium uppercase tracking-[2px]">
          Franck Fernandez
        </h1>
        <div className="space-y-4 text-[13px] tracking-[0.5px]">
          <p>Full stack & Web3 developer / Blockchain enthusiastic.</p>
          <p>
            Currently working full-time as web developer at{" "}
            <a
              className="link"
              href="https://www.linkedin.com/company/explorers-g/"
              target="_blank"
            >
              Explorer Lab
            </a>
          </p>
        </div>
      </section>

      <section
        className={`${fondamento.className} row-span-2 flex flex-col text-[15vw] uppercase lg:col-span-2 lg:row-span-1 lg:justify-end lg:pb-[10%] lg:text-right lg:text-[135px]`}
      >
        <span>
          <Link href="/work" {...linkProps}>
            Work
          </Link>
        </span>
        <span>
          <Link href="/about" {...linkProps}>
            About
          </Link>
        </span>
        <span>
          <Link href="/contact" {...linkProps}>
            Contact
          </Link>
        </span>
      </section>
    </main>
  );
}
