import { fondamento } from "@/constant";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

const quoteClassName = `${fondamento.className} text-xl font-medium uppercase leading-7 tracking-[4px]`;

export default function About() {
  const currentDate = new Date();
  const referenceDate = new Date(2019, 0, 1);
  const timeDifferenceInMilliseconds =
    currentDate.getTime() - referenceDate.getTime();
  const yearsDifference = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25),
  );

  return (
    <section className="pb-10">
      <div className="mb-5 flex justify-between pt-[12%]">
        <div className={fondamento.className}>
          <h1 className="text-[14vw] font-light">About</h1>
          <span className="pb-[2%] text-[46px] leading-10">
            I'm Franck. A developer, maker and problem solver.
          </span>
        </div>

        <Image
          className="hidden !h-auto !w-[30%] md:block"
          src="/about.jpeg"
          width={747}
          height={1051}
          alt="Franck Fernandez"
        />
      </div>

      <p className="max-w-[75%] leading-8">
        {/* C'est à l'intersection de l'innovation et de la technologie que j'ai toujours trouvé ma passion. Qu'il s'agisse de Typescript, NextJS, Solidity, Storybook ou CSS, j'ai plongé dans diverses technologies avec un esprit d'innovation qui remonte à mes débuts avec simplement HTML et CSS.

En 2024, mon parcours s'étend de la conception d'application web à la conception de smart contract, player vidéo, le développement web mais, surtout, la conception d'application ayant de l'impact. Chaque étape, petite ou grande, m'a permis d'arriver là où je suis aujourd'hui.

Ce qui me passionne le plus dans le métier de Développeur, c'est la capacité de concevoir des applications qui servent un objectif et répondent à des problèmes réels. Cela va au-delà des simples boutons de site web, et implique une passion pour la conception d'application qui aident vraiment les gens. Qu'il s'agisse d'améliorer leur processus de création vidéo, de simplfier un processus, il s'agit avant tout d'avoir un impact significatif.

En embrassant la polyvalence, j'ai navigué dans les domaines autour de mon rôle, de web design, scrum master ou encore référent technique, je trouve la joie dans la nature multidimensionnelle de mon travail. Comprendre les besoins des utilisateurs, identifier les problèmes pertinents et fournir rapidement des solutions efficaces sont les clés de voûte d'une bonne conception de produit. Je souhaite une itération et une amélioration continues, ainsi qu'un potentiel illimité à l'intersection de la technologie et de l'objectif. */}
        It's at the intersection of innovation and technology that I've always
        found my passion. Whether it's Typescript, NextJS, Solidity, Storybook
        or CSS, I've immersed myself in various technologies with a spirit of
        innovation that goes back to my early days with just HTML and CSS.
        <br />
        <br />
        In 2024, my career extends from web application development to smart
        contract, video player design, web development and, above all,
        high-impact application design. Each step, big or small, has helped me
        get to where I am today.
        <br />
        <br />
        What excites me most about being a developer is the ability to design
        applications that serve a purpose and solve real problems. This goes
        beyond simple website buttons, and involves a passion for designing
        applications that really help people. Whether it's improving their video
        creation process, simplifying a process, it's all about making a
        meaningful impact.
        <br />
        <br />
        Embracing versatility, I've navigated the domains around my job, from
        web design to scrum master to technical referent, I find joy in the
        multi-dimensional nature of my work. Understanding user needs,
        identifying relevant issues and delivering effective solutions quickly
        are the cornerstones of good product design. I strive for continuous
        iteration and improvement, and unlimited potential at the intersection
        of technology and purpose.
        <br />
        <br />
        <br />
        <span className={quoteClassName}>Experience</span>
        <br />
        <br />- {yearsDifference} years experience in Web Development
        <br />- Alyra, Blockchain Developer
        <br />- Licence Pro DIM (Multi-media computer developer)
        <br />- DUT MMI (Multimedia and Internet professions)
        <br />
        <br />
        <br />
        <span className={quoteClassName}>Skills</span>
        <br />
        <br />
        TypeScript / Solidity / ReactJS / NextJS / Hardhat / Tailwind /
        Storybook / Cypress / CI-CD / Agile Methodologies / Collaboration /
        Webflow Development
        <br />
        <br />
        <a
          className="link"
          href="https://www.linkedin.com/in/franck-fernandez-31b393161/"
          target="_blank"
        >
          Learn more on LinkedIn
        </a>
      </p>
    </section>
  );
}
