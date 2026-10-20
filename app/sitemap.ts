import type { MetadataRoute } from "next"

import { routing } from "@/routing"
import { localizedUrl, type SitePath } from "lib/site"

const PATHS: readonly SitePath[] = ["/", "/projets", "/confidentialite", "/mentions-legales"]

const PRIORITY: Record<SitePath, number> = {
  "/": 1,
  "/projets": 0.8,
  "/confidentialite": 0.3,
  "/mentions-legales": 0.3,
}

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(path, locale),
      changeFrequency: "monthly" as const,
      priority: PRIORITY[path],
      alternates: {
        languages: Object.fromEntries(routing.locales.map((candidate) => [candidate, localizedUrl(path, candidate)])),
      },
    }))
  )
}
