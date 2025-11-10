import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

import { env } from "./env.mjs"

const withNextIntl = createNextIntlPlugin("./i18n.ts")

const config: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  rewrites: async () => [
    { source: "/healthz", destination: "/api/health" },
    { source: "/api/healthz", destination: "/api/health" },
    { source: "/health", destination: "/api/health" },
    { source: "/ping", destination: "/api/health" },
  ],
}

export default withNextIntl(env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config)
