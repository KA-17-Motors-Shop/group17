import React, { createContext, useContext } from "react";
import { IResBids, IResBidUser } from "../../interfaces/bids";
import { motorShopAPI } from "../../services/urls.api";
import { useUser } from "../User";

interface IContext {
  getBidsAnnounce: (id: string) => Promise<IResBids[]>;
  getBidsUser: () => Promise<IResBidUser[]>;
}

export const BidsContext = createContext({} as IContext);

export const BidsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { token } = useUser();

  const getBidsAnnounce = async (id: string) => {
    return await motorShopAPI
      .get(`/bids/announcement/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getBidsUser = async () => {
    return await motorShopAPI
      .get(`/bids/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BidsContext.Provider value={{ getBidsAnnounce, getBidsUser }}>
      {children}
    </BidsContext.Provider>
  );
};

export const useBids = () => useContext(BidsContext);
