import { IAuctionRes } from "../../../interfaces/auction";
import DefaultImg from "../../../assets/img/default.png";
import {
  BaseboardContainer,
  ParentTagContainer,
  CardContainer,
  ImgContainer,
  AvatarContainer,
  Title,
  Description,
  Tag,
  Price,
} from "./styles";
import Avatar from "../../Avatar";
import { useHistory } from "react-router-dom";

const SaleCard: React.FC<{ announce: IAuctionRes }> = ({
  announce,
}): JSX.Element => {
  const history = useHistory();
  console.log(announce);
  const announcePage = () => {
    history.push(`/ad_details?id=${announce.id}`);
  };

  return (
    <CardContainer>
      <ImgContainer onClick={announcePage}>
        <img src={announce.imagesUrl![0] || DefaultImg} alt="Imagem anuncio" />
      </ImgContainer>
      <Title>
        {announce.title![0].toUpperCase() + announce.title?.slice(1)}
      </Title>
      <Description>{announce.description}</Description>
      <AvatarContainer>
        <Avatar userName={announce.seller?.name as string} />
      </AvatarContainer>
      <BaseboardContainer>
        <ParentTagContainer>
          <Tag>{announce.km}Km</Tag>
          <Tag>{announce.year}</Tag>
        </ParentTagContainer>
        <Price>
          R$
          {parseFloat(announce.price as string)
            .toFixed(2)
            .toString()
            .replace(".", ",")}
        </Price>
      </BaseboardContainer>
    </CardContainer>
  );
};

export default SaleCard;
