import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Providers from "./Providers";
import ThemeProvider from "./Theme/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Providers>
        <App />
      </Providers>
    </ThemeProvider>
  </React.StrictMode>
);
