import { extendTheme } from "@chakra-ui/react";

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
  styles,
});
