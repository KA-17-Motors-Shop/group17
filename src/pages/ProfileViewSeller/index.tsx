import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AuctionGroup from "../../components/MyAnnouncesList/AuctionGroup";
import SalesGroup from "../../components/MyAnnouncesList/SalesGroup";
import SellerInfoBox from "../../components/SellerInfoBox";
import { useQuery } from "../../hooks/useQuery";
import { IAuctionRes } from "../../interfaces/auction";
import { ISeller } from "../../interfaces/user";
import { useListAnnounces } from "../../Providers/Auction/listAll";
import { useUser } from "../../Providers/User";
import { Main, ProfileViewSellerContainer, StoreSeller } from "./styles";

const ProfileViewSeller: React.FC = () => {
  const query = useQuery();

  const [auctions, setAuctions] = useState<IAuctionRes[]>([]);
  const [sales, setSales] = useState<IAuctionRes[]>([]);
  const [seller, setSeller] = useState<ISeller>({});

  const [loadding, setLoadding] = useState(false);

  const { getAuctionBySeller, getSaleBySeller } = useListAnnounces();
  const { getSeller } = useUser();

  const handleAnnounces = useCallback(async () => {
    const auctionsGet = await getAuctionBySeller(
      query.get("seller_id") as string
    );
    const salesGet = await getSaleBySeller(query.get("seller_id") as string);
    const sellerGet = await getSeller(query.get("seller_id") as string);
    setAuctions(auctionsGet);
    setSales(salesGet);
    setSeller(sellerGet);
    setLoadding(false);
  }, [getAuctionBySeller, getSaleBySeller, getSeller, query]);

  const handleSeller = useCallback(async () => {
    const sellerGet = await getSeller(query.get("seller_id") as string);
    setSeller(sellerGet);
  }, [getSeller, query]);

  useEffect(() => {
    handleSeller();
  }, [handleSeller]);

  useEffect(() => {
    setLoadding(true);
    handleAnnounces();
  }, [handleAnnounces]);

  return (
    <ProfileViewSellerContainer>
      <Header />
      <Main>
        <SellerInfoBox seller={seller} />
        <StoreSeller>
          <AuctionGroup loadding={loadding} auctions={auctions} />
          <SalesGroup loadding={loadding} sales={sales} />
        </StoreSeller>
      </Main>
      <Footer />
    </ProfileViewSellerContainer>
  );
};

export default ProfileViewSeller;
