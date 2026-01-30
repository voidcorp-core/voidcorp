import createMiddleware from "next-intl/middleware"
import { locales } from "./i18n"

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "fr",
  localePrefix: "as-needed",

  // Disable automatic locale detection from browser headers
  localeDetection: false,
})

export const config = {
  // Match only internationalized pathnames
  // Exclude: api, _next, _vercel, and files with extensions
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
