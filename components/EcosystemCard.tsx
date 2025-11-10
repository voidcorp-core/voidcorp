"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"

interface EcosystemCardProps {
  cardKey: string
  gradient: string
  delay: number
  isPlaceholder?: boolean
  navigatesTo?: string
}

export function EcosystemCard({ cardKey, gradient, delay, isPlaceholder, navigatesTo }: EcosystemCardProps) {
  const t = useTranslations(`ecosystem.${cardKey}`)
  const tCommon = useTranslations("ecosystem.future")

  const content = (
    <>
      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Glowing sphere */}
        <div className="mb-8">
          <div className="relative h-20 w-20">
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradient} opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 transition-all duration-500 group-hover:border-gray-600/80">
              <div className="h-2 w-2 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
            </div>
          </div>
        </div>

        {/* Text */}
        <h3
          className="font-heading mb-3 transition-colors duration-300 group-hover:text-white"
          style={{ fontSize: "1.75rem" }}
        >
          {t("name")}
        </h3>
        <p className={`leading-relaxed text-gray-400 ${isPlaceholder ? "italic" : ""}`}>{t("description")}</p>

        {/* Status indicator for placeholder */}
        {isPlaceholder && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-700/50 bg-gray-800/30 px-3 py-1">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-gray-500" />
            <span className="text-gray-500" style={{ fontSize: "0.75rem" }}>
              {tCommon("comingSoon")}
            </span>
          </div>
        )}
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-900/20 p-8 backdrop-blur-sm transition-all duration-500 group-hover:border-gray-700/80">
        {navigatesTo ? (
          <a href={navigatesTo} target="_blank" rel="noopener noreferrer" className="block h-full">
            {content}
          </a>
        ) : (
          <div className="h-full">{content}</div>
        )}
      </div>
    </motion.div>
  )
}
