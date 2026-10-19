import { defineRouting } from "next-intl/routing"

// The single owner of locale rules: middleware, navigation and request config all read it.
export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/projets": { fr: "/projets", en: "/projects" },
  },
})

export type Locale = (typeof routing.locales)[number]
