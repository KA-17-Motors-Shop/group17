import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { IAddressData, IResAddress } from "../../interfaces/address";
import { motorShopAPI } from "../../services/urls.api";
import { useUser } from "../User";

interface IContext {
  createAddress: (data: IAddressData) => Promise<void>;
  getMyAddress: () => Promise<IResAddress[]>;
  findAddress: (id: string) => Promise<IResAddress>;
}

export const ListCreateAddressContext = createContext({} as IContext);

export const ListCreateAddressProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { token } = useUser();

  const createAddress = async (data: IAddressData) => {
    await motorShopAPI
      .post("/address", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  const getMyAddress = async () => {
    return await motorShopAPI
      .get("/address", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  const findAddress = async (id: string) => {
    return await motorShopAPI
      .get(`/address/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <ListCreateAddressContext.Provider
      value={{ createAddress, findAddress, getMyAddress }}
    >
      {children}
    </ListCreateAddressContext.Provider>
  );
};

export const useAddress = () => useContext(ListCreateAddressContext);
