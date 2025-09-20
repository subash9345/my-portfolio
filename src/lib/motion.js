// Reusable Framer Motion variants
export const fadeInUp = (delay = 0, y = 24) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
})

export const staggerContainer = (stagger = 0.08, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

export const zoomIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay } },
})

export const slideIn = (direction = 'up', delay = 0, distance = 30) => {
  const axis = ['left', 'right'].includes(direction) ? 'x' : 'y'
  const from = direction === 'left' ? -distance : direction === 'right' ? distance : direction === 'up' ? distance : -distance
  return {
    hidden: { opacity: 0, [axis]: from },
    show: { opacity: 1, [axis]: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
  }
}
