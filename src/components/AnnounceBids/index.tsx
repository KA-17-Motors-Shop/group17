import React, { useCallback, useEffect, useState } from "react";
import { IResBids } from "../../interfaces/bids";
import { useBids } from "../../Providers/Bids";
import LoadingOrEmpty from "../Loader/LoadingOrEmpty";
import BidCard from "./BidCard";
import { BidsGroup, Container, Empty, Title } from "./styles";

const AnnounceBids: React.FC<{ id: string }> = ({ id }) => {
  const [bids, setBids] = useState<IResBids[]>([]);

  const { getBidsAnnounce } = useBids();

  const handleBids = useCallback(async () => {
    const get = await getBidsAnnounce(id);
    setBids(get);
  }, [getBidsAnnounce, id]);

  useEffect(() => {
    handleBids();
  }, [handleBids]);

  return (
    <Container>
      <Title>Lances</Title>

      {bids && bids.length ? (
        <BidsGroup>
          {bids.map((item) => (
            <BidCard bid={item} key={item.id} />
          ))}
        </BidsGroup>
      ) : (
        <Empty>
          <LoadingOrEmpty message="Nenhum lance encontrado" />
        </Empty>
      )}
    </Container>
  );
};

export default AnnounceBids;
