import Header from "./components/Header";
import Theme from "./Theme/ThemeProvider";
import Card from "./components/Card";
import { ButtonPrimary } from "./components/Button";
import { Body, GlobalStyle } from "./styles/GlobalStyles";
import FormSingIn from "./components/Forms/SingInForm";

function App() {
  return (
    <>
      <Theme>
        <Body>
          <GlobalStyle />

          <Header isLogged={true} />
          <ButtonPrimary>Teste</ButtonPrimary>
          <FormSingIn />
          <Card />
        </Body>
      </Theme>
    </>
  );
}

export default App;
