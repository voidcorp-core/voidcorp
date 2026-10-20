import { readReplayConsent, REPLAY_CONSENT_KEY, subscribeReplayConsent, writeReplayConsent } from "./consent"

const NOW_MS = Date.UTC(2026, 9, 20)
const DAY_MS = 24 * 60 * 60 * 1000

describe("readReplayConsent", () => {
  beforeEach(() => localStorage.clear())

  it("is unset when the visitor never chose", () => {
    expect(readReplayConsent(NOW_MS)).toBe("unset")
  })

  it("returns the stored choice", () => {
    localStorage.setItem(REPLAY_CONSENT_KEY, JSON.stringify({ choice: "granted", at_ms: NOW_MS - DAY_MS }))
    expect(readReplayConsent(NOW_MS)).toBe("granted")
  })

  it("asks again once the choice is older than six months", () => {
    localStorage.setItem(REPLAY_CONSENT_KEY, JSON.stringify({ choice: "denied", at_ms: NOW_MS - 183 * DAY_MS }))
    expect(readReplayConsent(NOW_MS)).toBe("unset")
  })

  it("ignores a malformed value instead of trusting it", () => {
    localStorage.setItem(REPLAY_CONSENT_KEY, JSON.stringify({ choice: "yes", at_ms: NOW_MS }))
    expect(readReplayConsent(NOW_MS)).toBe("unset")
    localStorage.setItem(REPLAY_CONSENT_KEY, "granted")
    expect(readReplayConsent(NOW_MS)).toBe("unset")
  })

  it("ignores a choice dated in the future", () => {
    localStorage.setItem(REPLAY_CONSENT_KEY, JSON.stringify({ choice: "granted", at_ms: NOW_MS + DAY_MS }))
    expect(readReplayConsent(NOW_MS)).toBe("unset")
  })
})

describe("writeReplayConsent", () => {
  beforeEach(() => localStorage.clear())

  it("stores the choice so it reads back", () => {
    writeReplayConsent("granted", NOW_MS)
    expect(readReplayConsent(NOW_MS)).toBe("granted")
    writeReplayConsent("denied", NOW_MS)
    expect(readReplayConsent(NOW_MS)).toBe("denied")
  })

  it("keeps the choice for the page when storage is blocked", () => {
    const setItem = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked")
    })
    const getItem = vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked")
    })
    writeReplayConsent("denied", NOW_MS)
    expect(readReplayConsent(NOW_MS)).toBe("denied")
    setItem.mockRestore()
    getItem.mockRestore()
  })

  it("notifies subscribers, and stops once they unsubscribe", () => {
    const listener = vi.fn()
    const unsubscribe = subscribeReplayConsent(listener)
    writeReplayConsent("denied", NOW_MS)
    expect(listener).toHaveBeenCalledTimes(1)
    unsubscribe()
    writeReplayConsent("granted", NOW_MS)
    expect(listener).toHaveBeenCalledTimes(1)
  })
})
