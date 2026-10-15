import { useState } from 'react'
import { Mail, Send, Github, ChevronDown, Zap } from 'lucide-react'
import { site, socials, contact } from '@/config'
import { useReveal } from '@/hooks/useReveal'

const socialIcons: Record<string, typeof Github> = {
  github: Github,
}

const inputClass =
  'w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-cyan-400/50'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  useReveal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open the visitor's mail app with the message pre-filled
    const subject = encodeURIComponent(`Portfolio contact — ${form.service || 'New message'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})\nNeed: ${form.service || 'Not specified'}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => setForm({ ...form, [key]: e.target.value })

  return (
    <section id="contact" className="relative py-24">
      <div className="glow-blob h-80 w-80 bg-violet-700 bottom-0 right-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Let's connect
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Get In Touch
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Have a project idea, an opportunity, or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: contact info */}
          <div className="reveal lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Let's build something together</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Whether it's a Flutter app built from scratch, a design that needs becoming a
                  website, or a project that's stuck — I'd love to hear about it.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-5 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  {site.email}
                </a>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
                  <Zap className="h-3.5 w-3.5" />
                  {contact.promise}
                </div>
              </div>

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
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="john@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-300">
                What do you need?
              </label>
              <div className="relative">
                <select
                  id="service"
                  required
                  value={form.service}
                  onChange={update('service')}
                  className={`${inputClass} appearance-none pr-10 ${form.service ? '' : 'text-slate-600'}`}
                >
                  <option value="" disabled>
                    Choose one…
                  </option>
                  {contact.serviceOptions.map((option) => (
                    <option key={option} value={option} className="text-white">
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Project Details
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={update('message')}
                placeholder="Tell me about your idea, your design, or what's stuck…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {sent ? 'Opening your mail app…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
