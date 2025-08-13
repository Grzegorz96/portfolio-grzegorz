import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "de", "es", "it", "ja", "pl", "ru"],
  defaultLocale: "en",
  // localePrefix: "as-needed",
});
