// ─────────────────────────────────────────────────────────────
//  PORTFOLIO CONTENT — edit this file to make the site yours.
//  Every section of the website reads from this config.
// ─────────────────────────────────────────────────────────────

import tuckHome from "@/assets/projects/tuck-and-tales-01-home.webp"
import tuckLibrary from "@/assets/projects/tuck-and-tales-02-story-library.webp"
import tuckRead from "@/assets/projects/tuck-and-tales-03-read-story.webp"
import tuckBedtime from "@/assets/projects/tuck-and-tales-06-bedtime-reading.webp"
import lifeHome from "@/assets/projects/lifekeeper-01-home.webp"
import lifeNewTask from "@/assets/projects/lifekeeper-02-new-task.webp"
import lifeLists from "@/assets/projects/lifekeeper-03-shopping-lists.webp"
import lifeReceipts from "@/assets/projects/lifekeeper-04-receipts.webp"

export const site = {
  name: "Wajeeha",
  role: "Flutter & Frontend Developer",
  tagline:
    "I design and ship cross-platform apps with Flutter, and turn designs into responsive websites. I work with founders and small teams who want something finished, not something half-built.",
  intro: "I build mobile apps that feel good to use.",
  location: "Remote — worldwide",
  email: "heyitswajeeha@gmail.com",
  resumeUrl: "#",
  availability: "Available for freelance work",
  // The small code snippet shown in the hero section
  heroCode: [
    { text: "const developer = {", class: "text-slate-300" },
    { text: "  name: 'Wajeeha',", class: "text-cyan-300" },
    { text: "  focus: ['Flutter', 'Frontend'],", class: "text-cyan-300" },
    { text: "  ships: 'apps that feel good',", class: "text-violet-300" },
    { text: "  published: true, // on Google Play", class: "text-emerald-300" },
    { text: "  offlineFirst: true,", class: "text-amber-300" },
    { text: "};", class: "text-slate-300" },
  ],
  stats: [
    { value: "2", label: "Apps Shipped" },
    { value: "1", label: "Live on Google Play" },
    { value: "7", label: "Languages Supported" },
  ],
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export const services = [
  {
    number: "01",
    title: "A Flutter app, built from scratch",
    timeline: "from 3 weeks",
    description:
      "Turns an idea or design into a working Android and iOS app that's ready to publish.",
    features: [
      "One codebase for Android and iOS",
      "Screen-by-screen build from your design",
      "Local storage, search and offline-friendly data",
      "Store-ready build and release help",
    ],
  },
  {
    number: "02",
    title: "A design, turned into a website",
    timeline: "from 1 week",
    description:
      "Builds a design from Figma, XD or a sketch as a responsive site.",
    features: [
      "Pixel-accurate build",
      "Works on mobile, tablet and desktop",
      "Light and dark mode",
      "Fast-loading, accessible markup",
    ],
  },
  {
    number: "03",
    title: "Fixing or finishing an app",
    timeline: "from a few days",
    description:
      "For Flutter projects that are stuck, buggy or need one more feature.",
    features: [
      "Bug fixes and crash hunting",
      "New screens or features",
      "UI polish and responsive fixes",
      "A clear write-up of what changed",
    ],
  },
]

export const projects = [
  {
    title: "Tuck & Tales",
    subtitle: "A cosy storybook app for kids",
    status: "Live on Google Play",
    statusType: "live" as const,
    description:
      "A Flutter app where children browse, search and read illustrated short stories, with a calm dark mode made for bedtime. Kids' story apps are loud, ask for accounts, show ads and stop working offline — Tuck & Tales fixes all of that.",
    highlights: [
      "One Flutter codebase for Android and iOS, using Material 3",
      "21 stories in 5 categories, with search and filters",
      "Favourites saved on the device — no account needed",
      "Cached images, so a story opened once reads offline",
      "A dedicated warm, dark bedtime reading mode",
    ],
    result:
      "Live on Google Play. A story is two taps away, it works offline once cached, and it never asks for an account.",
    tags: ["Flutter", "Dart", "Material 3", "shared_preferences", "cached_network_image"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.tuckandtales.app&hl=en",
    codeUrl: "",
    icon: "book",
    screenshots: [
      { src: tuckHome, alt: "Tuck & Tales home screen with featured stories" },
      { src: tuckLibrary, alt: "Tuck & Tales story library with search and category filters" },
      { src: tuckRead, alt: "Reading a story in Tuck & Tales" },
      { src: tuckBedtime, alt: "Tuck & Tales dark bedtime reading mode" },
    ],
    accent: "from-amber-500 to-orange-600",
  },
  {
    title: "LifeKeeper",
    subtitle: "A calm, private life organiser",
    status: "In closed testing on Google Play",
    statusType: "testing" as const,
    description:
      "A Flutter app that keeps tasks, reminders, shopping lists, receipts and important documents in one place — entirely on the device, with no account, ads or tracking.",
    highlights: [
      "Five areas (tasks, lists, receipts, documents, settings), stored locally and fully offline",
      "Three modes: Student, Everyday and Simple — with large touch targets and one-tap emergency call",
      "Reminders with snooze and Done buttons, document expiry alerts, rescheduled after reboot",
      "7 languages, about 150 currencies, dates and amounts formatted for each language",
      "Pastel theme with dark and high-contrast modes, reduced-motion support, .zip backup & restore",
    ],
    result: "Complete and in closed testing, with unit and widget tests. Production access requested.",
    tags: ["Flutter", "Dart", "Provider", "flutter_local_notifications", "intl / l10n"],
    demoUrl: "",
    codeUrl: "",
    icon: "heart-pulse",
    screenshots: [
      { src: lifeHome, alt: "LifeKeeper home screen with upcoming tasks" },
      { src: lifeNewTask, alt: "Creating a new task with a reminder in LifeKeeper" },
      { src: lifeLists, alt: "LifeKeeper shopping lists" },
      { src: lifeReceipts, alt: "LifeKeeper receipts with monthly spending" },
    ],
    accent: "from-emerald-500 to-teal-600",
  },
]

export const about = {
  heading: "About Me",
  paragraphs: [
    "I build mobile apps with Flutter and Dart, and responsive websites with HTML and CSS — turning ideas and designs into things people can actually use.",
    "I care about the details that make an app feel finished: smooth loading, sensible empty states, layouts that hold up on small phones, and comfortable dark modes.",
    "I'm studying for a BSCS degree, and when I'm not shipping apps I'm usually polishing one more detail nobody asked for — but everybody notices.",
  ],
  highlights: [
    "Cross-platform apps with Flutter & Dart",
    "Responsive websites with HTML & CSS",
    "Offline-first, account-free app design",
    "Published on Google Play",
  ],
}

export const skillGroups = [
  {
    title: "Mobile",
    icon: "smartphone",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 88 },
      { name: "Material 3", level: 85 },
      { name: "Provider", level: 80 },
      { name: "Local notifications", level: 78 },
      { name: "Offline-first storage", level: 85 },
    ],
  },
  {
    title: "App Quality",
    icon: "shield",
    skills: [
      { name: "Localisation (7 languages)", level: 82 },
      { name: "Accessibility", level: 80 },
      { name: "Dark & high-contrast themes", level: 88 },
      { name: "Unit & widget tests", level: 72 },
    ],
  },
  {
    title: "Shipping",
    icon: "rocket",
    skills: [
      { name: "Google Play Console", level: 80 },
      { name: "App signing", level: 78 },
      { name: "Closed testing", level: 82 },
      { name: "Production releases", level: 78 },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "HTML", level: 88 },
      { name: "CSS", level: 85 },
      { name: "Responsive design", level: 86 },
    ],
  },
  {
    title: "Other Tools",
    icon: "wrench",
    skills: [
      { name: "Git", level: 82 },
      { name: "Python", level: 65 },
      { name: "Unity", level: 55 },
      { name: "n8n", level: 60 },
    ],
  },
]

export const journey = [
  {
    period: "Education",
    title: "BSCS — Bachelor of Science in Computer Science",
    description:
      "Currently in progress. Studying computer science fundamentals alongside building and shipping real apps.",
  },
  {
    period: "Shipped",
    title: "Tuck & Tales — live on Google Play",
    description:
      "Designed, built and published a complete storybook app for kids: one Flutter codebase, offline-first reading, no accounts, no ads.",
  },
  {
    period: "Shipping",
    title: "LifeKeeper — in closed testing",
    description:
      "Built a private, offline life organiser with reminders, three modes, 7 languages and full backup & restore. Production release requested.",
  },
  {
    period: "Now",
    title: "Freelance Flutter & Frontend work",
    description:
      "Taking on freelance projects — building apps from scratch, turning designs into websites, and rescuing stuck Flutter projects.",
  },
]

export const contact = {
  promise: "I reply to every message within a day.",
  serviceOptions: [
    "A Flutter app, built from scratch",
    "A design, turned into a website",
    "Fixing or finishing an app",
    "Something else",
  ],
}

export const socials = [
  { label: "GitHub", href: "https://github.com/wjhkhalil", icon: "github" },
]
