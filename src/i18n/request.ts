import { getRequestConfig } from "next-intl/server";

const locales = ["pt", "en", "es"] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as "pt" | "en" | "es")) {
    locale = "pt";
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});