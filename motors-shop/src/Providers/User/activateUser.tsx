import React, { createContext, useContext } from "react";
import { motorShopAPI } from "../../services/urls.api";
import { toast } from "react-toastify";
import { useUser } from "./login";

interface IContext {
  activateUser: (code: string) => Promise<void>;
  recoveryNewCode: (id: string) => Promise<void>;
}

export const ActivateUserContext = createContext({} as IContext);

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { getUser, token } = useUser();

  const activateUser = async (code: string) => {
    await motorShopAPI
      .patch(`/users/activate/${code}`)
      .then(async (res) => {
        if (res.status === 200) {
          toast.success("Usuário ativado com sucesso!");
          await getUser(token!);
        } else {
          toast.warning("O código não é válido!");
        }
      })
      .catch((err) => console.log(err));
  };

  const recoveryNewCode = async (token: string) => {
    await motorShopAPI
      .patch(`users/recovery/code/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(async (_) =>
        toast.success("O código foi enviado para o seu e-mail")
      )
      .catch((err) => console.log(err));
  };

  return (
    <ActivateUserContext.Provider value={{ activateUser, recoveryNewCode }}>
      {children}
    </ActivateUserContext.Provider>
  );
};

export const useRegister = () => useContext(ActivateUserContext);
