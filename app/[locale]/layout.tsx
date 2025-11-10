import "styles/tailwind.css"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { type Locale, locales } from "../../i18n"

export const metadata: Metadata = {
  icons: {
    icon: "/VoidCorp-onlyvoid-dark.png",
  },
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
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
