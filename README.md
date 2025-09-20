# Modern Portfolio (React + TailwindCSS)

A clean, minimal, and responsive portfolio website built with React, Vite, TailwindCSS, and Framer Motion. Includes dark mode, smooth scrolling, subtle animations, SEO metadata, and modular components.

## Features
- Hero, About, Skills, Projects, Experience, Contact, and Footer sections
- Dark/Light theme toggle (persisted)
- Smooth scrolling and subtle animations
- SEO-friendly metadata (via `react-helmet-async`)
- Mobile-first responsive design
- Modular, reusable components and data-driven projects

## Tech Stack
- React 18 + Vite
- TailwindCSS 3
- Framer Motion
- react-helmet-async

## Getting Started

1) Install dependencies
```
npm install
```

2) Start the dev server
```
npm run dev
```
Open the local URL shown in your terminal (typically http://localhost:5173).

3) Build for production
```
npm run build
npm run preview
```

## Customize
- Update copy in:
  - `src/components/Hero.jsx`
  - `src/components/About.jsx`
  - `src/components/Contact.jsx`
  - `src/components/Experience.jsx`
- Update projects in: `src/data/projects.js`
- Update SEO metadata in: `src/App.jsx` (inside `<Helmet>...</Helmet>`)
- Replace social links and email in: `src/components/Contact.jsx`, `src/components/Footer.jsx`
- Replace the brand initials in: `src/components/Navbar.jsx`

## Deployment
- Netlify, Vercel, or any static host supports Vite builds.
- On Netlify/Vercel, set build command: `vite build` (or `npm run build`) and publish directory: `dist/`.

## License
MIT
