import { Body, GlobalStyle } from "./styles/GlobalStyles";

import Header from "./components/Header";
import Theme from "./Theme/ThemeProvider";
import ButtonPrimary from "./components/Button";

function App() {
  return (
    <>
      <Theme>
        <Body>
          <GlobalStyle />

          <Header isLogged={false} />
          <ButtonPrimary>Teste</ButtonPrimary>
        </Body>
      </Theme>
    </>
  );
}

export default App;
