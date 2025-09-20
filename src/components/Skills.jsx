import React from 'react'
import SectionHeading from './SectionHeading'
import SkillPill from './SkillPill'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../lib/motion'

const skillGroups = {
  Frontend: ['Angular', 'React', 'JavaScript', 'TailwindCSS'],
  Backend: ['Node.js', 'Express.js', 'Python (FastAPI)', 'C# (.NET)', 'REST APIs', 'Laravel (PHP)'],
  'Databases & DevOps': ['MySQL', 'MongoDB (basic)', 'Azure DevOps', 'GitHub', 'Git', 'Docker', 'CI/CD'],
  'E-commerce': ['Shopify (Liquid)', 'Shopify Themes', 'Shopify Apps'],
}

export default function Skills() {
  const iconFor = (label) => {
    const map = {
      Angular: 'devicon-angularjs-plain text-[#dd0031]',
      React: 'devicon-react-original colored',
      JavaScript: 'devicon-javascript-plain colored',
      TailwindCSS: 'devicon-tailwindcss-plain colored',
      'Node.js': 'devicon-nodejs-plain colored',
      'Express.js': 'devicon-express-original text-white',
      'Python (FastAPI)': 'devicon-python-plain colored',
      'C# (.NET)': 'devicon-csharp-plain colored',
      'Laravel (PHP)': 'devicon-laravel-plain colored',
      'REST APIs': 'devicon-openapi-plain',
      MySQL: 'devicon-mysql-plain colored',
      'MongoDB (basic)': 'devicon-mongodb-plain colored',
      'Azure DevOps': 'devicon-azure-plain colored',
      GitHub: 'devicon-github-original',
      Git: 'devicon-git-plain colored',
      Docker: 'devicon-docker-plain colored',
      'CI/CD': 'devicon-gitlab-plain colored',
      'Shopify (Liquid)': 'devicon-shopify-original colored',
      'Shopify Themes': 'devicon-shopify-original colored',
      'Shopify Apps': 'devicon-shopify-original colored',
    }
    return map[label] || ''
  }
  // Inline SVG fallback for Shopify in case Devicon CDN fails
  const svgFor = (label) => {
    if (
      label === 'Shopify (Liquid)' ||
      label === 'Shopify Themes' ||
      label === 'Shopify Apps'
    ) {
      // Shopify glyph (S) simplified for small size; green brand color
      return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden="true">
          <path fill="#95BF47" d="M26.7 8.7l-4.7-1.1c-.2 0-.4.1-.4.3l-3.8 20.6c0 .2.1.4.3.4l4.3 1c.2 0 .4-.1.4-.3l3.9-20.5c0-.2-.1-.4-.3-.4z"/>
          <path fill="#5E8E3E" d="M21.4 7.6l-4.3-1c-.2 0-.4.1-.4.3l-3.8 20.6c0 .2.1.4.3.4l4.3 1c.2 0 .4-.1.4-.3l3.8-20.6c0-.2-.1-.4-.3-.4z"/>
          <path fill="#95BF47" d="M16 6.5l-4.3-1c-.2 0-.4.1-.4.3L7.5 26.4c0 .2.1.4.3.4l4.3 1c.2 0 .4-.1.4-.3L16.4 6.8c0-.2-.1-.4-.4-.4z"/>
          <path fill="#fff" d="M14.6 21.9c.3 1.9 1.7 3.1 3.8 3.1 1.9 0 3.2-.9 3.2-2.4 0-1.1-.8-1.8-2.2-2.3l-1.2-.4c-.8-.3-1.1-.5-1.1-.9 0-.5.5-.8 1.3-.8.8 0 1.5.3 2.2.9l1-1.6c-.8-.7-1.8-1-3-1-1.8 0-3 .9-3 2.3 0 1 .7 1.8 2.1 2.3l1.2.4c.9.3 1.2.6 1.2 1 0 .5-.6.9-1.4.9-1 0-1.8-.5-2.3-1.3l-1.6.8z"/>
        </svg>
      )
    }
    return null
  }
  // Image via SimpleIcons CDN (brand-accurate) for Shopify
  const imgFor = (label) => {
    if (
      label === 'Shopify (Liquid)' ||
      label === 'Shopify Themes' ||
      label === 'Shopify Apps'
    ) {
      return 'https://cdn.simpleicons.org/shopify/95BF47'
    }
    return ''
  }
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Technologies I use" subtitle="A curated set of tools I use to design, build, and ship products." />
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {Object.entries(skillGroups).map(([group, items], idx) => (
            <motion.div key={group} variants={fadeInUp(idx * 0.05)} className="card p-6">
              <h3 className="font-semibold mb-4">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <SkillPill key={skill} label={skill} icon={iconFor(skill)} svg={svgFor(skill)} imgSrc={imgFor(skill)} iconSize="h-5 w-5" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
