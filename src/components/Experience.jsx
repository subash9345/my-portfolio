import React from 'react'
import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

const items = [
  {
    role: 'Full Stack Developer',
    company: 'Bezohminds',
    period: 'Oct 2022 — Present · Tirunelveli',
    description: 'Develop, optimize, and maintain scalable web apps using Angular, React, and Node.js. Implement REST APIs with Laravel, .NET, and FastAPI; build custom Shopify themes and apps; mentor interns; and ship reliably with CI/CD via Azure DevOps.',
    tech: ['Angular', 'React', 'Node.js', 'Laravel', '.NET', 'FastAPI', 'Azure DevOps', 'Shopify']
  },
  {
    role: 'Bachelor of Computer Science',
    company: 'Manonmaniam Sundaranar University',
    period: 'Jun 2019 — May 2022 · Tirunelveli',
    description: 'GCPA: 8.5',
    tech: []
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Work Experience" subtitle="A snapshot of the roles where I delivered impact." />
        <div className="relative before:content-[''] before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {items.map((item) => (
            <TimelineItem key={item.company + item.period} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
