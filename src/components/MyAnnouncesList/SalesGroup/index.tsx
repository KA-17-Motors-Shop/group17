import React from "react";
import { IAuctionRes } from "../../../interfaces/auction";

import SaleCard from "../../Card/SaleCard";
import LoadingOrEmpty from "../../Loader/LoadingOrEmpty";

// import { Container } from './styles';

const SalesGroup: React.FC<{ sales: IAuctionRes[] }> = ({ sales }) => {
  console.log(sales);

  return (
    <div>
      <h2>Vendas</h2>
      {sales.length ? (
        <ul>
          {sales.map((item) => (
            <SaleCard key={item.id} announce={item} />
          ))}
        </ul>
      ) : (
        <LoadingOrEmpty />
      )}
    </div>
  );
};

export default SalesGroup;
