import ThemeSelector from "./components/ThemeSelector";
import { Body, GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./Theme/ThemeProvider";

function App() {
  return (
    <>
      <Theme>
        <Body>
          <GlobalStyle />
          <h1>teste</h1>
          <ThemeSelector />
        </Body>
      </Theme>
    </>
  );
}

export default App;
