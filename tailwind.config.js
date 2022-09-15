/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cursive: ["cursive"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
