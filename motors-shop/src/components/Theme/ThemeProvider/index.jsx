import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../../styles/Theme";

const Theme = ({ children }) => {
  const mode = "light";

  const theme = mode === "light" ? { ...lightTheme } : { ...darkTheme };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
