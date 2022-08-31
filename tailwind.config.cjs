/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      widest: '.23em'
    },
    extend: {
      blur: {
        super: '81.55px'
      }
    },
  },
  plugins: [],
}
