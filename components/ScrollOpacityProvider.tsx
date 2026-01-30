"use client"

import { type MotionValue, useScroll, useTransform } from "motion/react"
import { createContext, type ReactNode, useContext } from "react"

type ScrollContextType = {
  opacity: MotionValue<number>
}

const ScrollContext = createContext<ScrollContextType | null>(null)

export function useScrollOpacity() {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error("useScrollOpacity must be used within ScrollOpacityProvider")
  }
  return context
}

export function ScrollOpacityProvider({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  return <ScrollContext.Provider value={{ opacity }}>{children}</ScrollContext.Provider>
}
