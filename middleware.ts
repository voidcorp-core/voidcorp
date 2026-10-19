import createMiddleware from "next-intl/middleware"
import { routing } from "./routing"

export default createMiddleware(routing)

export const config = {
  // Exclude api, Next internals, Vercel internals and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
