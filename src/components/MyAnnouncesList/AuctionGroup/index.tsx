import React from "react";
import { IAnnounceRes } from "../../../interfaces/auction";
import AuctionCard from "../../Card/AuctionCard";
import LoaderLocalComponent from "../../Loader/LoaderLocalComponent";
import EmptyMessage from "../../EmptyMessage";
import { Container, ContainerGroup, Title } from "./styles";

const AuctionGroup: React.FC<{
  loadding: boolean;
  auctions: IAnnounceRes[];
}> = ({ auctions, loadding }) => {
  return (
    <Container>
      <Title>Leilões</Title>
      {loadding ? (
        <LoaderLocalComponent />
      ) : auctions.length ? (
        <ContainerGroup>
          {auctions.map((item) => (
            <AuctionCard key={item.id} announce={item} />
          ))}
        </ContainerGroup>
      ) : (
        <EmptyMessage message="Nenhum leilão encontrado" />
      )}
    </Container>
  );
};

export default AuctionGroup;
