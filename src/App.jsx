import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'
import ScrollProgress from './components/ScrollProgress'
import Spotlight from './components/Spotlight'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Subash Lakshmanan — Full Stack Developer</title>
        <meta name="description" content="Portfolio of Subash Lakshmanan, a full stack developer experienced in Angular, React, Node.js, Shopify, and DevOps (Azure)." />
        <meta property="og:title" content="Subash Lakshmanan — Full Stack Developer" />
        <meta property="og:description" content="Projects, skills, and experience across Angular, React, Node.js, Shopify, and CI/CD." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-slate-100">
        <ScrollProgress />
        <Background />
        <Spotlight />
        <Navbar />
        <main>
          <section id="home" className="scroll-mt-20">
            <Hero />
          </section>
          <section id="about" className="scroll-mt-20">
            <About />
          </section>
          <section id="skills" className="scroll-mt-20">
            <Skills />
          </section>
          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>
          <section id="experience" className="scroll-mt-20">
            <Experience />
          </section>
          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
