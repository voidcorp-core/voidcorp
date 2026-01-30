"use client"

import { Eye, Hammer, Pen } from "lucide-react"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export function PrincipleSection() {
  const t = useTranslations()

  return (
    <section className="relative px-8 py-24 md:py-48">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="font-heading mb-4 text-4xl">{t("principle.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* Observe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <div className="mb-6 inline-block">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-violet-400/50 bg-linear-to-br from-violet-500/30 to-violet-600/10 shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500 group-hover:border-violet-400/70 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                <Eye className="h-10 w-10 text-violet-300" strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-2xl">{t("principle.observe.title")}</h3>
            <p className="leading-relaxed text-neutral-300">{t("principle.observe.description")}</p>
          </motion.div>

          {/* Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <div className="mb-6 inline-block">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-fuchsia-400/50 bg-linear-to-br from-fuchsia-500/30 to-fuchsia-600/10 shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-500 group-hover:border-fuchsia-400/70 group-hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]">
                <Pen className="h-10 w-10 text-fuchsia-300" strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-2xl">{t("principle.design.title")}</h3>
            <p className="leading-relaxed text-neutral-300">{t("principle.design.description")}</p>
          </motion.div>

          {/* Forge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <div className="mb-6 inline-block">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-purple-400/50 bg-linear-to-br from-purple-500/30 to-purple-600/10 shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 group-hover:border-purple-400/70 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                <Hammer className="h-10 w-10 text-purple-300" strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-2xl">{t("principle.forge.title")}</h3>
            <p className="leading-relaxed text-neutral-300">{t("principle.forge.description")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
