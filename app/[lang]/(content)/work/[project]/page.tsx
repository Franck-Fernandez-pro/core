import { fondamento } from "@/constant";
import { Locale, getDictionary } from "@/utils/i18n-config";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

interface Props {
  params: { project: string; lang: Locale };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {
    work: { jobs },
  } = await getDictionary(params.lang);
  const JOB = jobs.find(
    ({ href }) => href.replace("/work/", "") === params.project,
  );

  return {
    title: JOB?.title,
  };
}

export default async function Project({ params }: Props) {
  const {
    work: { project, jobs },
  } = await getDictionary(params.lang);
  const JOB = jobs.find(
    ({ href }) => href.replace("/work/", "") === params.project,
  );

  if (!JOB) redirect("/work");

  const {
    title,
    companyLink,
    company,
    summary,
    responsibilities,
    role,
    stack,
    video,
    images,
    href,
  } = JOB;

  const style = {
    div: "lg:mx-auto",
    ul: "mb-4 border-b border-black text-sm font-semibold uppercase",
    li: "mt-4",
  };

  return (
    <section className="pb-14">
      <div className="flex h-[95vh] flex-col items-center justify-center pt-[20%]">
        <h1
          className={`${fondamento.className} text-center text-[14vw] font-light uppercase leading-none`}
        >
          {title}
        </h1>
        <h2>
          <a className="link" href={companyLink} target="_blank">
            {company}
          </a>
        </h2>
      </div>
      <div className="mt-[15vh] pb-16">
        <p
          className={`${fondamento.className} mx-auto max-w-[70%] text-5xl font-light leading-tight`}
        >
          {summary}
        </p>

        <div className="mx-auto mt-16 grid max-w-[75%] gap-5 lg:grid-cols-3">
          <div className={style.div}>
            <span className={style.ul}>{project.ROLE}</span>
            <ul className={style.li}>
              {role?.map((r, idx) => <li key={idx}>{r}</li>)}
            </ul>
          </div>
          <div className={style.div}>
            <span className={style.ul}>{project.RESPONSIBILITIES}</span>
            <ul className={style.li}>
              {responsibilities?.map((r, idx) => <li key={idx}>{r}</li>)}
            </ul>
          </div>
          <div className={style.div}>
            <span className={style.ul}>Stack</span>
            <ul className={style.li}>
              {stack?.map((s, idx) => <li key={idx}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {video && (
        <video
          className="mx-auto my-16 overflow-hidden rounded-xl shadow-2xl"
          width="1210"
          height="1025"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {images && (
        <div className="grid gap-5 lg:grid-cols-2">
          {images &&
            images.map((src, idx) => (
              <Image
                className={`mx-auto rounded-lg ${
                  href === "/work/skewerlab-editor" ||
                  href === "/work/skewerlab-player"
                    ? ""
                    : "shadow-lg"
                }`}
                key={idx}
                src={src}
                alt={`${title}-${idx}`}
                width={600}
                height={400}
              />
            ))}
        </div>
      )}
    </section>
  );
}
