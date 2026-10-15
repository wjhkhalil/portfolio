import { CheckCircle2, User } from 'lucide-react'
import { about } from '@/config'
import { useReveal } from '@/hooks/useReveal'

export default function About() {

  useReveal()

  return (
    <section id="about" className="relative py-24">
      <div className="glow-blob h-64 w-64 bg-violet-700 top-10 -left-20" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Get to know me
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            {about.heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: paragraphs */}
          <div className="reveal space-y-5 leading-relaxed text-slate-400">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Right: highlight card */}
          <div className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600">
                <User className="h-5 w-5 text-white" />
              </span>
              <h3 className="text-lg font-bold text-white">What I Bring</h3>
            </div>
            <ul className="space-y-4">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
