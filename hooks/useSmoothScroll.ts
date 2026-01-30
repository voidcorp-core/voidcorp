import { useCallback } from "react"

interface ScrollOptions {
  offset?: number
  duration?: number
}

export function useSmoothScroll() {
  const scrollTo = useCallback((elementId: string, options: ScrollOptions = {}) => {
    const { offset = 0 } = options
    const element = document.getElementById(elementId)

    if (!element) return

    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }, [])

  return { scrollTo }
}
