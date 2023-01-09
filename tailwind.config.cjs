/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   dark: "#3e3e42",
    //   darker: "#252526",
    //   light: "#d2d3db",
    //   lighter: "#fafafa"
    // },
  },
  plugins: [require("daisyui")],
}
