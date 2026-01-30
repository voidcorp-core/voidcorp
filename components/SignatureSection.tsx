"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export function SignatureSection() {
  const t = useTranslations()

  return (
    <section className="relative px-8 py-32 md:py-56">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          {/* Large glowing O */}
          <div className="relative">
            <div className="absolute inset-0 opacity-60 blur-3xl">
              <div className="mx-auto h-64 w-64 rounded-full bg-linear-to-br from-violet-500 via-fuchsia-500 to-purple-500" />
            </div>
            <div className="relative">
              <svg width="256" height="256" viewBox="0 0 256 256" className="mx-auto">
                <circle
                  cx="128"
                  cy="128"
                  r="100"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  className="animate-glow-pulse"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#9333ea" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-md text-lg text-violet-200 italic"
          >
            "{t("signature.quote")}"
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
