# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences land on voidcorp.io, all confirmed by the founder (2026-10-19):

- **Prospects and clients**: leaders of small and mid-sized companies evaluating Volpio or the studio. They want proof that this team ships real products, not slideware.
- **Partners and associates**: co-founders, partners and investors looking at the pipeline and at the kill/scale discipline.
- **Peers and builders**: the dev and indie community following what gets built, in public.

## Product Purpose

voidcorp.io is the single public site of Void Corp, the holding. It states what the holding is, shows its ecosystem (Volpio, its projects, its investments) and carries the projects page: every product Void Corp has started, with its honest status. Success: a visitor leaves knowing what Void Corp builds, which products exist today, and where to go next (a live product, Volpio, or the founder).

The former standalone site factory.voidcorp.io is folded into voidcorp.io/projets (EN /en/projects), decided 2026-10-19; the old domain redirects there. The existing voidcorp.io visual design is kept (the founder rejected a full redesign on 2026-10-19).

## Positioning

A holding that publishes its own ledger: what is live, what is internal, what was stopped and what is still being thought through. Stopped projects are shown, not hidden. A neighbouring studio site shows only wins; this one shows the pipeline as it really is.

## Operating Context

- Entities: only **Void Corp** (holding) and **Volpio** (consulting and operations, volpio.com, tagline "L'intelligence en mouvement"). **Void Factory** is the way products are made, not an entity or an establishment.
- Investments: Void Corp holds a stake in Blast (blast.club), confirmed public by the founder on 2026-10-19 (already stated on his LinkedIn).
- Projects, as of 2026-10-19:
  - **Nexus**: internal steering tool for the holding. Private, no public link.
  - **Atlas**: live at atlas.voidcorp.io. A guided interview that hands you a map of where you stand and one next step. Free, no account.
  - **Solaar**: born at Void Corp, live at solaar.app. A relationship companion that keeps professional connections alive: capture, understand, maintain. Still in active build.
  - **Confidential project**: built in partnership, in build. No name, no partner named.
  - **NebulaBox**: shared gift lists where reservations stay hidden from the list owner. Taken to beta, then stopped.
  - **Root**: the root project. In reflection. Say nothing more publicly.
- Bilingual: French default, English at /en (next-intl, `localePrefix: as-needed`).
- Analytics: self-hosted Umami at umami.voidcorp.io.
- Deployed on Vercel.

## Capabilities and Constraints

- Next.js App Router, React 19, Tailwind 4, next-intl, motion. Next 15.5 today; the move to Next 16 is a separate, decided change, not part of a visual pass.
- Static content only; no forms, no backend beyond `/api/health`.
- Registry entries are edited in code; there is no CMS.
- Undecided: whether Volpio keeps its own site long term; the public pitch for Root.

## Brand Commitments

- Name: Void Corp (two words in prose), Void Factory, Volpio.
- Logo: the open ring, violet `#4201d3` to pink `#ff4bc4` (`assets/VoidCorp-hor-dark.png`, `assets/VoidCorp-onlyvoid-dark.png`).
- Lines in use and kept: "Du vide naît la structure." / "Build More. Move Fast. Be Better." / "L'imperfection qui existe bat la perfection qui n'existe pas."
- Voice: French first, direct, no hype vocabulary, no emojis.

## Evidence on Hand

- Two live public products with URLs (Atlas, Solaar), one internal tool (Nexus), one stopped product (NebulaBox), one project in reflection (Root).
- Founder: Florent Pellegrin (LinkedIn, X @fl0pe_, GitHub folpe).
- Absent and never to be fabricated: client logos, testimonials, user counts, revenue, delivery-time guarantees, launch dates, reasons a project was stopped beyond what is stated above.

## Product Principles

- **The ledger is the proof.** Concrete, dated, verifiable entries outrank any statement of philosophy.
- **Honest status.** Stopped is a status, written plainly. Nothing is "coming soon" without a real project behind it.
- **One site, one voice.** The holding, the factory and the entities are told once, in one place.
- **Every visit ends somewhere.** A live product, Volpio, or the founder; never a dead end.

## Accessibility & Inclusion

WCAG 2.2 AA. Respect `prefers-reduced-motion`. Touch targets of at least 44px. Mobile-first with desktop at equal quality (project doctrine).
