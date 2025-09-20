import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About" title="About Me" subtitle="Full Stack Developer specializing in scalable web apps, CI/CD, and Shopify ecosystems." />
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="md:col-span-2 space-y-4">
            <p className="text-slate-300">I’m Subash Lakshmanan, a Full Stack Developer with 2.5 years of experience building and optimizing applications across Angular, React, Node.js, and Shopify. I enjoy delivering user-focused solutions and shipping reliably with CI/CD (Azure DevOps).</p>
            <p className="text-slate-300">I’ve implemented RESTful APIs with FastAPI, .NET, and Laravel, developed custom Shopify themes and apps, and collaborated closely with designers and stakeholders to deliver impact. I also mentor interns on full‑stack practices and problem solving.</p>
            <p className="text-slate-300">I’m seeking a great team environment to further grow my skills and contribute to meaningful products.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="card p-5">
              <h3 className="font-semibold mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Based in Tirunelveli, IN</li>
                <li>• 2.5 years of experience</li>
                <li>• Focus: Angular, React, Node.js, Shopify</li>
                <li>• CI/CD: Azure DevOps</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
