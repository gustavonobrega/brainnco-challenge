/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif',
      },
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'gray-dark': '#333333',
        'gray-light': '#EFEFEF',
        'mega-sena': '#6BEFA3',
        'quina': '#8666EF',
        'loto-facil': '#DD7AC6',
        'loto-mania': '#FFAB64',
        'time-mania': '#5AAD7D',
        'dia-de-sorte': '#BFAF83',
      },
    },
  },
  plugins: [],
}
