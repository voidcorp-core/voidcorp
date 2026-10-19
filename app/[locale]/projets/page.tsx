import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { Link } from "@/navigation"
import type { Locale } from "@/routing"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { hostOf, type Project, PROJECTS, type ProjectStatus } from "lib/registry"
import { pageMetadata } from "lib/site"

type Props = { params: Promise<{ locale: Locale }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "projects" })
  return pageMetadata("/projets", locale, t("metaTitle"), t("metaDescription"))
}

export default async function Projects({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("projects")

  return (
    <div className="relative min-h-screen bg-void-bg text-white">
      <Header />
      <main id="main-content" className="relative z-10 px-4 pt-32 pb-24 sm:px-8 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5">
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">{t("badge")}</span>
          </div>
          <h1 className="font-heading mb-6 text-4xl leading-tight sm:text-5xl md:text-6xl">{t("title")}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-gray-300/80 sm:text-lg">{t("lead")}</p>

          <ul className="mt-14 border-t border-white/10 md:mt-20">
            {PROJECTS.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </ul>

          <Link
            href="/"
            className="mt-12 inline-flex min-h-11 items-center rounded-full border border-white/20 bg-white/5 px-6 text-sm font-medium transition-colors duration-300 hover:border-white/40 hover:bg-white/10"
          >
            &larr; {t("back")}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

async function ProjectRow({ project }: { project: Project }) {
  const t = await getTranslations("projects")
  const name = project.name ?? t(`entries.${project.slug}.name`)
  const is_stopped = project.status === "stopped"

  return (
    <li className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10 md:py-10">
      <div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h2
            className={`font-heading text-2xl sm:text-3xl ${
              is_stopped ? "text-gray-500 line-through decoration-brand-violet decoration-2" : "text-white"
            }`}
          >
            {name}
          </h2>
          <span className="text-xs tracking-widest text-gray-400 uppercase">{t(`entries.${project.slug}.nature`)}</span>
        </div>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-300/80">{t(`entries.${project.slug}.summary`)}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-end">
        <StatusPill status={project.status} label={t(`status.${project.status}`)} />
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 text-sm font-medium transition-colors duration-300 hover:border-white/40 hover:bg-white/10"
          >
            {t("open")} <span className="text-gray-400">{hostOf(project.url)}</span> &rarr;
          </a>
        ) : (
          <span className="text-sm text-gray-500">{t("noAddress")}</span>
        )}
      </div>
    </li>
  )
}

const STATUS_STYLE: Record<ProjectStatus, { pill: string; dot: string }> = {
  live: { pill: "border-brand-pink/40 text-brand-pink", dot: "bg-brand-pink" },
  building: { pill: "border-violet-400/40 text-violet-300", dot: "bg-violet-400" },
  internal: { pill: "border-white/20 text-gray-300", dot: "border border-gray-400" },
  reflection: { pill: "border-white/20 text-gray-300", dot: "border border-dashed border-gray-400" },
  stopped: { pill: "border-white/10 text-gray-500", dot: "bg-gray-600" },
}

// Pink belongs to "live" alone, so a visitor finds what they can open at a glance.
function StatusPill({ status, label }: { status: ProjectStatus; label: string }) {
  const style = STATUS_STYLE[status]
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${style.pill}`}>
      <span aria-hidden="true" className={`h-2 w-2 rounded-full ${style.dot}`} />
      {label}
    </span>
  )
}
