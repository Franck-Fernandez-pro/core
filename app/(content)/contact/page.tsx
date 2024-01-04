import { Fondamento } from "next/font/google";

const fondamento = Fondamento({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  return (
    <section className="pt-[20%]">
      <h1 className={`${fondamento.className} text-[14vw] font-light`}>
        Hello.
      </h1>
      <p className="text-[13px] tracking-[0.5px]">
        Need a beautiful, well-structured website that you can own and maintain
        yourself? <br />
        Get in touch.
        <br />
        <br />
        <a
          className="link"
          href="https://www.linkedin.com/in/franck-fernandez-31b393161/"
        >
          LinkedIn
        </a>{" "}
        /{" "}
        <a className="link" href="https://twitter.com/Akela_FR">
          Twitter
        </a>{" "}
        /{" "}
        <a className="link" href="https://github.com/Franck-Fernandez-pro">
          Github
        </a>
      </p>
    </section>
  );
}
