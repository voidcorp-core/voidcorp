import type { Metadata } from "next"

import { getPathname } from "@/navigation"
import { type Locale, routing } from "@/routing"
import { env } from "env.mjs"

export const SITE_URL = env.NEXT_PUBLIC_SITE_URL

export type SitePath = "/" | "/projets" | "/confidentialite" | "/mentions-legales"

// Absolute URL of a page in a locale, with the locale's own slug and prefix rules.
export function localizedUrl(path: SitePath, locale: Locale): string {
  const pathname = getPathname({ href: path, locale })
  return `${SITE_URL}${pathname === "/" ? "" : pathname}`
}

export function pageMetadata(path: SitePath, locale: Locale, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: localizedUrl(path, locale),
      languages: Object.fromEntries(routing.locales.map((candidate) => [candidate, localizedUrl(path, candidate)])),
    },
    openGraph: {
      type: "website",
      siteName: "Void Corp",
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: localizedUrl(path, locale),
      title,
      description,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, creator: "@fl0pe_", images: ["/og-image.png"] },
  }
}
