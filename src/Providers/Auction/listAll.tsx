import React, { createContext, useContext } from "react";
import { IAuctionRes, IFiltersParams } from "../../interfaces/auction";

import { motorShopAPI } from "../../services/urls.api";
import { useUser } from "../User/login";

interface IListContext {
  getListAuction: () => Promise<IAuctionRes[]>;
  getListSales: () => Promise<IAuctionRes[]>;
  getListFilter: ({
    gtDataLimit,
    gtPrice,
    gtrYear,
    ltDataLimit,
    ltPrice,
    ltYear,
    title,
    type,
    typeVehicle,
  }: IFiltersParams) => Promise<IAuctionRes[]>;
  getMySales: () => Promise<IAuctionRes[]>;
  getMyAuctions: () => Promise<IAuctionRes[]>;
  getAnnounce: (id: string) => Promise<IAuctionRes>;
  getAnnounceBySeller: (id: string) => Promise<IAuctionRes[]>;
}

export const ListAnounceContext = createContext({} as IListContext);

export const ListAnounceProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { token } = useUser();

  const getListAuction = async () => {
    const response = await motorShopAPI
      .get("/announcement/?type=auction")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  const getListSales = async () => {
    const response = await motorShopAPI
      .get("/announcement/?type=sale")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  const getMySales = async () => {
    const response = await motorShopAPI
      .get("/announcement/me/seller?type=sale", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  const getMyAuctions = async () => {
    const response = await motorShopAPI
      .get("/announcement/me/seller?type=auction", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  const getAnnounce = async (id: string) => {
    const response = await motorShopAPI
      .get(`/announcement/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  const getAnnounceBySeller = async (id: string) => {
    const response = await motorShopAPI
      .get(`/announcement/seller/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  const getListFilter = async ({
    gtDataLimit,
    gtPrice,
    gtrYear,
    ltDataLimit,
    ltPrice,
    ltYear,
    title,
    type,
    typeVehicle,
  }: IFiltersParams) => {
    const filter = `${ltDataLimit ? `ltDataLimit=${ltDataLimit}&` : ``}${
      gtDataLimit ? `gtDataLimit=${gtDataLimit}&` : ``
    }${gtPrice ? `gtPrice=${gtPrice}&` : ``}${
      gtrYear ? `gtrYear=${gtrYear}&` : ``
    }${ltPrice ? `ltPrice=${ltPrice}&` : ``}${
      ltYear ? `ltYear=${ltYear}&` : ``
    }${title ? `title=${title}&` : ``}${type ? `type=${type}&` : ``}${
      typeVehicle ? `typeVehicle=${typeVehicle}&` : ``
    }
    `;

    const response = await motorShopAPI
      .get(`/announcement/?${filter}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));

    return response;
  };

  return (
    <ListAnounceContext.Provider
      value={{
        getAnnounceBySeller,
        getListAuction,
        getListFilter,
        getListSales,
        getMyAuctions,
        getMySales,
        getAnnounce,
      }}
    >
      {children}
    </ListAnounceContext.Provider>
  );
};

export const useListAnnounces = () => useContext(ListAnounceContext);
