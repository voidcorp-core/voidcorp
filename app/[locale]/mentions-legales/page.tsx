import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { z } from "zod"

import { Link } from "@/navigation"
import type { Locale } from "@/routing"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { LegalSection } from "components/LegalSection"
import { pageMetadata } from "lib/site"

type Props = { params: Promise<{ locale: Locale }> }

const Items = z.array(z.string()).min(1)

const LINK_CLASS = "text-violet-300 underline underline-offset-4 transition-colors hover:text-white"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "legal" })
  return pageMetadata("/mentions-legales", locale, t("metaTitle"), t("metaDescription"))
}

export default async function LegalNotice({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("legal")
  const publisher = Items.parse(t.raw("publisher.items"))

  return (
    <div className="relative min-h-screen bg-void-bg text-white">
      <Header />
      <main id="main-content" className="relative z-10 px-4 pt-32 pb-24 sm:px-8 md:pt-44 md:pb-32">
        <article className="mx-auto max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5">
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">{t("badge")}</span>
          </div>
          <h1 className="font-heading mb-6 text-4xl leading-tight sm:text-5xl md:text-6xl">{t("title")}</h1>
          <p className="text-base leading-relaxed text-gray-300/80 sm:text-lg">{t("lead")}</p>

          <LegalSection title={t("publisher.title")}>
            <ul className="space-y-1">
              {publisher.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p>
              {t.rich("publisher.contact", {
                email: (chunks) => (
                  <a href="mailto:admin@voidcorp.io" className={LINK_CLASS}>
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </LegalSection>

          <LegalSection title={t("director.title")}>
            <p>{t("director.body")}</p>
          </LegalSection>

          <LegalSection title={t("host.title")}>
            <p>
              {t.rich("host.body", {
                link: (chunks) => (
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </LegalSection>

          <LegalSection title={t("ip.title")}>
            <p>{t("ip.body")}</p>
          </LegalSection>

          <LegalSection title={t("data.title")}>
            <p>
              {t.rich("data.body", {
                link: (chunks) => (
                  <Link href="/confidentialite" className={LINK_CLASS}>
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </LegalSection>

          <Link
            href="/"
            className="mt-16 inline-flex min-h-11 items-center rounded-full border border-white/20 bg-white/5 px-6 text-sm font-medium transition-colors duration-300 hover:border-white/40 hover:bg-white/10"
          >
            &larr; {t("back")}
          </Link>
        </article>
      </main>
      <Footer />
    </div>
  )
}
