"use client"

import { PulsingBorder } from "@paper-design/shaders-react"
import { motion, useScroll, useTransform } from "motion/react"

import { useTranslations } from "next-intl"
import { useRef } from "react"

export function SignatureSection() {
  const t = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={sectionRef} className="relative px-4 py-20 sm:px-8 sm:py-32 md:py-56 overflow-hidden">
      <motion.div style={{ y }} className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          {/* Void portal with PulsingBorder shader */}
          <div className="relative mx-auto flex items-center justify-center">
            <PulsingBorder
              colors={["#4401d5", "#ff4dc4"]}
              colorBack="#02010400"
              roundness={1}
              thickness={0.11}
              softness={0.76}
              aspectRatio="square"
              intensity={0.39}
              bloom={0.62}
              spots={4}
              spotSize={0.55}
              pulse={0.71}
              smoke={1}
              smokeSize={0.23}
              speed={1}
              scale={0.71}
              marginLeft={0}
              marginRight={0}
              marginTop={0}
              marginBottom={0}
              style={{
                width: "min(280px, 70vw)",
                height: "min(280px, 70vw)",
                borderRadius: "50%",
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-lg text-base text-violet-200/90 sm:mt-14 sm:text-lg md:text-xl"
          >
            <span className="font-heading text-xl font-semibold text-white sm:text-2xl md:text-3xl">
              {t("signature.tagline")}
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
