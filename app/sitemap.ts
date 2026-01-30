import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://voidcorp.io"

  // Supported locales
  const locales = ["fr", "en"]

  // Generate entries for each locale
  const routes = locales.flatMap((locale) => [
    {
      url: locale === "fr" ? baseUrl : `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ])

  return routes
}
