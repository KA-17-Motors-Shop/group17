import axios from "axios";

const motorShopAPI = axios.create({
  baseURL: "https://motor-shop.herokuapp.com/",
});

export default motorShopAPI;
