import React from 'react'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6 md:mb-8">
      {eyebrow && <p className="text-sm uppercase tracking-widest text-brand mb-2">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 md:mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">{subtitle}</p>}
    </div>
  )
}
