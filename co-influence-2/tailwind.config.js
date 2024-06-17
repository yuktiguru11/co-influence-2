/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'bgColour': '#d2d2cb',
        "frontColour": '#4d695d',
        "hoverColour": '#83a79d'
      }
    },
  },
  plugins: [],
}

