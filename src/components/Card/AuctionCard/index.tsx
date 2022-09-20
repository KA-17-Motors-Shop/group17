import React from "react";
import { useHistory } from "react-router-dom";
import { IAuctionRes } from "../../../interfaces/auction";
import Avatar from "../../Avatar";
import Stopwatch from "../../Stopwatch";
import {
  CardAuction,
  ContainerAuction,
  ContainerInfo,
  ContainerTitle,
  ContainerAvatar,
  ContainerBottom,
  Tag,
  TagsInfos,
  ButtonAuction,
  Price,
  Title,
  Description,
} from "./styles";

const AuctionCard: React.FC<{ announce: IAuctionRes }> = ({ announce }) => {
  const history = useHistory();

  const announcePage = () => {
    history.push(`/ad_details?id=${announce.id}`);
  };

  return (
    <CardAuction>
      <ContainerAuction image={announce.imagesUrl!}>
        <ContainerInfo>
          <ContainerTitle>
            {announce.isActive && (
              <Stopwatch
                publishedDate={announce.publishedData as string}
                limitData={announce.limitDate as string}
              />
            )}
            <Title>
              {announce.title![0].toUpperCase() + announce.title?.slice(1)}
            </Title>
            <Description>{announce.description}</Description>
          </ContainerTitle>
          <ContainerAvatar>
            <Avatar userName={announce.seller!.name} />
          </ContainerAvatar>

          <ContainerBottom>
            <TagsInfos>
              <Tag>{announce.year}</Tag>
              <Tag>{announce.km}KM</Tag>
            </TagsInfos>

            <Price>
              R$
              {parseFloat(announce.price || "0")
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </Price>
          </ContainerBottom>
        </ContainerInfo>
      </ContainerAuction>
      <ButtonAuction onClick={announcePage}>
        Acessar a pagina do leilão
        <svg width="2em" height="1.5em" viewBox="0 0 15 15">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </ButtonAuction>
    </CardAuction>
  );
};

export default AuctionCard;
