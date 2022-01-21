import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useContext, useState } from "react";
import { defaultTheme, janusTheme, ThemeContext } from "../lib/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(defaultTheme);
  const [appTheme, setAppTheme] = useState(janusTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, appTheme, setAppTheme }}>
      <ThemeProvider theme={appTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
