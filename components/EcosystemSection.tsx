"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { EcosystemCard } from "components/EcosystemCard"

export function EcosystemSection() {
  const t = useTranslations()

  return (
    <section className="relative px-8 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="font-heading mb-4 text-4xl">{t("ecosystem.title")}</h2>
          <p className="text-gray-400">{t("ecosystem.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <EcosystemCard
            cardKey="voidfactory"
            gradient="from-violet-600/20 to-purple-600/20"
            delay={0}
            navigatesTo="https://factory.voidcorp.io"
          />
          <EcosystemCard
            cardKey="volpio"
            gradient="from-fuchsia-600/20 to-pink-600/20"
            delay={0.2}
            navigatesTo="https://volpio.com"
          />
          <EcosystemCard cardKey="future" gradient="from-blue-600/20 to-cyan-600/20" delay={0.4} isPlaceholder />
        </div>
      </div>
    </section>
  )
}
