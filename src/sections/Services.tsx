import { Check, Clock } from 'lucide-react'
import { services } from '@/config'

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="glow-blob h-72 w-72 bg-violet-600 top-10 -right-24" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            What I do
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Services
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Three ways we can work together — each one ends with something finished.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="reveal group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition-all hover:-translate-y-1.5 hover:border-cyan-400/25 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-3xl font-extrabold text-transparent">
                  {service.number}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <Clock className="h-3 w-3" />
                  {service.timeline}
                </span>
              </div>

              <h3 className="text-lg font-bold leading-snug text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>

              <ul className="mt-5 flex-1 space-y-3 border-t border-white/5 pt-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                Start a project
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
