import React from "react";
import { ZipCodeProvider } from "./User/cepValidation";
import { LoginProvider } from "./User/login";
import { RegisterProvider } from "./User/register";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <ZipCodeProvider>{children}</ZipCodeProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
