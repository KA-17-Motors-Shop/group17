import React, { useState } from "react";
import { Container, ContainerGroup, Span, Title } from "./styles";

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
        <Span>Nenhum lance</Span>
      )}
    </Container>
  );
};

export default MyBidsList;
