"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export function PhilosophySection() {
  const t = useTranslations()

  return (
    <section className="relative px-8 py-24 md:py-48">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/15 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            <span className="text-xs font-semibold tracking-widest text-violet-300 uppercase">
              {t("manifesto.badge")}
            </span>
          </div>

          {/* Main quote */}
          <blockquote className="font-heading mb-8 text-4xl font-bold text-white md:text-5xl">
            "{t("manifesto.quote")}"
          </blockquote>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-300/90">
            {t("manifesto.textBefore")}
            <span className="text-violet-400 font-medium">{t("manifesto.structuredEmptiness")}</span>
            {t("manifesto.textAfter")}
          </p>

          {/* Core principles */}
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-full border border-violet-400/50 bg-violet-500/20 px-6 py-3 backdrop-blur-sm shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <span className="text-sm font-medium text-violet-200">{t("manifesto.principles.ship")}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-full border border-fuchsia-400/50 bg-fuchsia-500/20 px-6 py-3 backdrop-blur-sm shadow-[0_0_20px_rgba(236,72,153,0.3)]"
            >
              <span className="text-sm font-medium text-fuchsia-200">{t("manifesto.principles.data")}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-full border border-purple-400/50 bg-purple-500/20 px-6 py-3 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              <span className="text-sm font-medium text-purple-200">{t("manifesto.principles.kill")}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
