/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      25: "100px",
      50: "200px",
      75: "300px",
      100: "400px",
    },
    fontFamily: {
      cursive: ["cursive"],
    },
    extend: {
      colors: {
        faint: "#FCFCFA",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
