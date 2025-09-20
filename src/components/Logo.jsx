import React from 'react'

export default function Logo() {
  return (
    <a href="#home" className="group inline-flex items-center gap-3">
      <span className="relative inline-grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-brand to-fuchsia-500 text-slate-900 dark:text-slate-900 font-extrabold shadow-[0_10px_30px_-10px_rgba(124,58,237,0.6)] ring-1 ring-white/10">
        <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>
        SL
      </span>
      <span className="hidden sm:block font-semibold tracking-tight hover:text-brand transition-colors">
        Subash
      </span>
    </a>
  )
}
