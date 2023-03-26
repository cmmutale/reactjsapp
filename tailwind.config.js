/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        'wave': 'gradient 15s ease infinite',
      }
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '24px',
      h1: '40px',
      h2: '32px'
    }
  },
  plugins: [],
}
