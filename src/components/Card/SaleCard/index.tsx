import { IAuctionRes } from "../../../interfaces/auction";
import DefaultImg from "../../../assets/img/default.png";
import {
  BaseboardContainer,
  ParentTagContainer,
  PriceContainer,
  CardContainer,
  ImgContainer,
  TagContainer,
} from "./styles";
import Avatar from "../../Avatar";

const SaleCard: React.FC<{ announce: IAuctionRes }> = ({
  announce,
}): JSX.Element => {
  return (
    <CardContainer>
      <ImgContainer>
        <img src={announce.imagesUrl![0] || DefaultImg} alt="Imagem anuncio" />
      </ImgContainer>
      <h2>{announce.title}</h2>
      <p>{announce.description}</p>

      <Avatar userName={announce.seller?.name as string} />

      <BaseboardContainer>
        <ParentTagContainer>
          <TagContainer>
            <span>{announce.km}</span>
          </TagContainer>
          <TagContainer>
            <span>{announce.year}</span>
          </TagContainer>
        </ParentTagContainer>
        <PriceContainer>
          <span>R$ {announce.price}</span>
        </PriceContainer>
      </BaseboardContainer>
    </CardContainer>
  );
};

export default SaleCard;
