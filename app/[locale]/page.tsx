"use client"

import { useScroll, useTransform } from "motion/react"

import { EcosystemSection } from "components/EcosystemSection"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { HeroSection } from "components/HeroSection"
import { PhilosophySection } from "components/PhilosophySection"
import { PrincipleSection } from "components/PrincipleSection"
import { SignatureSection } from "components/SignatureSection"

export default function Web() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  return (
    <div className="relative min-h-screen bg-void-bg text-white">
      <Header />
      <main id="main-content" className="relative z-10">
        <HeroSection opacity={opacity} />
        <PhilosophySection />
        <EcosystemSection />
        <PrincipleSection />
        <SignatureSection />
      </main>
      <Footer />
    </div>
  )
}
