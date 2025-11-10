"use client"

import { Globe } from "lucide-react"
import { motion } from "motion/react"
import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { useEffect, useRef, useState, useTransition } from "react"

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
      // Remove any locale prefix from the current pathname
      let pathWithoutLocale = pathname

      // Remove /en if present
      if (pathWithoutLocale.startsWith("/en")) {
        pathWithoutLocale = pathWithoutLocale.slice(3) || "/"
      }
      // Remove /fr if present
      if (pathWithoutLocale.startsWith("/fr")) {
        pathWithoutLocale = pathWithoutLocale.slice(3) || "/"
      }

      // Build the new path
      // French (default locale) doesn't need prefix due to localePrefix: "as-needed"
      const newPath = newLocale === "fr" ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`

      router.push(newPath)
      router.refresh()
    })
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-violet-500/30 bg-gray-900/50 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/50 hover:bg-gray-900/70"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isPending}
      >
        <Globe className="h-4 w-4 text-violet-400" strokeWidth={2} />
        <span className="text-violet-300/90 uppercase" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
          {locale}
        </span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 top-full mt-2 overflow-hidden rounded-lg border border-violet-500/30 bg-gray-900/95 backdrop-blur-md"
          style={{ minWidth: "100px" }}
        >
          <button
            onClick={() => handleLanguageChange("en")}
            className={`w-full px-4 py-2 text-left transition-colors ${
              locale === "en"
                ? "bg-violet-600/20 text-violet-300"
                : "text-gray-300 hover:bg-violet-600/10 hover:text-violet-300"
            }`}
            style={{ fontSize: "0.875rem" }}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("fr")}
            className={`w-full px-4 py-2 text-left transition-colors ${
              locale === "fr"
                ? "bg-violet-600/20 text-violet-300"
                : "text-gray-300 hover:bg-violet-600/10 hover:text-violet-300"
            }`}
            style={{ fontSize: "0.875rem" }}
          >
            Français
          </button>
        </motion.div>
      )}
    </div>
  )
}
