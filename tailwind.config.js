/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green: {
          500: "#68DFC0",
        },
        blue: {
          800: "#02094C",
          50:"#F6FAFE"
        },
        yellow: {
          500: "#F3B540"
        }
      }
    },
  },
  plugins: [],
}
