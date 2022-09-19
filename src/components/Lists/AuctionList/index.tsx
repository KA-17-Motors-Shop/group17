import { ContainerCardAuction, Container, TitleContainer } from "./styles";
import { useListAnnounces } from "../../../Providers/Auction/listAll";
import { useCallback, useEffect, useState } from "react";
import { IAuctionRes } from "../../../interfaces/auction";
import AuctionCard from "../../Card/AuctionCard";
import EmptyMessage from "../../EmptyMessage";
import LoaderLocalComponent from "../../Loader/LoaderLocalComponent";

const AuctionList: React.FC = () => {
  const [announces, setAnnounces] = useState<IAuctionRes[]>([]);
  const [loadding, setLoadding] = useState(false);
  const { getListAuction } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const announce = await getListAuction();
    setAnnounces(announce!);
    setLoadding(false);
  }, [getListAuction]);

  useEffect(() => {
    setLoadding(true);
    handleAnnounces();
  }, [handleAnnounces]);

  return (
    <Container>
      <TitleContainer>Leilão</TitleContainer>
      <ContainerCardAuction>
        {loadding ? (
          <LoaderLocalComponent />
        ) : announces.length ? (
          announces.map((item) => <AuctionCard key={item.id} announce={item} />)
        ) : (
          <EmptyMessage message="Nenhum leilão ativo no momento" />
        )}
      </ContainerCardAuction>
    </Container>
  );
};

export default AuctionList;
