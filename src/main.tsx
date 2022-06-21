import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { ParallaxProvider } from "react-scroll-parallax";
import { MainContextProvider } from "./context";
import { FirebaseProvider } from "./context/firebase";
import Router from "./router";
import { queryClient } from "./services/queryClient";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainContextProvider>
      <QueryClientProvider client={queryClient}>
        <FirebaseProvider>
          <ChakraProvider theme={theme}>
            <ParallaxProvider>
              <Router />
            </ParallaxProvider>
          </ChakraProvider>
        </FirebaseProvider>
      </QueryClientProvider>
    </MainContextProvider>
  </React.StrictMode>,
);
