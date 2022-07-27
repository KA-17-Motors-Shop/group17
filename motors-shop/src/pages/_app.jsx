import ThemeProvider from "../components/Theme/ThemeProvider";
import { Body, GlobalStyle } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Body>
          <Component {...pageProps} />
        </Body>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
