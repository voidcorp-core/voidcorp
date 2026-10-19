const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://voidcorp.io"

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Void Corp",
    alternateName: "VoidCorp",
    url: baseUrl,
    logo: `${baseUrl}/VoidCorp-onlyvoid-dark.png`,
    description:
      "Holding créative. Conseille avec Volpio et construit ses propres produits, listés avec leur statut réel.",
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "FR",
      },
    },
    sameAs: [
      "https://www.linkedin.com/in/florentpellegrin/",
      "https://x.com/fl0pe_",
      "https://github.com/folpe",
    ],
    founder: {
      "@type": "Person",
      name: "Florent Pellegrin",
      url: "https://www.linkedin.com/in/florentpellegrin/",
      sameAs: [
        "https://www.linkedin.com/in/florentpellegrin/",
        "https://x.com/fl0pe_",
        "https://github.com/folpe",
      ],
    },
    subOrganization: [
      {
        "@type": "Organization",
        name: "Volpio",
        url: "https://volpio.com",
        description: "Conseil et opérations.",
      },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Void Corp",
    url: baseUrl,
    description: "Du vide naît la structure",
    inLanguage: ["fr", "en"],
    publisher: {
      "@type": "Organization",
      name: "Void Corp",
      url: baseUrl,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
