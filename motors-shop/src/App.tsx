import { Body, GlobalStyle } from "./styles/GlobalStyles";

import Header from "./components/Header";
import Theme from "./Theme/ThemeProvider";
import ButtonPrimary from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Theme>
        <Body>
          <GlobalStyle />

          <Header isLogged={false} />
          {/* <ButtonPrimary>Teste</ButtonPrimary> */}
          {/* <Card /> */}
        </Body>
      </Theme>
    </>
  );
}

export default App;
