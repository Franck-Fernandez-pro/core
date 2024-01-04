import { Fondamento } from "next/font/google";
import Link from "next/link";

const fondamento = Fondamento({ weight: "400", subsets: ["latin"] });
const linkProps = {
  className: "hover:italic hover:translate-x-1 px-2",
  style: {
    transition:
      "transform .3s ease-in-out, color .3s ease-in-out, font-size .3s ease-in-out",
  },
};

export default function Home() {
  return (
    <main className="grid grid-rows-2 lg:grid-cols-3">
      <section className="mt-[30%] lg:mt-[120%]">
        <h1 className="mb-4 text-base font-medium uppercase tracking-[2px]">
          Franck Fernandez
        </h1>
        <div className="space-y-4 text-[13px] tracking-[0.5px]">
          <p>
            Full stack developer / Web3 developer / Blockchain enthusiastic.
          </p>
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
        className={`${fondamento.className} flex flex-col pt-[10%] text-right text-[135px] uppercase lg:col-span-2`}
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
