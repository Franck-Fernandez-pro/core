import { fondamento } from "@/constant";
import { Locale, getDictionary } from "@/utils/i18n-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function Contact(
  props: {
    params: Promise<{ lang: Locale }>;
  }
) {
  const params = await props.params;

  const {
    lang
  } = params;

  const { contact } = await getDictionary(lang);
  return (
    <section className="pt-[20%]">
      <h1 className={`${fondamento.className} text-[14vw] font-light`}>
        {contact.title}
      </h1>
      <p className="text-[13px] tracking-[0.5px]">
        {contact.description} <br />
        {contact.call_to_action}
        <br />
        <br />
        <a
          className="link"
          href="https://www.linkedin.com/in/franck-fernandez-31b393161/"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        /{" "}
        <a className="link" href="https://twitter.com/Akela_FR" target="_blank">
          Twitter
        </a>{" "}
        /{" "}
        <a
          className="link"
          href="https://github.com/Franck-Fernandez-pro"
          target="_blank"
        >
          Github
        </a>
      </p>
    </section>
  );
}
