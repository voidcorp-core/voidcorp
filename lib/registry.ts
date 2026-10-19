// Every project Void Corp has started, with an honest status. Stopped projects stay listed.

export type ProjectStatus = "live" | "building" | "internal" | "reflection" | "stopped"

export type ProjectSlug = "atlas" | "solaar" | "partnership" | "nexus" | "root" | "nebulabox"

type ProjectBase = { slug: ProjectSlug; name: string | null }

// A live project always carries the address a visitor can open; internal, stopped and
// undecided ones never do. A project in build may or may not be public yet.
export type Project =
  | (ProjectBase & { status: "live"; url: `https://${string}` })
  | (ProjectBase & { status: "building"; url?: `https://${string}` })
  | (ProjectBase & { status: "internal" | "reflection" | "stopped"; url?: never })

// Ordered by what a visitor can use today, then by what is coming, then by what is closed.
export const PROJECTS: readonly Project[] = [
  { slug: "atlas", name: "Atlas", status: "live", url: "https://atlas.voidcorp.io" },
  { slug: "solaar", name: "Solaar", status: "building", url: "https://solaar.app" },
  { slug: "partnership", name: null, status: "building" },
  { slug: "nexus", name: "Nexus", status: "internal" },
  { slug: "root", name: "Root", status: "reflection" },
  { slug: "nebulabox", name: "NebulaBox", status: "stopped" },
]

export function hostOf(url: `https://${string}`): string {
  return new URL(url).host
}
