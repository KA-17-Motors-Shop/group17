import { ContainerCardAuction, Container } from "./styles";
import { useListAnnounces } from "../../../Providers/Auction/listAll";
import { useCallback, useEffect, useState } from "react";
import { IAuctionRes } from "../../../interfaces/auction";
import AuctionCard from "../../Card/AuctionCard";

const AuctionList: React.FC = () => {
  const [announces, setAnnounces] = useState<IAuctionRes[]>([]);
  const { getListAuction } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const announce = await getListAuction();
    setAnnounces(announce!);
  }, [getListAuction]);

  useEffect(() => {
    handleAnnounces();
  }, [handleAnnounces]);

  console.log(announces);

  return (
    <Container>
      <h2>Leilão</h2>
      <ContainerCardAuction>
        {announces.map((item) => (
          <AuctionCard key={item.id} announce={item} />
        ))}
      </ContainerCardAuction>
    </Container>
  );
};

export default AuctionList;
