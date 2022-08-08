import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Body, GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./Theme/ThemeProvider";


function App() {


  return (
    <>
      <Theme>
        <Body>
          <GlobalStyle />

          <BrowserRouter>
            <Router />
          </BrowserRouter>

        </Body>
      </Theme>
    </>
  );
}

export default App;
