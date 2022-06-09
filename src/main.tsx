import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { MainContextProvider } from "./context";
import Router from "./router";
import { queryClient } from "./services/queryClient";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainContextProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </QueryClientProvider>
    </MainContextProvider>
  </React.StrictMode>
);
