"use client"

import { motion, MotionValue } from "motion/react"
import { useTranslations } from "next-intl"

interface HeroSectionProps {
  opacity: MotionValue<number>
}

export function HeroSection({ opacity }: HeroSectionProps) {
  const t = useTranslations("hero")

  return (
    <motion.section
      className="relative flex min-h-screen flex-col items-center justify-center px-8"
      style={{ opacity }}
    >
      {/* Cosmic Energy Core */}
      <div className="relative mb-16">
        {/* Outer glow rings */}
        <div className="absolute inset-0 -m-32">
          <div className="animate-glow-pulse absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/10 via-fuchsia-600/10 to-blue-600/10 blur-3xl" />
        </div>

        {/* Main sphere */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Gradient sphere with multiple layers */}
          <div className="animate-float relative h-80 w-80 rounded-full">
            {/* Inner core */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-600 to-blue-600 opacity-30 blur-2xl" />

            {/* Middle layer */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500 opacity-40 blur-xl" />

            {/* Outer ring */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 320">
              <circle
                cx="160"
                cy="160"
                r="155"
                fill="none"
                stroke="url(#hero-gradient)"
                strokeWidth="1"
                opacity="0.6"
              />
              <circle
                cx="160"
                cy="160"
                r="140"
                fill="none"
                stroke="url(#hero-gradient)"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <defs>
                <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center point */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-4xl text-center"
      >
        <div className="mb-8 inline-block rounded-full border border-violet-500/30 px-4 py-1">
          <span className="tracking-widest text-violet-300/80 uppercase" style={{ fontSize: "0.75rem" }}>
            {t("badge")}
          </span>
        </div>

        <h1
          className="font-heading mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent"
          style={{ fontSize: "4.5rem", lineHeight: "1.1" }}
        >
          {t("title")}
        </h1>

        <p className="mx-auto max-w-2xl leading-relaxed text-gray-300/70" style={{ fontSize: "1.25rem" }}>
          {t("description")}
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-600/50 pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-gray-400" />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
