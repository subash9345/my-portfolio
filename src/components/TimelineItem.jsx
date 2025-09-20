import React from 'react'

export default function TimelineItem({ role, company, period, description, tech = [] }) {
  return (
    <div className="relative pl-8 pb-8 group">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-brand ring-4 ring-brand/20"></span>
      <div className="card p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-semibold">{role} · <span className="text-brand">{company}</span></h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{period}</p>
        </div>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p>
        {tech.length > 0 && (
          <div className="mt-3 text-sm text-slate-500 dark:text-slate-400">{tech.join(' • ')}</div>
        )}
      </div>
    </div>
  )
}
