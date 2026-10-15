import { BookOpen, HeartPulse, ExternalLink, Play, CheckCircle2, FlaskConical } from 'lucide-react'
import { projects } from '@/config'

const projectIcons: Record<string, typeof BookOpen> = {
  book: BookOpen,
  'heart-pulse': HeartPulse,
}

const statusStyles: Record<string, string> = {
  live: 'border-emerald-400/25 bg-slate-950/70 text-emerald-300',
  testing: 'border-amber-400/25 bg-slate-950/70 text-amber-300',
}

const statusIcons: Record<string, typeof Play> = {
  live: CheckCircle2,
  testing: FlaskConical,
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="glow-blob h-72 w-72 bg-violet-700 bottom-0 -left-24" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My work
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Real apps, built and shipped — one live on Google Play, one in closed testing.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => {
            const Icon = projectIcons[project.icon] ?? BookOpen
            const StatusIcon = statusIcons[project.statusType] ?? CheckCircle2
            return (
              <article
                key={project.title}
                className="reveal group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition-all hover:border-white/20 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                <div>
                  {/* Banner: app screenshots */}
                  <div className={`relative bg-gradient-to-br ${project.accent}`}>
                    {project.screenshots.length > 0 ? (
                      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 pt-16 sm:justify-center sm:px-8">
                        {project.screenshots.map((shot) => (
                          <img
                            key={shot.alt}
                            src={shot.src}
                            alt={shot.alt}
                            loading="lazy"
                            width={540}
                            height={960}
                            className="aspect-[9/16] w-36 shrink-0 snap-center rounded-2xl border-4 border-black/70 object-cover shadow-xl shadow-black/30 transition-transform duration-300 group-hover:-translate-y-1 sm:w-40 lg:w-48"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="flex min-h-44 items-center justify-center">
                        <Icon className="h-20 w-20 text-white/90" />
                      </div>
                    )}
                    <span
                      className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur ${statusStyles[project.statusType]}`}
                    >
                      <StatusIcon className="h-3.5 w-3.5" />
                      {project.status}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-7 lg:p-9">
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                      {project.title}
                      <span className="ml-2 text-sm font-medium text-slate-500">
                        {project.subtitle}
                      </span>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-slate-400">
                      <span className="font-semibold text-cyan-300">Result: </span>
                      {project.result}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
                      >
                        <Play className="h-4 w-4" />
                        Get it on Google Play
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
