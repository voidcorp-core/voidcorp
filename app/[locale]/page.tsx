import { Suspense } from "react"

import { EcosystemSection } from "components/EcosystemSection"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { HeroSection } from "components/HeroSection"
import { PhilosophySection } from "components/PhilosophySection"
import { PrincipleSection } from "components/PrincipleSection"
import { ScrollOpacityProvider } from "components/ScrollOpacityProvider"
import { SignatureSection } from "components/SignatureSection"

function HeroFallback() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8">
      <div className="absolute inset-0 z-10 bg-void-bg" />
    </section>
  )
}

export default function Web() {
  return (
    <ScrollOpacityProvider>
      <div className="relative min-h-screen bg-void-bg text-white">
        <Header />
        <main id="main-content" className="relative z-10">
          <Suspense fallback={<HeroFallback />}>
            <HeroSection />
          </Suspense>
          <PhilosophySection />
          <EcosystemSection />
          <PrincipleSection />
          <SignatureSection />
        </main>
        <Footer />
      </div>
    </ScrollOpacityProvider>
  )
}
