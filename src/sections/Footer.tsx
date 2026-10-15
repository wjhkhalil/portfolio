import { Code2, ArrowUp, Github } from 'lucide-react'
import { site, socials } from '@/config'

const socialIcons: Record<string, typeof Github> = {
  github: Github,
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05080f]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600">
            <Code2 className="h-4 w-4 text-white" />
          </span>
          {site.name.split(' ')[0]}
          <span className="text-cyan-400">.dev</span>
        </a>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {site.name}. Built with 💙 using React & Tailwind CSS.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon]
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-slate-500 transition-colors hover:text-cyan-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-1 hover:text-cyan-300"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
