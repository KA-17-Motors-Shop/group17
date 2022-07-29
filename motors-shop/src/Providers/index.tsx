import { ReactNode } from "react";
import { ThemeProvider } from "./Theme/index";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
