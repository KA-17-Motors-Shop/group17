import React from "react";
import { IAnnounceRes } from "../../../interfaces/auction";

import SaleCard from "../../Card/SaleCard";
import LoaderLocalComponent from "../../Loader/LoaderLocalComponent";

import { Container, ContainerGroup, Title } from "./styles";
import EmptyMessage from "../../EmptyMessage";

const SalesGroup: React.FC<{ loadding: boolean; sales: IAnnounceRes[] }> = ({
  sales,
  loadding,
}) => {
  return (
    <Container>
      <Title>Vendas</Title>
      {loadding ? (
        <LoaderLocalComponent />
      ) : sales.length ? (
        <ContainerGroup>
          {sales.map((item) => (
            <SaleCard key={item.id} announce={item} />
          ))}
        </ContainerGroup>
      ) : (
        <EmptyMessage message="Nenhuma venda encontrada" />
      )}
    </Container>
  );
};

export default SalesGroup;
