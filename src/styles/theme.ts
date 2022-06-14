import { extendTheme } from "@chakra-ui/react";

const colors = {
  aqua: {
    primary: "#0FC2C0",
    "primary-md": "#0CABA8",
    secondary: "#008F8C",
    strong: "#023535",
    "strong-md": "#015958",
  },
};

const styles = {
  global: {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    "html, body, #root": {
      width: "100%",
      height: "100%",
      backgroundColor: "#f2f2f2",
    },
  },
};

export const theme = extendTheme({
  colors,
  styles,
});
