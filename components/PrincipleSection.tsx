"use client"

import { Eye, Hammer, Pen } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import { useTranslations } from "next-intl"
import { useRef } from "react"

export function PrincipleSection() {
  const t = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={sectionRef} className="relative px-4 py-16 sm:px-8 sm:py-24 md:py-48 overflow-hidden">
      <motion.div style={{ y }} className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-20"
        >
          <h2 className="font-heading mb-4 text-2xl sm:text-3xl md:text-4xl">{t("principle.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:gap-16 md:grid-cols-3">
          {/* Observe */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="group text-center transition-transform duration-500 ease-out hover:-translate-y-2"
          >
            <div className="mb-6 inline-block">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-brand-violet/60 group-hover:bg-white/10 sm:h-20 sm:w-20">
                <Eye className="h-8 w-8 text-white transition-all duration-500 ease-out group-hover:rotate-12 group-hover:text-brand-violet sm:h-10 sm:w-10" strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-xl transition-colors duration-300 group-hover:text-brand-violet sm:text-2xl">{t("principle.observe.title")}</h3>
            <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">{t("principle.observe.description")}</p>
          </motion.div>

          {/* Design */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="group text-center transition-transform duration-500 ease-out hover:-translate-y-2"
          >
            <div className="mb-6 inline-block">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-brand-pink/60 group-hover:bg-white/10 sm:h-20 sm:w-20">
                <Pen className="h-8 w-8 text-white transition-all duration-500 ease-out group-hover:rotate-12 group-hover:text-brand-pink sm:h-10 sm:w-10" strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-xl transition-colors duration-300 group-hover:text-brand-pink sm:text-2xl">{t("principle.design.title")}</h3>
            <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">{t("principle.design.description")}</p>
          </motion.div>

          {/* Forge */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="group text-center transition-transform duration-500 ease-out hover:-translate-y-2"
          >
            <div className="mb-6 inline-block">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-brand-violet/60 group-hover:bg-white/10 sm:h-20 sm:w-20">
                <Hammer className="h-8 w-8 text-white transition-all duration-500 ease-out group-hover:-rotate-12 group-hover:text-brand-violet sm:h-10 sm:w-10" strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-xl transition-colors duration-300 group-hover:text-brand-violet sm:text-2xl">{t("principle.forge.title")}</h3>
            <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">{t("principle.forge.description")}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
