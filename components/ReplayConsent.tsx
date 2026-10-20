"use client"

import Script from "next/script"
import { useTranslations } from "next-intl"
import { useSyncExternalStore } from "react"

import { Link } from "@/navigation"
import {
  readReplayConsent,
  type ReplayChoice,
  type ReplayConsent as ReplayConsentState,
  subscribeReplayConsent,
  writeReplayConsent,
} from "lib/consent"

// Null on the server and during hydration: the choice lives in the browser, so nothing renders
// until it is known. A returning visitor never sees the banner flash.
export function useReplayConsent(): ReplayConsentState | null {
  return useSyncExternalStore(subscribeReplayConsent, () => readReplayConsent(), () => null)
}

// Loads the Umami recorder once replays are granted, and asks the question while they are unset.
export function ReplayConsent() {
  const consent = useReplayConsent()

  if (consent === "granted") {
    return (
      <Script
        src="https://umami.voidcorp.io/recorder.js"
        data-website-id="a92c4abb-ab24-4e97-843b-b21873cdab88"
        strategy="afterInteractive"
      />
    )
  }
  if (consent === "unset") return <ConsentBanner />
  return null
}

function ConsentBanner() {
  const t = useTranslations("consent")

  return (
    <section
      aria-label={t("label")}
      className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-violet-400/20 bg-void-bg/95 p-5 text-sm text-gray-300 shadow-2xl shadow-black/40 backdrop-blur-md sm:right-auto sm:left-6 sm:bottom-6 sm:max-w-md"
    >
      <p className="leading-relaxed">
        {t("text")}{" "}
        <Link href="/confidentialite" className="text-violet-300 underline underline-offset-4 hover:text-white">
          {t("link")}
        </Link>
      </p>
      <ChoiceButtons className="mt-4" />
    </section>
  )
}

// Refusing is exactly as easy and as visible as accepting, as the CNIL requires.
export function ChoiceButtons({ className = "", onChoice }: { className?: string; onChoice?: (choice: ReplayChoice) => void }) {
  const t = useTranslations("consent")
  const choose = (choice: ReplayChoice) => {
    writeReplayConsent(choice)
    onChoice?.(choice)
  }

  return (
    <div className={`flex gap-3 ${className}`}>
      {(["denied", "granted"] as const).map((choice) => (
        <button
          key={choice}
          type="button"
          onClick={() => choose(choice)}
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 text-sm font-medium text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-void-bg focus-visible:outline-none"
        >
          {t(choice === "granted" ? "accept" : "refuse")}
        </button>
      ))}
    </div>
  )
}

// Lets the visitor change their answer from the privacy page. Withdrawing reloads the page,
// because a recorder that already started cannot be unloaded.
export function ReplayConsentSettings() {
  const t = useTranslations("consent")
  const consent = useReplayConsent()
  if (consent === null) return null

  const onChoice = (choice: ReplayChoice) => {
    if (consent === "granted" && choice === "denied") window.location.reload()
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <p aria-live="polite" className="text-sm text-gray-300">
        {t(`status.${consent}`)}
      </p>
      <ChoiceButtons className="mt-4 max-w-sm" onChoice={onChoice} />
    </div>
  )
}
