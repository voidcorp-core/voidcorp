import type { MetadataRoute } from "next"

import { routing } from "@/routing"
import { localizedUrl, type SitePath } from "lib/site"

const PATHS: readonly SitePath[] = ["/", "/projets"]

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(path, locale),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((candidate) => [candidate, localizedUrl(path, candidate)])),
      },
    }))
  )
}
