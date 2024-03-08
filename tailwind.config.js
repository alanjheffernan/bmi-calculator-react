/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#253347",
        "dark-electric-blue": "#5E6E85",
        "bright-blue": "#345FF6",
        "less-bright-blue": "#587DFF",
        "top-left": "#D7FDFF00",
        "second-top-left": "#D6FCFE00",
        "bottom-right": "#D6E6FE",
        "second-bottom-right": "#D6E6FE70",
      },
    },
  },
  plugins: [],
}

