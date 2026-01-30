import "styles/tailwind.css"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

import { JsonLd } from "components/JsonLd"
import { type Locale, locales } from "../../i18n"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://voidcorp.io"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isEnglish = locale === "en"

  const title = isEnglish
    ? "Void Corp | Where structure emerges from the void"
    : "Void Corp | Du vide naît la structure"

  const description = isEnglish
    ? "Void Corp is the creative holding of the Volpio and Void Factory ecosystem. We build SaaS, even imperfect ones. Build More. Move Fast. Be Better."
    : "Void Corp est la holding créative de l'écosystème Volpio et Void Factory. Nous construisons des SaaS, même imparfaits. Build More. Move Fast. Be Better."

  const ogDescription = isEnglish
    ? "The creative holding of the Volpio and Void Factory ecosystem. Build More. Move Fast. Be Better."
    : "La holding créative de l'écosystème Volpio et Void Factory. Build More. Move Fast. Be Better."

  const canonicalUrl = isEnglish ? `${baseUrl}/en` : baseUrl

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: "%s | Void Corp",
    },
    description,
    keywords: [
      "SaaS",
      "builder",
      "indie maker",
      "startup",
      "MVP",
      "Void Factory",
      "Volpio",
      "automatisation",
      "IA",
    ],
    authors: [{ name: "Void Corp" }],
    creator: "Void Corp",
    publisher: "Void Corp",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/VoidCorp-onlyvoid-dark.png",
      apple: "/VoidCorp-onlyvoid-dark.png",
    },
    openGraph: {
      type: "website",
      locale: isEnglish ? "en_US" : "fr_FR",
      alternateLocale: isEnglish ? "fr_FR" : "en_US",
      url: canonicalUrl,
      siteName: "Void Corp",
      title,
      description: ogDescription,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: isEnglish
            ? "Void Corp - Where structure emerges from the void"
            : "Void Corp - Du vide naît la structure",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
      images: ["/og-image.png"],
      creator: "@fl0pe_",
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: baseUrl,
        en: `${baseUrl}/en`,
      },
    },
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <JsonLd />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
