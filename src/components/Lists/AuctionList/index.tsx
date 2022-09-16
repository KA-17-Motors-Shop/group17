import { ContainerCardAuction, Container } from "./styles";
import { useListAnnounces } from "../../../Providers/Auction/listAll";
import { useCallback, useEffect, useState } from "react";
import { IAuctionRes } from "../../../interfaces/auction";
import AuctionCard from "../../Card/AuctionCard";
import LoadingOrEmpty from "../../Loader/LoadingOrEmpty";

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
        {announces.length ? (
          announces.map((item) => <AuctionCard key={item.id} announce={item} />)
        ) : (
          <LoadingOrEmpty message="Nenhum leilão ativo no momento" />
        )}
      </ContainerCardAuction>
    </Container>
  );
};

export default AuctionList;
