import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { motorShopAPI } from "../../services/urls.api";

import { IRegisterAuction } from "../../interfaces/auction";
import { useLoad } from "../Loading";

type IAuctionTypeContext = {
  auction: IRegisterAuction;
  registerAuction: (data: IRegisterAuction, images?: File[]) => Promise<void>;
};

const initialValue = {
  auction: {},
  registerAuction: async () => {},
};

export const RegisterAuctionContext =
  createContext<IAuctionTypeContext>(initialValue);

export const RegisterAuctionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [auction, setAuction] = useState(initialValue.auction);

  const history = useHistory();

  const { hiddenLoad } = useLoad();

  const registerAuction = async (data: IRegisterAuction, images?: File[]) => {
    const token = localStorage.getItem("@token:Motor");

    const formData = new FormData();
    Object.entries(data).forEach((item) => formData.append(item[0], item[1]));
    if (images) {
      images.forEach((item) => formData.append("images", item));
    }

    await motorShopAPI
      .post("/announcement/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Auction-->", res);
        setAuction(res);
        toast.success("Leilão criado com sucesso!");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err.response.data.message);
      });
    hiddenLoad();
  };

  return (
    <RegisterAuctionContext.Provider value={{ auction, registerAuction }}>
      {children}
    </RegisterAuctionContext.Provider>
  );
};

export const useAuctionRegister = () => useContext(RegisterAuctionContext);
