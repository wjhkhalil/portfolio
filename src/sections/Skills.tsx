import { Smartphone, Layout, Wrench, ShieldCheck, Rocket } from 'lucide-react'
import { skillGroups } from '@/config'
import { useReveal } from '@/hooks/useReveal'

const groupIcons: Record<string, typeof Smartphone> = {
  smartphone: Smartphone,
  shield: ShieldCheck,
  rocket: Rocket,
  layout: Layout,
  wrench: Wrench,
}

export default function Skills() {
useReveal()

  return (
    <section id="skills" className="relative py-24">
      <div className="glow-blob h-72 w-72 bg-cyan-600 top-1/3 -right-24" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My toolbox
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Skills & Technologies
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            The technologies I'm learning and building with every day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.icon]
            return (
              <div
                key={group.title}
                className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition-all hover:-translate-y-1.5 hover:border-cyan-400/25 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </span>
                  <h3 className="text-base font-bold text-white">{group.title}</h3>
                </div>

                <ul className="space-y-5">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm text-slate-300">{skill.name}</span>
                        <span className="text-xs font-semibold text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="skill-bar-fill relative h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
