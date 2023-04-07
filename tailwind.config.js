/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "#202020",
        selector: "#262626",
      },
    },
  },
  daisyui: {
    themes: false,
 },
  plugins: [require("daisyui")],
}
