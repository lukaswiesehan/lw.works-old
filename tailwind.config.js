/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      display: ['Sora', 'sans-serif']
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
