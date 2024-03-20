/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      xs: "300px",
      sm: "400px",
      xl: "768px",
    },
    extend: {},
  },
  plugins: [],
}