/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'Barlow', 'sans-serif'],
      },
      letterSpacing: {
        'super': '0.35em',
      },
      fontSize: {
        'hero': 'clamp(120px, 20vw, 240px)',
        'sub-hero': 'clamp(50px, 8.5vw, 110px)',
      },
      lineHeight: {
        'hero': '0.88',
        'sub-hero': '0.92',
      },
    },
  },
  plugins: [],
}
