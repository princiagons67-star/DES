/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Manrope', 'sans-serif'],
      },
      colors: {
          mulberry: {
              DEFAULT: '#576341',
              light: '#a8b58d',
              dark: '#3c4727'
          },
          silkgold: {
              DEFAULT: '#d4af37',
              light: '#ffe088'
          },
          cream: '#fbf9f8',
          earthy: '#45483e',
          surface: '#ffffff'
      },
      boxShadow: {
          'glass': '0 20px 40px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
