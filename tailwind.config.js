/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "980px",
      xl: "1200px",
    },
    minHeight: {
      25: "100px",
      50: "200px",
      75: "300px",
      100: "400px",
    },

    extend: {
      fontFamily: {
        cursive: ["cursive"],
      },
      height: {
        "screen-nav": "calc(100vh - 56px)",
        "screen-1/2": "50vh",
      },
      width: {
        "screen-1/2": "50vw",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
