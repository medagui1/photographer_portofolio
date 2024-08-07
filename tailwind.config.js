/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'smokey-black': 'hsl(0, 0%, 7%)',
        'eerie-black': 'hsl(0, 0%, 9%)',
        'radical-red': 'hsl(346, 100%, 58%)',
        'white-a9': 'hsla(0, 0%, 100%, 0.09)',
        'white-a15': 'hsla(0, 0%, 100%, 0.15)',
        'white-a25': 'hsla(0, 0%, 100%, 0.25)',
        'white-a50': 'hsla(0, 0%, 100%, 0.5)',
        'white-a70': 'hsla(0, 0%, 100%, 0.7)',
        'white-a75': 'hsla(0, 0%, 100%, 0.75)',
        'white-a80': 'hsla(0, 0%, 100%, 0.8)',
        'jet-1': 'hsl(0, 0%, 20%)',
        'jet-2': 'hsl(0, 0%, 16%)',
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        'recoleta': ['Recoleta', 'serif'],
        'gordita': ['Gordita', 'sans-serif'],
      },
      fontSize: {
        'fs-1': '6rem',
        'fs-2': '5rem',
        'fs-3': '3.8rem',
        'fs-4': '2.8rem',
        'fs-5': '2.6rem',
        'fs-6': '2.2rem',
        'fs-7': '2rem',
        'fs-8': '1.8rem',
        'fs-9': '1.5rem',
        'fs-10': '1.4rem',
        'fs-11': '1.2rem',
      },
      fontWeight: {
        'fw-300': 300,
        'fw-400': 400,
        'fw-500': 500,
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(180deg, transparent, hsl(0, 0%, 7%))',
        'gradient-2': 'linear-gradient(180deg, hsl(0, 0%, 7%) 25%, hsla(0, 0%, 0%, 0.6) 80%)',
      },
      spacing: {
        'section-padding': '60px',
      },
      boxShadow: {
        'custom-shadow': '0 12px 30px -10px hsla(0, 0%, 14%, 0.1)',
      },
      borderRadius: {
        'circle': '50%',
        'radius-5': '5px',
        'radius-25': '25px',
      },
      transitionDuration: {
        'transition-1': '0.25s',
        'transition-2': '0.5s',
        'transition-3': '1s',
      },
      transitionTimingFunction: {
        'cubic-in': 'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
        'cubic-out': 'cubic-bezier(0.33, 0.85, 0.4, 0.96)',
      },
    },
  },
  plugins: [],
}

