import React from 'react'
import Badge from './Badge'
import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

export default function ProjectCard({ project }) {
  const { title, description, image, tech, links } = project
  return (
    <motion.div
      variants={fadeInUp(0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="card overflow-hidden"
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {links.demo && (
            <a className="link" href={links.demo} target="_blank" rel="noreferrer">Live Demo →</a>
          )}
          {links.github && (
            <a className="link" href={links.github} target="_blank" rel="noreferrer">GitHub →</a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
