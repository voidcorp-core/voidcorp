"use client"

import { Factory, Flame, Sparkles } from "lucide-react"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { DottedGlowBackground } from "components/ui/dotted-glow-background"

interface EcosystemCardProps {
  cardKey: string
  accentColor: "blue" | "orange" | "purple"
  delay: number
  isPlaceholder?: boolean
  navigatesTo?: string
}

const accentStyles = {
  blue: {
    glowColor: "rgba(66, 1, 211, 0.85)",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(66,1,211,0.5)]",
    titleHover: "group-hover:text-brand-violet",
  },
  orange: {
    glowColor: "rgba(255, 75, 196, 0.85)",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(255,75,196,0.5)]",
    titleHover: "group-hover:text-brand-pink",
  },
  purple: {
    glowColor: "rgba(167, 139, 250, 0.85)",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(167,139,250,0.5)]",
    titleHover: "group-hover:text-[#a78bfa]",
  },
}

const icons = {
  voidfactory: Factory,
  volpio: Flame,
  future: Sparkles,
}

export function EcosystemCard({
  cardKey,
  accentColor,
  delay,
  isPlaceholder,
  navigatesTo,
}: EcosystemCardProps) {
  const t = useTranslations(`ecosystem.${cardKey}`)
  const tCommon = useTranslations("ecosystem.future")
  const styles = accentStyles[accentColor]
  const Icon = icons[cardKey as keyof typeof icons] || Sparkles

  const content = (
    <>
      {/* Icon centered */}
      <div className="absolute inset-0 z-20 m-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg sm:h-16 sm:w-16">
        <Icon className="h-6 w-6 text-void-bg sm:h-8 sm:w-8" strokeWidth={1.5} />
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex w-full justify-between px-4 py-3 backdrop-blur-[2px]">
        <div>
          <h3 className={`text-sm font-medium text-white transition-colors duration-300 sm:text-base ${styles.titleHover}`}>{t("name")}</h3>
          <p className={`text-xs text-neutral-400 ${isPlaceholder ? "italic" : ""}`}>
            {isPlaceholder ? tCommon("description") : t("description")}
          </p>
        </div>
        {navigatesTo && (
          <span className="text-sm text-neutral-400 self-center">&rarr;</span>
        )}
      </div>

      {/* Dotted glow background */}
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar={accentColor === "blue" ? "--color-brand-violet" : accentColor === "orange" ? "--color-brand-pink" : "--color-violet-400"}
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
        darkGlowColor={styles.glowColor}
      />
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: delay * 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className={`group relative rounded-md rounded-tl-3xl rounded-br-3xl rounded-bl-3xl transition-all duration-300 hover:scale-[1.02] ${styles.hoverGlow}`}
    >
      <div className="relative flex aspect-square items-end justify-end overflow-hidden rounded-md rounded-tl-3xl rounded-br-3xl rounded-bl-3xl border border-white/10 ring-1 ring-white/5 transition-all duration-300 group-hover:border-white/20">
        {navigatesTo ? (
          <a href={navigatesTo} target="_blank" rel="noopener noreferrer" className="flex h-full w-full flex-col">
            {content}
          </a>
        ) : (
          <div className="flex h-full w-full flex-col">
            {content}
          </div>
        )}
      </div>
    </motion.div>
  )
}
