import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800 py-8 mt-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Subash Lakshmanan. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="link" href="#home">Back to top</a>
          <a className="link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </footer>
  )
}
