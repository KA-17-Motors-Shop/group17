import Header from "./components/Header";
import Theme from "./Theme/ThemeProvider";
import Card from "./components/Card";
import { ButtonPrimary } from "./components/Button";
import { Body, GlobalStyle } from "./styles/GlobalStyles";
import FormSingIn from "./components/Forms/SingInForm";
import Modal from "./components/Modal";

import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Theme>
        <Body>
          <GlobalStyle />

          <>
            <Modal
              close={() => setShowModal(false)}
              show={showModal}
              // height="25%"
              // width="30%"
            >
              <h1>Modal Aberto</h1>
            </Modal>
            <Header isLogged={true} />
            <ButtonPrimary onClick={() => setShowModal(true)}>
              Abrir Modal
            </ButtonPrimary>
            <FormSingIn />
            <Card />
          </>
        </Body>
      </Theme>
    </>
  );
}

export default App;
