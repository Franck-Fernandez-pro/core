import { fondamento } from "@/constant";
import { yearsDifference } from "@/utils";
import { Locale, getDictionary } from "@/utils/i18n-config";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

const quoteClassName = `${fondamento.className} text-xl font-medium uppercase leading-7 tracking-[4px]`;

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { about } = await getDictionary(lang);

  return (
    <section className="pb-10">
      <div className="mb-5 flex justify-between pt-[12%]">
        <div className={fondamento.className}>
          <h1 className="text-[14vw] font-light">{about.title}</h1>
          <span className="md:leading-1 pb-[2%] text-[46px] leading-[50px]">
            {about.subheading}
          </span>
        </div>

        <Image
          className="hidden !h-auto !w-[30%]"
          src="/about.jpeg"
          width={747}
          height={1051}
          alt="Franck Fernandez"
        />
      </div>

      <p className="leading-8 md:max-w-[75%]">
        {about.paragraphs.map((p: string) => (
          <>
            {p}
            <br />
            <br />
          </>
        ))}
        <br />
        <span className={quoteClassName}>{about.experience.title}</span>
        <br />
        <br />
        {`- ${yearsDifference(new Date(2019, 0, 1))} ${about.experience.one}`}
        {about.experience.items.map((i: string) => (
          <>
            <br />- {i}
          </>
        ))}
        <br />
        <br />
        <br />
        <span className={quoteClassName}>{about.skills.title}</span>
        <br />
        <br />
        {about.skills.items[0]}
        <br />
        <br />
        <a
          className="link"
          href="https://www.linkedin.com/in/franck-fernandez-31b393161/"
          target="_blank"
        >
          {about.LinkedIn}
        </a>
      </p>
    </section>
  );
}
