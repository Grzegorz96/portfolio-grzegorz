import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "de", "es", "it", "jp", "pl", "ru"],
  defaultLocale: "en",
  // localeDetection: false,
  // localePrefix: "always",
});
