
import { Body, GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./Theme/ThemeProvider";

function App() {
  return (
    <>
      <Theme>
        <Body>
          <GlobalStyle />

        </Body>
      </Theme>

    </>
  );
}

export default App;
