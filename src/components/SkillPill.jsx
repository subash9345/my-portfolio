import React from 'react'

export default function SkillPill({ label, icon, svg, imgSrc, iconSize = 'h-4 w-4' }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 dark:border-slate-700/60 px-3 py-1.5 text-sm bg-white/60 dark:bg-slate-800/60">
      {imgSrc ? (
        <img src={imgSrc} alt="" className={`${iconSize}`} aria-hidden="true" />
      ) : svg ? (
        <span className={`inline-flex ${iconSize}`}>{svg}</span>
      ) : icon ? (
        <i className={`${icon} ${iconSize.replace('h-','text-').replace(' w-',' ')}`} aria-hidden="true" />
      ) : null}
      <span>{label}</span>
    </span>
  )
}
