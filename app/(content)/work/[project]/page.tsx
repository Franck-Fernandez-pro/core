import { JOBS, fondamento } from "@/constant";
import { Metadata } from "next";
import { redirect } from "next/navigation";

interface Props {
  params: { project: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const JOB = JOBS.find(
    ({ href }) => href.replace("/work/", "") === params.project,
  );

  return {
    title: JOB?.title,
  };
}

export default function Project({ params }: Props) {
  const JOB = JOBS.find(
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
  } = JOB;

  const style = {
    div: "mx-auto",
    ul: "mb-4 border-b border-black text-sm font-semibold uppercase",
    li: "mt-4",
  };

  return (
    <section>
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

      <div className="mt-[15vh] pb-[15%]">
        <p
          className={`${fondamento.className} mx-auto max-w-[70%] text-5xl font-light leading-tight`}
        >
          {summary}
        </p>

        <div className="mx-auto mt-16 grid max-w-[75%] gap-3 lg:grid-cols-3">
          <div className={style.div}>
            <span className={style.ul}>ROLE</span>
            <ul className={style.li}>
              {role?.map((r, idx) => <li key={idx}>{r}</li>)}
            </ul>
          </div>
          <div className={style.div}>
            <span className={style.ul}>RESPONSIBILITIES</span>
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
    </section>
  );
}
