import React from "react";
import { LoginProvider } from "./User/login";
import { RegisterProvider } from "./User/register";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>{children}</LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
