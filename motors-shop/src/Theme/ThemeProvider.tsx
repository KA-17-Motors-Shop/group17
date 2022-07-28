import React, { useContext } from "react";
import { IThemeColors, ThemeProvider } from "styled-components";
import { ThemeContext } from "../Providers/Theme/index";
import { darkTheme, lightTheme } from "./ThemeColors";

const Theme = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useContext(ThemeContext);
  console.log(mode);

  const theme: IThemeColors = mode === "light" ? lightTheme : darkTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
