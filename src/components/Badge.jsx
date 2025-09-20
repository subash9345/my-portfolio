import React from 'react'

export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60">
      {children}
    </span>
  )
}
