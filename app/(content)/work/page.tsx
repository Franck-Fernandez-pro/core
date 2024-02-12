import { JOBS, fondamento } from "@/constant";
import Link from "next/link";

const linkProps = {
  className: "hover:italic hover:translate-x-1 px-2",
  style: {
    transition:
      "transform .3s ease-in-out, color .3s ease-in-out, font-size .3s ease-in-out",
  },
};

export default function Work() {
  return (
    <section className="lg:grid-rows-0 flex flex-col gap-7 lg:grid lg:grid-cols-3 lg:gap-3">
      <div className="flex flex-col pt-[20%] lg:h-screen lg:justify-center">
        <h1 className="mb-4 text-base font-medium uppercase tracking-[2px]">
          WORK
        </h1>
        <div className="space-y-4 text-[13px] tracking-[0.5px]">
          <p>
            WORK This is a showcase of my best work in a variety of fields
            including Graphic and Web Design, No-Code Development, Product
            Design and Product Management.
          </p>
          <p>
            The world of digital design and development is constantly evolving
            and so has my role over the last 15 years. I’m still learning and
            gaining new skills every day.
          </p>
        </div>
      </div>

      <div
        className={`${fondamento.className} flex flex-col justify-center text-[10vw] uppercase lg:col-span-2 lg:ml-20 lg:text-[6vw]`}
      >
        {JOBS.map(({ company, title, href }, idx) => (
          <span key={idx} className="flex-0 flex w-fit flex-col">
            <Link href={href} {...linkProps}>
              {title}
            </Link>
            <span className="-mt-4 mr-auto text-xs tracking-[2px]">
              - {company}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
