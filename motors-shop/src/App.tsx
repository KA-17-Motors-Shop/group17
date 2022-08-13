import Router from "./Router";
import { Body, GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./Theme/ThemeProvider";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Theme>
        <Body>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <GlobalStyle />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <Router />
        </Body>
      </Theme>
    </>
  );
}

export default App;
