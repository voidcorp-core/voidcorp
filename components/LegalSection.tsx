import type { ReactNode } from "react"

// One titled block of a legal page (privacy policy, legal notice).
export function LegalSection({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-14 border-t border-white/10 pt-10 md:mt-16">
      <h2 className="font-heading mb-5 text-2xl sm:text-3xl">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-gray-300/80">{children}</div>
    </section>
  )
}
