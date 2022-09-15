import React, { useCallback, useEffect, useState } from "react";
import { IAuctionRes } from "../../interfaces/auction";
import { useListAnnounces } from "../../Providers/Auction/listAll";
import AuctionGroup from "./AuctionGroup";
import SalesGroup from "./SalesGroup";
import { Container, Title } from "./styles";

const MyAnnouncesList: React.FC = () => {
  const [auctions, setAuctions] = useState<IAuctionRes[]>([]);
  const [sales, setSales] = useState<IAuctionRes[]>([]);

  const { getMyAuctions, getMySales } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const announceAuctions = await getMyAuctions();
    const announceSales = await getMySales();

    setAuctions(announceAuctions!);
    setSales(announceSales!);
  }, [getMyAuctions, getMySales]);

  useEffect(() => {
    handleAnnounces();
  }, [handleAnnounces]);

  return (
    <Container>
      <Title>Meus Anúncios</Title>
      <AuctionGroup auctions={auctions} />
      <SalesGroup sales={sales} />
    </Container>
  );
};

export default MyAnnouncesList;
