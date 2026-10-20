import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import type { ReactNode } from "react"
import { z } from "zod"

import { Link } from "@/navigation"
import type { Locale } from "@/routing"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { ReplayConsentSettings } from "components/ReplayConsent"
import { pageMetadata } from "lib/site"

type Props = { params: Promise<{ locale: Locale }> }

const Items = z.array(z.string()).min(1)

const LINK_CLASS = "text-violet-300 underline underline-offset-4 transition-colors hover:text-white"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "privacy" })
  return pageMetadata("/confidentialite", locale, t("metaTitle"), t("metaDescription"))
}

export default async function Privacy({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("privacy")
  const items = (key: "audience" | "replays" | "recipients") => Items.parse(t.raw(`${key}.items`))

  return (
    <div className="relative min-h-screen bg-void-bg text-white">
      <Header />
      <main id="main-content" className="relative z-10 px-4 pt-32 pb-24 sm:px-8 md:pt-44 md:pb-32">
        <article className="mx-auto max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5">
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">{t("badge")}</span>
          </div>
          <h1 className="font-heading mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">{t("title")}</h1>
          <p className="mb-6 text-sm text-gray-400">{t("updated")}</p>
          <p className="text-base leading-relaxed text-gray-300/80 sm:text-lg">{t("lead")}</p>

          <Section title={t("controller.title")}>
            <p>{t("controller.body")}</p>
          </Section>

          <Section title={t("audience.title")}>
            <p>{t("audience.body")}</p>
            <List items={items("audience")} />
            <p>{t("audience.basis")}</p>
          </Section>

          <Section title={t("replays.title")}>
            <p>{t("replays.body")}</p>
            <List items={items("replays")} />
            <p>{t("replays.basis")}</p>
          </Section>

          <Section title={t("storage.title")}>
            <p>{t("storage.body")}</p>
          </Section>

          <Section title={t("recipients.title")}>
            <p>{t("recipients.body")}</p>
            <List items={items("recipients")} />
            <p>{t("recipients.transfers")}</p>
          </Section>

          <Section title={t("retention.title")}>
            <p>{t("retention.body")}</p>
          </Section>

          <Section title={t("rights.title")}>
            <p>
              {t.rich("rights.body", {
                email: (chunks) => (
                  <a href="mailto:admin@voidcorp.io" className={LINK_CLASS}>
                    {chunks}
                  </a>
                ),
              })}
            </p>
            <p>
              {t.rich("rights.complaint", {
                cnil: (chunks) => (
                  <a
                    href="https://www.cnil.fr/fr/adresser-une-plainte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK_CLASS}
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </Section>

          <Section id="choix" title={t("settings.title")}>
            <p>{t("settings.body")}</p>
            <ReplayConsentSettings />
          </Section>

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

function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-14 border-t border-white/10 pt-10 md:mt-16">
      <h2 className="font-heading mb-5 text-2xl sm:text-3xl">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-gray-300/80">{children}</div>
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-violet-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
