"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useTranslations } from "next-intl"
import { useRef } from "react"

import { EcosystemCard } from "components/EcosystemCard"

export function EcosystemSection() {
  const t = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={sectionRef} id="ecosystem" className="relative px-4 py-16 scroll-mt-24 sm:px-8 sm:py-24 md:py-48 overflow-hidden">
      <motion.div style={{ y }} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-20"
        >
          <h2 className="font-heading mb-4 text-2xl sm:text-3xl md:text-4xl">{t("ecosystem.title")}</h2>
          <p className="text-sm text-gray-400 sm:text-base">{t("ecosystem.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          <EcosystemCard
            cardKey="voidfactory"
            accentColor="blue"
            delay={0}
            navigatesTo="https://factory.voidcorp.io"
          />
          <EcosystemCard
            cardKey="volpio"
            accentColor="orange"
            delay={0.2}
            navigatesTo="https://volpio.com"
          />
          <EcosystemCard cardKey="future" accentColor="purple" delay={0.4} isPlaceholder />
        </div>
      </motion.div>
    </section>
  )
}
