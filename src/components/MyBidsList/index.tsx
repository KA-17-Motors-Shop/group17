import React, { useState } from "react";
import EmptyMessage from "../EmptyMessage";
import { Container, ContainerGroup, Title } from "./styles";

const MyBidsList: React.FC = () => {
  const [bids, setBids] = useState([]);

  return (
    <Container>
      <Title>Meus lances</Title>
      {bids.length ? (
        <ContainerGroup>
          {bids.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ContainerGroup>
      ) : (
        <EmptyMessage message="Nenhum lance encontrado" />
      )}
    </Container>
  );
};

export default MyBidsList;
