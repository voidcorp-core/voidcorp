"use client"

import { motion, useMotionValueEvent, useScroll } from "motion/react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useState } from "react"

import logo from "assets/VoidCorp-hor-dark.png"
import { LanguageSwitcher } from "components/LanguageSwitcher"

export function Header() {
  const t = useTranslations()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-50 px-8 py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-void-bg/80 backdrop-blur-md border-b border-violet-500/10"
          : "bg-void-bg/50"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex-1" />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-white">
          Skip to main content
        </a>
        <div className="relative h-20 w-[750px]">
          <Image src={logo} alt={t("header.logoAlt")} fill className="object-contain" priority />
        </div>
        <nav aria-label="Language selection" className="flex flex-1 justify-end">
          <LanguageSwitcher />
        </nav>
      </div>
    </motion.header>
  )
}
