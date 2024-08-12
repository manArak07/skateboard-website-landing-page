/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xl': { 'max': '1200px' },
      'l': { 'max': '1000px' },
      'lg': { 'max': '900px' },
      'md': { 'max': '730px' },
      'sm': { 'max': '600px' },
      'st': { 'max': '450px'},
      'xs': { 'max': '400px' },
    },
    extend: {
      fontFamily:{
        rubik: ["Rubik", "sans-serif"],
      }
    },
  },
  plugins: [],
}