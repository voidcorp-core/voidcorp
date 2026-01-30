"use client"

import { cva } from "class-variance-authority"
import { Globe } from "lucide-react"
import { motion } from "motion/react"
import { useLocale } from "next-intl"
import { useEffect, useRef, useState, useTransition } from "react"

import { usePathname, useRouter } from "@/navigation"

const languageButtonVariants = cva("w-full px-4 py-2 text-left text-sm transition-colors", {
  variants: {
    active: {
      true: "bg-violet-600/20 text-violet-300",
      false: "text-gray-300 hover:bg-violet-600/10 hover:text-violet-300",
    },
  },
  defaultVariants: {
    active: false,
  },
})

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false)
      return
    }

    setIsOpen(false)
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-violet-500/30 bg-gray-900/50 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/50 hover:bg-gray-900/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isPending}
        aria-label={`Change language, current: ${locale === "fr" ? "Français" : "English"}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="h-4 w-4 text-violet-400" strokeWidth={2} aria-hidden="true" />
        <span className="text-sm font-medium text-violet-300/90 uppercase">{locale}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full right-0 mt-2 min-w-[100px] overflow-hidden rounded-lg border border-violet-500/30 bg-gray-900/95 backdrop-blur-md"
          role="listbox"
          aria-label="Select language"
        >
          <button
            onClick={() => handleLanguageChange("en")}
            className={languageButtonVariants({ active: locale === "en" })}
            role="option"
            aria-selected={locale === "en"}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("fr")}
            className={languageButtonVariants({ active: locale === "fr" })}
            role="option"
            aria-selected={locale === "fr"}
          >
            Français
          </button>
        </motion.div>
      )}
    </div>
  )
}
