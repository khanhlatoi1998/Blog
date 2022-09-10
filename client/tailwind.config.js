/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        balor: ["ass"],
      },
      colors: {
        color_01: '#fff',
        color_02: '#000',
        color_03: '#e5e7eb69',
        color_04: '#ffbf35',
      },
      fontSize: {
        lo: '1px'
      }
    },
  },
  plugins: [],
}
