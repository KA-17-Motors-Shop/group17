import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import { IAuctionRes } from "../../interfaces/auction";
import { useListAnnounces } from "../../Providers/Auction/listAll";

const ProfileViewSeller: React.FC = () => {
  const query = useQuery();

  console.log(query.get("seller_id"));

  const [announce, setAnnounce] = useState<IAuctionRes[]>([]);

  const { getAnnounceBySeller } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const announceGet = await getAnnounceBySeller(
      query.get("seller_id") as string
    );
    setAnnounce(announceGet);
  }, [getAnnounceBySeller, query]);

  useEffect(() => {
    handleAnnounces();
  }, [handleAnnounces]);

  console.log(announce);

  return <div>Seller Page</div>;
};

export default ProfileViewSeller;