import React, { useState, } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  // Handle smooth scrolling for anchor links
  const scrollToSection = (e, href) => {
    e.preventDefault()
    setOpen(false)
    
    // Get the target element
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      // Wait for the next tick to ensure the menu is closed
      setTimeout(() => {
        // Get navbar height
        const navbar = document.querySelector('header')
        const navbarHeight = navbar?.offsetHeight || 80
        
        // Calculate the position to scroll to
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight - 16 // 16px extra space
        
        // Smooth scroll to the target
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        
        // Update URL hash without jumping
        window.history.pushState(null, null, href)
      }, 100) // Small delay to ensure menu is closed
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.5)]">
      <div className="container flex items-center justify-between py-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={(e) => scrollToSection(e, item.href)}
              className="relative hover:text-brand transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button aria-label="Toggle menu" onClick={() => setOpen((o) => !o)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 10.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200/60 dark:border-slate-800/60"
          >
            <div className="container py-2 flex flex-col gap-2">
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-3 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
