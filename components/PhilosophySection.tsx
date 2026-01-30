"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useTranslations } from "next-intl"
import { useRef } from "react"

export function PhilosophySection() {
  const t = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={sectionRef} className="relative px-8 py-24 md:py-48 overflow-hidden">
      <motion.div style={{ y }} className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5">
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
              {t("manifesto.badge")}
            </span>
          </div>

          {/* Main quote */}
          <blockquote className="font-heading mb-8 text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            "{t("manifesto.quote")}"
          </blockquote>

          <p className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-gray-300/90 sm:text-lg md:text-xl">
            {t("manifesto.textBefore")}
            <span className="text-[#a78bfa] font-medium">{t("manifesto.structuredEmptiness")}</span>
            {t("manifesto.textAfter")}
          </p>

          {/* Core principles */}
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate-float-gentle-1 rounded-full border border-white/20 bg-white/5 px-6 py-3"
            >
              <span className="text-sm font-medium text-white">{t("manifesto.principles.ship")}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="animate-float-gentle-2 rounded-full border border-white/20 bg-white/5 px-6 py-3"
            >
              <span className="text-sm font-medium text-white">{t("manifesto.principles.data")}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="animate-float-gentle-3 rounded-full border border-white/20 bg-white/5 px-6 py-3"
            >
              <span className="text-sm font-medium text-white">{t("manifesto.principles.kill")}</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
