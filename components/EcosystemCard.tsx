"use client"

import { cva } from "class-variance-authority"
import { Factory, Flame, Sparkles } from "lucide-react"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"

const descriptionVariants = cva("text-sm text-zinc-400 font-light leading-relaxed", {
  variants: {
    placeholder: {
      true: "italic",
      false: "",
    },
  },
  defaultVariants: {
    placeholder: false,
  },
})

interface EcosystemCardProps {
  cardKey: string
  accentColor: "blue" | "orange" | "purple"
  delay: number
  stepNumber: string
  isPlaceholder?: boolean
  navigatesTo?: string
}

const accentStyles = {
  blue: {
    hoverBorder: "group-hover:border-blue-500/30",
    iconColor: "text-blue-400",
    iconBorderHover: "group-hover:border-blue-500/40",
    numberHover: "group-hover:text-blue-500/60",
    glowShadow: "group-hover:shadow-[0_0_12px_rgba(59,130,246,0.6)]",
  },
  orange: {
    hoverBorder: "group-hover:border-orange-500/30",
    iconColor: "text-orange-400",
    iconBorderHover: "group-hover:border-orange-500/40",
    numberHover: "group-hover:text-orange-500/60",
    glowShadow: "group-hover:shadow-[0_0_12px_rgba(249,115,22,0.6)]",
  },
  purple: {
    hoverBorder: "group-hover:border-violet-500/30",
    iconColor: "text-violet-400",
    iconBorderHover: "group-hover:border-violet-500/40",
    numberHover: "group-hover:text-violet-500/60",
    glowShadow: "group-hover:shadow-[0_0_12px_rgba(139,92,246,0.6)]",
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
  stepNumber,
  isPlaceholder,
  navigatesTo,
}: EcosystemCardProps) {
  const t = useTranslations(`ecosystem.${cardKey}`)
  const tCommon = useTranslations("ecosystem.future")
  const styles = accentStyles[accentColor]
  const Icon = icons[cardKey as keyof typeof icons] || Sparkles

  const content = (
    <div className="relative z-10 p-5 sm:p-8">
      {/* Header with icon and number */}
      <div className="mb-5 flex items-center justify-between sm:mb-8">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-void-bg shadow-lg transition-all duration-500 group-hover:scale-110 sm:h-12 sm:w-12 ${styles.iconBorderHover} ${styles.glowShadow}`}
        >
          <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${styles.iconColor}`} strokeWidth={1.5} />
        </div>
        <span className={`font-mono text-xs text-zinc-600 transition-colors duration-300 ${styles.numberHover}`}>
          {stepNumber}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-medium tracking-tight text-white sm:mb-3 sm:text-xl">{t("name")}</h3>

      {/* Description */}
      <p className={descriptionVariants({ placeholder: isPlaceholder })}>
        {isPlaceholder ? tCommon("description") : t("description")}
      </p>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      {/* Card container */}
      <div
        className={`relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/10 group-hover:border-white/5 ${styles.hoverBorder}`}
      >
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
