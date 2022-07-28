import { createContext, ReactNode, useState } from "react";

interface IValues {
  handleTheme: () => void;
  mode: string;
}

export const ThemeContext = createContext({} as IValues);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState(
    localStorage.getItem("@MotorShop:Theme.mode") || "light"
  );

  const handleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);

    localStorage.setItem("@MotorShop:Theme.mode", newMode);
  };

  return (
    <ThemeContext.Provider value={{ handleTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};
