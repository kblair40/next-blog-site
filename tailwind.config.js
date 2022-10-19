/** @type {import('tailwindcss').Config} */
const {
  ClipAction,
} = require("@cloudinary/url-gen/actions/psdTools/ClipAction");
const defaultTheme = require("tailwindcss/defaultTheme");

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
        heading: ["'Bodoni Moda'", ...defaultTheme.fontFamily.serif],
      },
      height: {
        "screen-nav": "calc(100vh - 56px)",
        "screen-1/2": "50vh",
        88: "352px",
        100: "400px",
      },
      maxHeight: {
        "screen-nav": "calc(100vh - 56px)",
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
        "screen-3/4": "75vw",
        "screen-80": "80vw",
        112: "28rem",
        128: "32rem",
      },
      maxWidth: {
        screen: "100vw",
        "screen-title-sm": "calc(100vw - 80px)",
        "screen-title-md": "calc(100vw - 140px)",
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
        creme: {
          DEFAULT: "#FFF9F3",
          700: "#FAE7D4",
          600: "#FCF0E3",
          500: "#FFF9F3",
          400: "#FFFBF7",
          300: "#FFFEFC",
        },
        darkgreen: "#414b3b",
        lightgreen: "#8ca87c",
        pink: "#ffebeb",
      },
      keyframes: {
        "point-right": {
          "0%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        "point-right": "point-right 1s ease-in-out infinite",
        "fade-in": "fade-in .25s ease-in-out forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
