import { z } from "zod"

// Consent to session replays and heatmaps (Umami recorder). Base Umami analytics is cookieless and
// limited to audience measurement, so it runs without consent; replays are not covered by that
// exemption (CNIL guidance on audience measurement), so the recorder loads only once granted.

export const REPLAY_CONSENT_KEY = "voidcorp.replay-consent"

// The CNIL recommends asking again after six months, whatever the answer was.
const CONSENT_AGE_MS_MAX = 182 * 24 * 60 * 60 * 1000
const CHANGE_EVENT = "voidcorp:replay-consent"

export type ReplayChoice = "granted" | "denied"
export type ReplayConsent = ReplayChoice | "unset"

const StoredConsent = z.object({
  choice: z.enum(["granted", "denied"]),
  at_ms: z.number().int().nonnegative(),
})

// Holds the choice for this page when storage is blocked (private mode, site data disabled).
let page_choice: ReplayChoice | null = null

export function readReplayConsent(now_ms: number = Date.now()): ReplayConsent {
  let raw: string | null
  try {
    raw = localStorage.getItem(REPLAY_CONSENT_KEY)
  } catch {
    return page_choice ?? "unset"
  }
  if (raw === null) return "unset"

  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return "unset"
  }
  const stored = StoredConsent.safeParse(parsed)
  if (!stored.success) return "unset"

  const age_ms = now_ms - stored.data.at_ms
  if (age_ms < 0 || age_ms > CONSENT_AGE_MS_MAX) return "unset"
  return stored.data.choice
}

export function writeReplayConsent(choice: ReplayChoice, now_ms: number = Date.now()): void {
  page_choice = choice
  try {
    localStorage.setItem(REPLAY_CONSENT_KEY, JSON.stringify({ choice, at_ms: now_ms }))
  } catch {
    // Storage blocked: page_choice keeps the answer until the next page load.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

// Fires on a choice made in this tab and on one made in another tab.
export function subscribeReplayConsent(listener: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === REPLAY_CONSENT_KEY) listener()
  }
  window.addEventListener(CHANGE_EVENT, listener)
  window.addEventListener("storage", onStorage)
  return () => {
    window.removeEventListener(CHANGE_EVENT, listener)
    window.removeEventListener("storage", onStorage)
  }
}
