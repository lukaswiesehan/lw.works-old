/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-lato)', 'Lato', 'sans-serif'],
      display: ['var(--font-sora)', 'Sora', 'sans-serif']
    },
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      },
      blur: {
        '4xl': '96px'
      }
    }
  },
  plugins: []
}
