import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en-US", "zh-Hans-CN"],

  // Used when no locale matches
  defaultLocale: "zh-Hans-CN",

  localePrefix: {
    mode: "as-needed",
    prefixes: {
      "en-US": "/en",
      "zh-Hans-CN": "/zh",
    },
  },
});
