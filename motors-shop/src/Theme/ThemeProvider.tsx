import React, { useState } from "react";
import { IThemeColors, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./ThemeColors";

interface Ivalues {
  handleTheme: () => void;
  mode: string;
}

export const ThemeContext = React.createContext({} as Ivalues);

const StyledThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState(
    localStorage.getItem("@MotorShop:Theme.mode") || "light"
  );

  const handleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);

    localStorage.setItem("@MotorShop:Theme.mode", newMode);
  };

  const colors: IThemeColors = mode === "light" ? darkTheme : lightTheme;

  console.log();
  return (
    <ThemeProvider theme={colors}>
      <ThemeContext.Provider
        value={{
          handleTheme,
          mode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
export default StyledThemeProvider;