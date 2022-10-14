import React, { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { motorShopAPI } from "../../services/urls.api";

import { IRegisterAnnounce } from "../../interfaces/auction";
import { useLoad } from "../Loading";

type IAuctionTypeContext = {
  updateAnnounce: (
    id: string,
    data: IRegisterAnnounce,
    images?: File[]
  ) => Promise<void>;
};

export const UpdateDeleteAnnounceContext = createContext(
  {} as IAuctionTypeContext
);

export const UpdateDeleteAnnounceProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const history = useHistory();

  const { hiddenLoad } = useLoad();

  const updateAnnounce = async (
    id: string,
    data: IRegisterAnnounce,
    images?: File[]
  ) => {
    const token = localStorage.getItem("@token:Motor");

    const formData = new FormData();
    Object.entries(data).forEach((item) => formData.append(item[0], item[1]));
    if (images?.length) {
      images.forEach((item) => formData.append("images", item));
    }

    await motorShopAPI
      .patch(`/announcement/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Auction-->", res);
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
    <UpdateDeleteAnnounceContext.Provider value={{ updateAnnounce }}>
      {children}
    </UpdateDeleteAnnounceContext.Provider>
  );
};

export const useAnnounceUpdateDelete = () =>
  useContext(UpdateDeleteAnnounceContext);
