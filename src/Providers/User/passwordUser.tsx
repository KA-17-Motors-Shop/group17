import React, { createContext, useContext } from "react";

import { toast } from "react-toastify";
import { motorShopAPI } from "../../services/urls.api";
import { IRecoveryPassword, IUpdatePassword } from "../../interfaces/user";
import { useLoad } from "../Loading";
import { useUser } from ".";

interface IContext {
  updatePassword: (data: IUpdatePassword) => Promise<void>;
  recoveryCode: (data: { email: string }) => Promise<void>;
  recoveryPassword: (data: IRecoveryPassword) => Promise<void>;
}

export const PasswordUserContext = createContext({} as IContext);

export const PasswordUserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { hiddenLoad } = useLoad();
  const { token } = useUser();

  const updatePassword = async (data: IUpdatePassword) => {
    await motorShopAPI
      .patch("/users/password", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("Senha atualizada com sucesso!"))
      .catch((err) => toast.error(err.response.data.message));
    hiddenLoad();
  };

  const recoveryCode = async ({ email }: { email: string }) => {
    hiddenLoad();
  };

  const recoveryPassword = async ({
    accessToken,
    newPassowod,
  }: IRecoveryPassword) => {
    hiddenLoad();
  };

  return (
    <PasswordUserContext.Provider
      value={{ updatePassword, recoveryCode, recoveryPassword }}
    >
      {children}
    </PasswordUserContext.Provider>
  );
};

export const useUpdatePassword = () => useContext(PasswordUserContext);
