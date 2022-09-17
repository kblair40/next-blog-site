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

    extend: {
      fontFamily: {
        cursive: ["cursive"],
      },
      height: {
        "screen-nav": "calc(100vh - 56px)",
        "screen-1/2": "50vh",
        88: "352px",
        100: "400px",
      },
      minHeight: {
        25: "100px",
        50: "200px",
        75: "300px",
        100: "400px",
        "screen-nav": "calc(100vh - 56px)",
      },
      width: {
        "screen-1/2": "50vw",
      },
      minWidth: {
        base: "320px",
        sm: "560px",
      },
      colors: {
        primary: {
          DEFAULT: "#679381",
          900: "#32404B",
          800: "#3F565D",
          700: "#4C6F6F",
          600: "#5A817A",
          500: "#679381",
          400: "#80A68E",
          300: "#99B99E",
          200: "#B4CBB2",
          100: "#D1DDCC",
          50: "#EAEEE6",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
