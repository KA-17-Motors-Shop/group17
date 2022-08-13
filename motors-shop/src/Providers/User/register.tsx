import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { motorShopAPI } from "../../services/urls.api";

interface IRegister {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birhtDate?: string | Date;
  description?: string;
  password?: string;
  typeAccount?: string;
  zipCode?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: number | string;
  complement?: string;
}

interface IContext {
  registerUser: (data: IRegister) => Promise<void>;
}

export const RegisterContext = createContext({} as IContext);

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const registerUser = async (data: IRegister) => {
    const isSeller = data.typeAccount === "client" ? false : true;
    delete data.typeAccount;
    await motorShopAPI
      .post("/users/signup", { ...data, isSeller })
      .then((res) => {
        console.log(res);
        toast.success("Cadastro feito com sucesso!");
      })
      .catch((err) => {
        toast.warning(err.response.data.message);
      });
  };

  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
