import Header from "./components/Header";
<<<<<<< HEAD
import { Body, GlobalStyle } from "./styles/GlobalStyles";
function App() {
  return (
    <>
      <Body>
        <GlobalStyle />
        <Header isLogged={true} />
      </Body>
=======
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
>>>>>>> abee0121e1421863a1df158e658639b5e38c2cbd
    </>
  );
}

export default App;
