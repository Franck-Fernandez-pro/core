import { Fondamento } from "next/font/google";
import Image from "next/image";

const fondamento = Fondamento({ weight: "400", subsets: ["latin"] });
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
      <div className="flex justify-between pt-[12%]">
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

      <br />
      <br />
      <br />
      <p className="max-w-[75%] leading-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, fuga.
        Laboriosam quis, laborum quidem tempora cumque magni blanditiis natus
        pariatur, corrupti, consequuntur rerum. Labore inventore consectetur
        non, quos fuga repudiandae.
        <br />
        <br />
        <br />
        <span className={quoteClassName}>Experience</span>
        <br />
        <br />- {yearsDifference} years experience in Web Development
        <br />- Alyra, Développeur Blockchain
        <br />- Licence Pro DIM (Développeur Informatique Multisupports)
        <br />- DUT MMI (Métiers du Multimédia et de l'Internet)
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
