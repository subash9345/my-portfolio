import React, { useEffect, useState } from 'react'

export default function Spotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(14,165,233,0.15), rgba(2,6,23,0.0))`,
      }}
    />
  )
}
