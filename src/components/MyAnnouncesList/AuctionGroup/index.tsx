import React from "react";
import { IAuctionRes } from "../../../interfaces/auction";
import AuctionCard from "../../Card/AuctionCard";
import LoadingOrEmpty from "../../Loader/LoadingOrEmpty";
import { Container, ContainerGroup, Title } from "./styles";

const AuctionGroup: React.FC<{ auctions: IAuctionRes[] }> = ({ auctions }) => {
  console.log(auctions);

  return (
    <Container>
      <Title>Leilões</Title>
      {auctions.length ? (
        <ContainerGroup>
          {auctions.map((item) => (
            <AuctionCard key={item.id} announce={item} />
          ))}
        </ContainerGroup>
      ) : (
        <LoadingOrEmpty message="Nenhum leilão encontrado" />
      )}
    </Container>
  );
};

export default AuctionGroup;
