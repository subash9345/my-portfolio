/******** TailwindCSS configuration ********/
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7c3aed',
          dark: '#5b21b6',
        },
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(91, 33, 182, 0.28)',
      },
    },
  },
  plugins: [],
}
