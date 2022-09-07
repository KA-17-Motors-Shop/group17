import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { APILocal, motorShopAPI } from "../../services/urls.api";

type IAuctionTypeContext = {
  auction: IRegisterAuction;
  registerAuction: (data: IRegisterAuction) => Promise<void>;
};

enum type {
  auction = "auction",
  sale = "sale",
}

enum typeVehicle {
  car = "car",
  motocycle = "motocycle",
}

interface IRegisterAuction {
  title?: string;
  description?: string;
  year?: string;
  km?: string;
  price?: number;
  isActive?: boolean;
  type?: type;
  typeVehicle?: typeVehicle;
  limitDate?: string;
  images?: string;
}

// interface IAuctionRes {
//   id?: string;
//   title?: string;
//   description?: string;
//   price?: number;
//   km?: string;
//   year?: string;
//   type?: type;
//   typeVehicle?: typeVehicle;
//   isActive?: boolean;
//   limitDate?: string;
//   publishedData?: string;
//   sellerId?: string;
//   status?: string;
// }

const initialValue = {
  auction: {},
  registerAuction: async () => {},
};

// interface IContextAuction {
//   registerAuction: (data: IRegisterAuction) => Promise<void>;
// }

export const RegisterAuctionContext =
  createContext<IAuctionTypeContext>(initialValue);

export const RegisterAuctionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [auction, setAuction] = useState(initialValue.auction);

  const history = useHistory();

  const registerAuction = async (data: IRegisterAuction) => {
    const token = localStorage.getItem("@token:Motor");
    await APILocal.post("/announcement/", data, {
      headers: { Authorization: `Bearer ${token}` },
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
  };

  return (
    <RegisterAuctionContext.Provider value={{ auction, registerAuction }}>
      {children}
    </RegisterAuctionContext.Provider>
  );
};

export const AuctionRegister = () => useContext(RegisterAuctionContext);
