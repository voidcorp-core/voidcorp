import { umamiEvent } from "./analytics"

describe("umamiEvent", () => {
  it("names the event", () => {
    expect(umamiEvent("cta-projects")).toEqual({ "data-umami-event": "cta-projects" })
  })

  it("turns each property into its own data attribute", () => {
    expect(umamiEvent("project-open", { project: "atlas", placement: "featured" })).toEqual({
      "data-umami-event": "project-open",
      "data-umami-event-project": "atlas",
      "data-umami-event-placement": "featured",
    })
  })
})
