import { Body, GlobalStyle } from "./styles/GlobalStyles";

import ThemeSelector from "./components/ThemeSelector";
import Theme from "./Theme/ThemeProvider";

function App() {
  return (
    <>
      <Theme>
        <Body>
          <GlobalStyle />
          <ThemeSelector />
        </Body>
      </Theme>
    </>
  );
}

export default App;
