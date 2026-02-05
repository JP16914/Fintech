/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        background: '#FDFBF7',
        quant: {
          dark: '#0F172A',
          primary: '#991B1B',
          gold: '#D97706',
          bg: '#FDFBF7',
        }
      }
    },
  },
  plugins: [],
}