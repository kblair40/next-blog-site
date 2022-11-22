import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      darkgreen: "#53614D",
    },
  },
  fonts: {
    body: "Nunito, system-ui, sans-serif",
    heading: "Playfair Display, serif",
  },
});

export default theme;
