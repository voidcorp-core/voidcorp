// Umami click events, declared once. The tracker reads `data-umami-event` and
// `data-umami-event-*` attributes on click (https://docs.umami.is/docs/track-events).

type EventProperties = {
  "cta-projects": Record<string, never>
  "cta-ecosystem": Record<string, never>
  "ecosystem-card": { target: "projects" | "volpio" | "investments" }
  "project-open": { project: string; placement: "featured" | "list" }
  "language-switch": { locale: string }
  "social-click": { network: "linkedin" | "x" | "github" }
}

export type UmamiEvent = keyof EventProperties

export type UmamiAttributes = { "data-umami-event": UmamiEvent } & Record<`data-umami-event-${string}`, string>

export function umamiEvent<E extends UmamiEvent>(name: E, ...[properties]: OptionalProperties<E>): UmamiAttributes {
  const attributes: UmamiAttributes = { "data-umami-event": name }
  for (const [key, value] of Object.entries(properties ?? {})) {
    attributes[`data-umami-event-${key}`] = String(value)
  }
  return attributes
}

// Events without properties take no second argument; events with properties require it.
type OptionalProperties<E extends UmamiEvent> = EventProperties[E] extends Record<string, never>
  ? []
  : [EventProperties[E]]
