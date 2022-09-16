import VehicleInformation from "../../components/VehicleInformation";
import DescriptionBox from "../../components/DescriptionBox";
import { ButtonDefault } from "../../components/Button";
import BigTopImage from "../../components/BigtopImage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import DefaultImg from "../../assets/img/default.png";

import {
  SellerBoxInfo,
  LeftContainer,
  RightContainer,
  Page,
  AdDetailsMain,
  Title,
  TopContainer,
  BottomContainer,
  EmptyContainer,
} from "./styles";

import { Avatar } from "../../components/UserInfoBox/styles";

import { useQuery } from "../../hooks/useQuery";
import { useCallback, useEffect, useState } from "react";
import { IAuctionRes } from "../../interfaces/auction";
import { useListAnnounces } from "../../Providers/Auction/listAll";
import { useHistory } from "react-router-dom";

import { avatarLetters } from "../../utils/avatarLetters";
import CommentBox from "../../components/CommentBox";
import GaleryImages from "../../components/GaleryImages";
import CommentInput from "../../components/Forms/Components/CommentInput";
import LoadingOrEmpty from "../../components/Loader/LoadingOrEmpty";
import AnnounceBids from "../../components/AnnounceBids";

const AdDetails: React.FC = (): JSX.Element => {
  const query = useQuery();
  const history = useHistory();

  const [announce, setAnnounce] = useState<IAuctionRes>({});

  const { getAnnounce } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const announceGet = await getAnnounce(query.get("id") as string);
    setAnnounce(announceGet || {});
  }, [getAnnounce, query]);

  useEffect(() => {
    handleAnnounces();
  }, [handleAnnounces]);

  const handleSellerPage = () => {
    history.push(`/seller?seller_id=${announce.seller!.id}`);
  };
  console.log(announce);
  return (
    <Page>
      <Header />
      <AdDetailsMain>
        {announce.id ? (
          <>
            <TopContainer>
              <LeftContainer>
                <BigTopImage image={announce.imagesUrl![0] || DefaultImg} />
                <VehicleInformation
                  km={announce.km as string}
                  price={announce.price as string}
                  title={announce.title as string}
                  year={announce.year as string}
                  id={announce.id as string}
                  type={announce.type as string}
                />
                <DescriptionBox description={announce.description as string} />
              </LeftContainer>

              <RightContainer>
                <GaleryImages images={announce.imagesUrl as string[]} />
                <SellerBoxInfo>
                  <Avatar>
                    {avatarLetters(announce.seller!.name).toUpperCase()}
                  </Avatar>
                  <Title>{announce.seller!.name}</Title>
                  <ButtonDefault onClick={handleSellerPage}>
                    Ver todos anuncios
                  </ButtonDefault>
                </SellerBoxInfo>
              </RightContainer>
            </TopContainer>
            <BottomContainer>
              <RightContainer>
                <CommentBox announceId={announce.id} />
                <CommentInput />
              </RightContainer>
              <LeftContainer>
                {announce.type === "auction" && (
                  <AnnounceBids id={announce.id} />
                )}
              </LeftContainer>
            </BottomContainer>
          </>
        ) : (
          <EmptyContainer>
            <LoadingOrEmpty message="Anúncio não encontrado" />
          </EmptyContainer>
        )}
      </AdDetailsMain>
      <Footer />
    </Page>
  );
};

export default AdDetails;
