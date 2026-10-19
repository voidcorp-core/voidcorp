import { hostOf, PROJECTS } from "./registry"
import en from "../messages/en.json"
import fr from "../messages/fr.json"

describe("PROJECTS", () => {
  it("lists each project once", () => {
    const slugs = PROJECTS.map((project) => project.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it("gives every live project an address and no closed or internal project one", () => {
    for (const project of PROJECTS) {
      if (project.status === "live") expect(project.url).toBeTruthy()
      if (["internal", "reflection", "stopped"].includes(project.status)) expect(project.url).toBeUndefined()
    }
  })

  it("has copy for every project and status in both locales", () => {
    for (const messages of [fr, en]) {
      for (const project of PROJECTS) {
        expect(messages.projects.entries[project.slug].nature).toBeTruthy()
        expect(messages.projects.entries[project.slug].summary).toBeTruthy()
        expect(messages.projects.status[project.status]).toBeTruthy()
      }
      expect(messages.projects.entries.partnership.name).toBeTruthy()
    }
  })
})

describe("hostOf", () => {
  it("returns the bare host of an address", () => {
    expect(hostOf("https://atlas.voidcorp.io")).toBe("atlas.voidcorp.io")
  })
})
