/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'barlowcondensed': ['"Barlow Condensed"', 'sans-serif', '"Open Sans"'],
      'barlow': ['Barlow', 'sans-serif', '"Open Sans"'],
      'bellefair': ['Bellefair', 'sans-serif', '"Open Sans"'],
    },
    letterSpacing: {
      widest: '.23em'
    },
    extend: {
      blur: {
        super: '81.55px'
      },
      colors: {
        'cgray': '#D0D6F9'
      },
      screens: {
        '3xl': '1728px'
      },
    },
  },
  plugins: [],
}
