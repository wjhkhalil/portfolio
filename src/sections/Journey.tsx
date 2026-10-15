import { Rocket } from 'lucide-react'
import { journey } from '@/config'
import { useReveal } from '@/hooks/useReveal'

export default function Journey() {

  useReveal()

  return (
    <section id="journey" className="relative py-24">
      <div className="glow-blob h-64 w-64 bg-cyan-600 top-20 -left-24" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My path
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            My Journey
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Studying computer science, shipping real apps, and taking on freelance work.
          </p>
        </div>

        <ol className="relative ml-3 border-l border-white/10">
          {journey.map((step, i) => (
            <li key={step.title} className="reveal relative pb-12 pl-10 last:pb-0">
              {/* Timeline dot */}
              <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/40 bg-[#0b1120]">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-300">
                <Rocket className="h-3 w-3" />
                {step.period}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>

              {i === journey.length - 1 && (
                <span className="mt-3 inline-block rounded-full bg-gradient-to-r from-cyan-500/15 to-violet-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                  …and the story continues 🚀
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
