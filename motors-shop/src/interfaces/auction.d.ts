export interface IRegisterAuction {
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

export interface IAuctionRes {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
  km?: string;
  year?: string;
  type?: type;
  typeVehicle?: typeVehicle;
  isActive?: boolean;
  limitDate?: string;
  publishedData?: string;
  sellerId?: string;
  status?: string;
}

enum type {
  auction = "auction",
  sale = "sale",
}

enum typeVehicle {
  car = "car",
  motocycle = "motocycle",
}
