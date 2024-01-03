import { Fondamento } from "next/font/google";
import Link from "next/link";

const fondamento = Fondamento({ weight: "400", subsets: ["latin"] });
const linkProps = {
  className: "hover:italic hover:translate-x-1",
  style: {
    transition:
      "transform .3s ease-in-out, color .3s ease-in-out, font-size .3s ease-in-out",
  },
};

export default function Home() {
  return (
    <main className="mx-auto max-w-[80%]">
      <section className="pt-[30%]">
        <h1 className="mb-4 text-base font-medium uppercase tracking-[2px]">
          Franck Fernandez
        </h1>
        <div className="space-y-4 text-[13px] tracking-[0.5px]">
          <p>
            Full stack developer / Web3 developer / Blockchain enthusiastic.
          </p>
          <p>
            Currently working full-time as a web developer at{" "}
            <a
              className="delay-250 cursor-pointer border-b-2 border-solid border-[#000] no-underline transition-all hover:border-transparent hover:line-through"
              href="https://www.linkedin.com/company/explorers-g/"
              target="_blank"
            >
              Explorer Lab
            </a>
          </p>
        </div>
      </section>

      <section
        className={`${fondamento.className} flex flex-col pt-[10%] text-9xl uppercase`}
      >
        <Link href="/work" {...linkProps}>
          Work
        </Link>
        <Link href="/about" {...linkProps}>
          About
        </Link>
        <Link href="/contact" {...linkProps}>
          Contact
        </Link>
      </section>
    </main>
  );
}
