import Header from "./components/Header";
import { Body, GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Body>
        <GlobalStyle />
        <Header isLogged={true} />
      </Body>
    </>
  );
}

export default App;
