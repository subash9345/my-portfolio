import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(form.message)
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    window.location.href = `mailto:subashlakshmanan9345@gmail.com?subject=${subject}&body=${body}%0D%0A%0D%0AFrom: ${encodeURIComponent(form.name)}%20<${encodeURIComponent(form.email)}>`
    setSent(true)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Let’s work together" subtitle="Interested in collaborating or have a question? Drop a line." />
        <div className="grid md:grid-cols-2 gap-8">
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} onSubmit={onSubmit} className="card p-6 space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input required name="name" value={form.name} onChange={onChange} className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input required type="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea required name="message" rows="5" value={form.message} onChange={onChange} className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>
            <div className="flex items-center justify-between">
              <button className="btn-primary" type="submit">Send Message</button>
              {sent && <span className="text-sm text-green-600">Opening your email client…</span>}
            </div>
          </motion.form>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-4">
            <div className="card p-6">
              <h3 className="font-semibold mb-2">Social</h3>
              <ul className="space-y-2">
                <li><a className="link" href="https://www.linkedin.com/in/m-subashlakshmanan" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold mb-2">Email</h3>
              <a className="link" href="mailto:subashlakshmanan9345@gmail.com">subashlakshmanan9345@gmail.com</a>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold mb-2">Phone</h3>
              <a className="link" href="tel:+919345510207">+91 93455 10207</a>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-slate-300">Tirunelveli, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
