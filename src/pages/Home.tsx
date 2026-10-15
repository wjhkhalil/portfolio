import '../App.css'
import { useReveal } from '../hooks/useReveal'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Journey from '../sections/Journey'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  useReveal()

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
