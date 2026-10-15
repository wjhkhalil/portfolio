import { ArrowRight, Mail, Github, MapPin, Sparkles } from 'lucide-react'
import { site, socials } from '@/config'

const socialIcons: Record<string, typeof Github> = {
  github: Github,
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background decorations */}
      <div className="bg-grid absolute inset-0" />
      <div className="glow-blob h-72 w-72 bg-cyan-500 -top-10 -left-10" />
      <div className="glow-blob h-80 w-80 bg-violet-600 top-20 right-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* Left: intro */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            {site.availability}
          </div>

          <p className="mb-4 text-lg font-semibold text-slate-300 sm:text-xl">
            "{site.intro}"
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm {site.name}
            <span className="mt-3 block text-gradient">{site.role}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {site.tagline}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-cyan-400" />
            {site.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Right: code card */}
        <div className="animate-float-slow relative">
          <div className="rounded-2xl border border-white/10 bg-[#0b1120]/90 shadow-2xl shadow-violet-500/10 backdrop-blur">
            {/* window bar */}
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-rose-500" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="ml-3 text-xs text-slate-500">developer.dart</span>
            </div>
            <div className="p-6 font-mono text-sm leading-7">
              {site.heroCode.map((line, i) => (
                <div key={i} className="flex">
                  <span className="mr-4 select-none text-slate-600">{i + 1}</span>
                  <span className={line.class}>{line.text}</span>
                </div>
              ))}
              <span className="cursor-blink ml-8 inline-block h-5 w-2 translate-y-1 bg-cyan-400" />
            </div>
          </div>

          {/* floating badges */}
          <div className="absolute -left-4 -bottom-5 rounded-xl border border-white/10 bg-[#0b1120] px-4 py-2.5 text-sm font-semibold text-cyan-300 shadow-xl">
            Flutter 💙
          </div>
          <div className="absolute -right-3 -top-4 rounded-xl border border-white/10 bg-[#0b1120] px-4 py-2.5 text-sm font-semibold text-violet-300 shadow-xl">
            React ⚛️
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto mt-16 grid max-w-4xl grid-cols-3 gap-4 px-6">
        {site.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-6 text-center backdrop-blur transition-colors hover:border-cyan-400/20"
          >
            <div className="text-2xl font-extrabold text-white sm:text-3xl">{stat.value}</div>
            <div className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
