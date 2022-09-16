import React from "react";
import { IAuctionRes } from "../../../interfaces/auction";

import SaleCard from "../../Card/SaleCard";
import LoadingOrEmpty from "../../Loader/LoadingOrEmpty";
import { Container, ContainerGroup, Title } from "./styles";

const SalesGroup: React.FC<{ sales: IAuctionRes[] }> = ({ sales }) => {
  return (
    <Container>
      <Title>Vendas</Title>
      {sales.length ? (
        <ContainerGroup>
          {sales.map((item) => (
            <SaleCard key={item.id} announce={item} />
          ))}
        </ContainerGroup>
      ) : (
        <LoadingOrEmpty message="Nenhuma venda encontrada" />
      )}
    </Container>
  );
};

export default SalesGroup;
