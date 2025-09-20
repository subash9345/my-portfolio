import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, slideIn, zoomIn } from '../lib/motion'

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p variants={fadeInUp(0)} className="text-sm uppercase tracking-widest text-brand mb-3">Full Stack Developer</motion.p>
          <motion.h1 variants={fadeInUp(0.05)} className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-brand to-slate-700 dark:from-white dark:via-brand dark:to-slate-300">
              Subash Lakshmanan
            </span>
          </motion.h1>
          <motion.p variants={fadeInUp(0.1)} className="mt-5 text-lg text-slate-300 max-w-xl">
            Full Stack Developer with 2.5 years of experience building scalable web applications. Proficient across frontend and backend, CI/CD, and e‑commerce (Shopify). Seeking a great environment to grow and deliver impact.
          </motion.p>
          <motion.div variants={fadeInUp(0.15)} className="mt-7 flex gap-3">
            <a href="#projects" className="btn-primary will-change-transform hover:scale-[1.02]">View Projects</a>
            <a href="#contact" className="btn-ghost hover:scale-[1.02]">Contact Me</a>
          </motion.div>
        </motion.div>
        <motion.div
          variants={zoomIn(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-full rounded-xl shadow-soft border border-slate-200/60 dark:border-slate-800"
            alt="Hero"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
          />
        </motion.div>
      </div>
    </section>
  )
}
