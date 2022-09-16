import React, { useCallback, useEffect, useState } from "react";
import { IAuctionRes } from "../../interfaces/auction";
import { useListAnnounces } from "../../Providers/Auction/listAll";
import AuctionGroup from "./AuctionGroup";
import SalesGroup from "./SalesGroup";
import {
  AnnounceContainer,
  Container,
  TabsList,
  TabsRoot,
  Trigger,
} from "./styles";

import * as Tabs from "@radix-ui/react-tabs";
import MyBidsList from "../MyBidsList";

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
      <TabsRoot defaultValue="announce" orientation="vertical">
        <TabsList>
          <Trigger value="announce">Anúncios</Trigger>
          <Trigger value="bids">Lances</Trigger>
        </TabsList>
        <Tabs.Content value="announce">
          <AnnounceContainer>
            <AuctionGroup auctions={auctions} />
            <SalesGroup sales={sales} />
          </AnnounceContainer>
        </Tabs.Content>
        <Tabs.Content value="bids">
          <MyBidsList />
        </Tabs.Content>
      </TabsRoot>
    </Container>
  );
};

export default MyAnnouncesList;
