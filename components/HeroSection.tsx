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
      {/* Cosmic Energy Core - The Birth of Structure */}
      <div className="relative mb-16">
        {/* Outer cosmic energy waves */}
        <div className="absolute inset-0 -m-40">
          <div className="animate-energy-wave absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-blue-600/20 blur-3xl" />
        </div>

        {/* Ripple effects - waves of creation */}
        <div className="absolute inset-0">
          <div className="animate-ripple absolute inset-0 -m-20 rounded-full border border-violet-500/30 blur-sm" />
          <div className="animate-ripple-delay absolute inset-0 -m-20 rounded-full border border-fuchsia-500/30 blur-sm" />
        </div>

        {/* Main sphere */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
            scale: { type: "spring", stiffness: 100, damping: 15 },
          }}
          className="relative"
        >
          {/* Rotating outer rings - the fabric of space */}
          <div className="animate-rotate-slow absolute inset-0 h-80 w-80">
            <svg className="h-full w-full" viewBox="0 0 320 320">
              <circle
                cx="160"
                cy="160"
                r="155"
                fill="none"
                stroke="url(#hero-gradient)"
                strokeWidth="1"
                opacity="0.4"
                strokeDasharray="10 5"
              />
              <circle
                cx="160"
                cy="160"
                r="145"
                fill="none"
                stroke="url(#hero-gradient-2)"
                strokeWidth="0.5"
                opacity="0.3"
                strokeDasharray="5 10"
              />
            </svg>
          </div>

          {/* Counter-rotating inner rings */}
          <div className="animate-rotate-reverse absolute inset-0 h-80 w-80">
            <svg className="h-full w-full" viewBox="0 0 320 320">
              <circle
                cx="160"
                cy="160"
                r="135"
                fill="none"
                stroke="url(#hero-gradient-3)"
                strokeWidth="0.5"
                opacity="0.5"
                strokeDasharray="8 4"
              />
            </svg>
          </div>

          {/* Gradient sphere with multiple breathing layers */}
          <div className="animate-float relative h-80 w-80 rounded-full">
            {/* Outermost breathing layer */}
            <div className="animate-breathe-slow absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-blue-600/20 blur-3xl" />

            {/* Secondary breathing layer */}
            <div className="animate-breathe absolute -inset-4 rounded-full bg-gradient-to-br from-violet-600/30 via-fuchsia-600/30 to-blue-600/30 blur-2xl" />

            {/* Inner core - the primordial energy */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-600 to-blue-600 opacity-40 blur-2xl" />

            {/* Middle layer with shimmer */}
            <div className="animate-shimmer absolute inset-8 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500 opacity-50 blur-xl" />

            {/* Stable inner rings */}
            <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 320 320">
              <circle
                cx="160"
                cy="160"
                r="120"
                fill="none"
                stroke="url(#hero-gradient)"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <circle
                cx="160"
                cy="160"
                r="100"
                fill="none"
                stroke="url(#hero-gradient)"
                strokeWidth="1"
                opacity="0.4"
              />
              <defs>
                <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="hero-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="hero-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Orbital particles - matter forming from energy */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="animate-orbit absolute h-2 w-2"
              >
                <div className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="animate-orbit-reverse absolute h-1.5 w-1.5"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="animate-orbit absolute h-1.5 w-1.5"
                style={{ animationDelay: "5s" }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="animate-orbit-reverse absolute h-1 w-1"
                style={{ animationDelay: "3s" }}
              >
                <div className="h-1 w-1 rounded-full bg-purple-300 shadow-[0_0_6px_rgba(216,180,254,0.8)]" />
              </motion.div>
            </div>

            {/* Center point - the singularity */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className="animate-shimmer h-4 w-4 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,1),0_0_80px_rgba(168,85,247,0.5)]" />
            </motion.div>
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
