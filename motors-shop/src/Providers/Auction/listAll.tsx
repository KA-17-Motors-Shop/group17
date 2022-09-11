import React, { createContext, useContext } from "react";
import { IAuctionRes } from "../../interfaces/auction";

import { APILocal } from "../../services/urls.api";
// import { motorShopAPI }from "../../services/urls.api";

interface IListContext {
  // listAuction?: IAuctionRes[];
  getListAuction: () => Promise<IAuctionRes[]>;
}

// const initialValue = {
//   listAuction: [],
//   getListAuction: async () => {},
// };

export const ListAuctionContext = createContext({} as IListContext);

export const ListAuctionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const getListAuction = async () => {
    const response = await APILocal.get("/announcement/")
      .then((res) => {
        localStorage.setItem("@List:Auction", res.data);
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  return (
    <ListAuctionContext.Provider value={{ getListAuction }}>
      {children}
    </ListAuctionContext.Provider>
  );
};

export const useListAuction = () => useContext(ListAuctionContext);
