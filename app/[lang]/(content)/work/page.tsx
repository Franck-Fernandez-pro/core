import { JOBS, fondamento } from "@/constant";
import { yearsDifference } from "@/utils";
import { Locale, getDictionary } from "@/utils/i18n-config";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobs",
};

const linkProps = {
  className: "hover:italic hover:translate-x-1 px-2",
  style: {
    transition:
      "transform .3s ease-in-out, color .3s ease-in-out, font-size .3s ease-in-out",
  },
};

export default async function Work({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { work } = await getDictionary(lang);
  return (
    <section className="lg:grid-rows-0 flex flex-col gap-7 lg:grid lg:grid-cols-3 lg:gap-3">
      <div className="flex flex-col pt-[20%] lg:h-screen lg:justify-center">
        <h1 className="mb-4 text-base font-medium uppercase tracking-[2px]">
          {work.title}
        </h1>
        <div className="space-y-4 text-[13px] tracking-[0.5px]">
          <p>{work.description[0]}</p>
          <p>
            {`${work.description[1]} ${yearsDifference(new Date(2019, 0, 1))} ${
              work.description[2]
            }`}
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
