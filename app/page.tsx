"use client"

import { Eye, Hammer, Pen } from "lucide-react"

import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import logo from "assets/VoidCorp-hor-dark.png"
import { EcosystemCard } from "components/EcosystemCard"
import { HeroSection } from "components/HeroSection"

export default function Web() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-[#05030a] text-white">
      {/* Header with Void Corp Logo */}
      <motion.header
        className="fixed top-0 right-0 left-0 z-50 bg-[#05030a]/50 px-8 py-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="mx-auto flex max-w-7xl justify-center">
          <div className="relative h-20 w-[750px]">
            <Image src={logo} alt="Void Corp" fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      </motion.header>

      {/* Background cosmic gradient */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute h-[800px] w-[800px] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(236,72,153,0.3) 50%, rgba(59,130,246,0.2) 100%)",
            left: `${mousePosition.x - 400}px`,
            top: `${mousePosition.y - 400}px`,
            transition: "left 0.8s ease-out, top 0.8s ease-out",
          }}
        />
      </div>

      {/* Hero Section */}
      <HeroSection opacity={opacity} />

      {/* Philosophy / Manifesto */}
      <section className="relative px-8 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 inline-block rounded-full border border-violet-500/30 px-4 py-1">
              <span className="tracking-widest text-violet-300/80 uppercase" style={{ fontSize: "0.75rem" }}>
                Manifesto
              </span>
            </div>
            <p className="mx-auto max-w-3xl leading-relaxed text-gray-300/90" style={{ fontSize: "1.25rem" }}>
              We believe in <span className="text-violet-300">structured emptiness</span> — a space where precision,
              art, and iteration converge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="relative px-8 py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="font-heading mb-4" style={{ fontSize: "2.5rem" }}>
              The Ecosystem
            </h2>
            <p className="text-gray-400">Where innovation takes form</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <EcosystemCard
              name="v0rn"
              description="The forge where ideas are crafted into reality"
              gradient="from-violet-600/20 to-purple-600/20"
              delay={0}
              navigatesTo="https://v0rn.com"
            />
            <EcosystemCard
              name="Volpio"
              description="Strategic ventures shaping tomorrow"
              gradient="from-fuchsia-600/20 to-pink-600/20"
              delay={0.2}
              navigatesTo="https://volpio.com"
            />
            <EcosystemCard
              name="Future Entities"
              description="The next chapter awaits in the void"
              gradient="from-blue-600/20 to-cyan-600/20"
              delay={0.4}
              isPlaceholder
            />
          </div>
        </div>
      </section>

      {/* The Principle */}
      <section className="relative px-8 py-32">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="font-heading mb-4" style={{ fontSize: "2.5rem" }}>
              The Principle
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {/* Observe */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="mb-6 inline-block">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-violet-500/30 bg-gradient-to-br from-violet-600/20 to-violet-600/5 transition-all duration-500 group-hover:border-violet-400/50">
                  <Eye className="h-10 w-10 text-violet-400" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-heading mb-3" style={{ fontSize: "1.5rem" }}>
                Observe
              </h3>
              <p className="leading-relaxed text-gray-400/90">
                Study the patterns of creation and understand the forces at play
              </p>
            </motion.div>

            {/* Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="mb-6 inline-block">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-600/20 to-fuchsia-600/5 transition-all duration-500 group-hover:border-fuchsia-400/50">
                  <Pen className="h-10 w-10 text-fuchsia-400" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-heading mb-3" style={{ fontSize: "1.5rem" }}>
                Design
              </h3>
              <p className="leading-relaxed text-gray-400/90">
                Shape the void with intention, precision, and artistic vision
              </p>
            </motion.div>

            {/* Forge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="mb-6 inline-block">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-br from-blue-600/20 to-blue-600/5 transition-all duration-500 group-hover:border-blue-400/50">
                  <Hammer className="h-10 w-10 text-blue-400" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-heading mb-3" style={{ fontSize: "1.5rem" }}>
                Forge
              </h3>
              <p className="leading-relaxed text-gray-400/90">
                Manifest reality through relentless iteration and mastery
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Signature */}
      <section className="relative px-8 py-40">
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
              <div className="absolute inset-0 opacity-40 blur-3xl">
                <div className="mx-auto h-64 w-64 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-600 to-blue-600" />
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
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
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
              className="mx-auto mt-12 max-w-md text-gray-300/80 italic"
              style={{ fontSize: "1.125rem" }}
            >
              "In the beginning, there was structure in the void."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50 px-8 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-gray-500" style={{ fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} Void Corp — Forged in France
          </p>
        </div>
      </footer>
    </div>
  )
}
