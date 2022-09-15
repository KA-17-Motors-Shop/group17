import IndividualImageContainer from "../../components/IndividualImageContainer";
import { TitleContainer } from "../../components/VehicleInformation/styles";
import VehicleInformation from "../../components/VehicleInformation";
import DescriptionBox from "../../components/DescriptionBox";
import SingleComment from "../../components/SingleComment";
import { ButtonDefault } from "../../components/Button";
import BigTopImage from "../../components/BigtopImage";
import TextField from "../../components/TextField";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import DefaultImg from "../../assets/img/default.png";
import PROFILE from "../../assets/img/default_profile.png";

import {
  UserInfoBoxWithButtonContainer,
  LeftContainerAdDetailsTSecond,
  LeftContainerAdDetailsFirst,
  RightContainerAdDetails,
  ImageGalleryContainer,
  CommentBoxContainer,
  AdDetailsContainer,
  AdDetailsMain,
  FakeContainer,
} from "./styles";

import {
  NameContainerWithTag,
  TopImageContainer,
} from "../../components/UserInfoBox/styles";

import { useQuery } from "../../hooks/useQuery";
import { useCallback, useEffect, useState } from "react";
import { IAuctionRes } from "../../interfaces/auction";
import { useListAnnounces } from "../../Providers/Auction/listAll";
import { useHistory } from "react-router-dom";

const AdDetails: React.FC = (): JSX.Element => {
  const query = useQuery();
  const history = useHistory();

  const [announce, setAnnounce] = useState<IAuctionRes>({});

  const { getAnnounce } = useListAnnounces();

  const handleAnnounces = useCallback(async () => {
    const announceGet = await getAnnounce(query.get("id") as string);
    setAnnounce(announceGet);
  }, [getAnnounce, query]);

  useEffect(() => {
    handleAnnounces();
  }, [handleAnnounces]);

  console.log(announce);

  const handleSellerPage = () => {
    history.push(`/seller?seller_id=${announce.seller!.id}`);
  };

  const REACTION: Array<string> = [
    "Gostei muito!",
    "Incrível",
    "Recomendarei para meus amigos",
    "Ótimo",
    "Show de bola",
    "Top demais",
  ];

  return (
    <AdDetailsContainer>
      <Header />
      <AdDetailsMain>
        {announce.id ? (
          <>
            <LeftContainerAdDetailsFirst>
              <BigTopImage image={announce.imagesUrl![0] || DefaultImg} />
              <VehicleInformation
                km={announce.km as string}
                price={announce.price as string}
                title={announce.title as string}
                year={announce.year as string}
                id={announce.id as string}
              />
              <DescriptionBox />
            </LeftContainerAdDetailsFirst>

            <RightContainerAdDetails>
              <ImageGalleryContainer>
                <TitleContainer>Fotos</TitleContainer>
                <div>
                  {announce.imagesUrl!.length ? (
                    announce.imagesUrl!.map((item, index) => (
                      <IndividualImageContainer key={index} MERCEDES={item} />
                    ))
                  ) : (
                    <h1>Nenhuma foto encontrada</h1>
                  )}
                </div>
              </ImageGalleryContainer>
              <UserInfoBoxWithButtonContainer>
                <TopImageContainer>
                  <img src={PROFILE} alt="Imagem de perfil" />
                </TopImageContainer>
                <NameContainerWithTag>
                  <h2>{announce.seller!.name}</h2>
                </NameContainerWithTag>
                <p>{announce.description}</p>
                <ButtonDefault onClick={handleSellerPage}>
                  Ver todos anuncios
                </ButtonDefault>
              </UserInfoBoxWithButtonContainer>
            </RightContainerAdDetails>

            <LeftContainerAdDetailsTSecond>
              <CommentBoxContainer>
                <TitleContainer>Comentários</TitleContainer>
                {Array.from({ length: 3 }).map((_, index) => (
                  <SingleComment key={index} PROFILE={PROFILE} />
                ))}
              </CommentBoxContainer>
              <TextField PROFILE={PROFILE} REACTION={REACTION} />
            </LeftContainerAdDetailsTSecond>
            <FakeContainer />
          </>
        ) : (
          <h1>Não encontrado</h1>
        )}
      </AdDetailsMain>
      <Footer />
    </AdDetailsContainer>
  );
};

export default AdDetails;
