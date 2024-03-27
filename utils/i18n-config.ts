import "server-only";

export const i18n = {
  defaultLocale: "fr",
  locales: ["en", "fr"],
} as const;
export type Locale = (typeof i18n)["locales"][number];

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  fr: () => import("../dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.fr();
