import { Body, GlobalStyle } from "./styles/GlobalStyles";

import Header from "./components/Header";
import Theme from "./Theme/ThemeProvider";

function App() {
  return (
    <>
      <Theme>
        <Body>
          <GlobalStyle />

          <Header isLogged={true} />
        </Body>
      </Theme>
    </>
  );
}

export default App;
