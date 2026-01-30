"use client"

import { motion, useInView } from "motion/react"

import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"
import { useRef } from "react"
import { useScrollOpacity } from "components/ScrollOpacityProvider"
import { HoverBorderGradient } from "components/ui/hover-border-gradient"
import { useSmoothScroll } from "hooks/useSmoothScroll"

const UnicornScene = dynamic(() => import("unicornstudio-react"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-void-bg" />,
})

export function HeroSection() {
  const t = useTranslations("hero")
  const { scrollTo } = useSmoothScroll()
  const { opacity } = useScrollOpacity()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.1 })

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-linear-to-b after:from-transparent after:to-void-bg after:z-50"
      style={{ opacity }}
    >
      {/* Unicorn Studio Background - paused when out of view */}
      <div className="absolute inset-0 z-10">
        <UnicornScene
          projectId="BqS5vTHVEpn6NiF0g8iJ"
          className="h-full w-full"
          paused={!isInView}
          fps={30}
          dpi={1}
          scale={0.75}
          lazyLoad
        />
      </div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-50 max-w-4xl text-center"
      >
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5">
          <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
            {t("badge")}
          </span>
        </div>

        <h1 className="font-heading mb-4 bg-linear-to-r from-white  bg-clip-text text-4xl leading-tight text-transparent sm:text-5xl md:text-7xl">
          {t("title")}
        </h1>

        <p className="font-heading mb-6 text-lg font-semibold tracking-wide text-white sm:text-xl md:text-2xl">
          {t("subtitle")}
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-300/70 sm:text-lg md:text-xl">{t("description")}</p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <HoverBorderGradient
            as="a"
            href="https://factory.voidcorp.io"
            target="_blank"
            rel="noopener noreferrer"
            containerClassName="rounded-full"
            className="flex items-center gap-2 bg-void-bg px-6 py-3 text-sm font-medium sm:px-8 sm:py-4 sm:text-base"
          >
            {t("cta.primary")} &rarr;
          </HoverBorderGradient>

          <motion.button
            onClick={() => scrollTo("ecosystem", { offset: 80 })}
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:ring-offset-2 focus-visible:ring-offset-void-bg sm:px-8 sm:py-4 sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("cta.secondary")}
          </motion.button>
        </div>
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
