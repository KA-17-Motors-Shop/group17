import {
  CardContainer,
  ImgContainer,
  NameContainer,
  BaseboardContainer,
  ParentTagContainer,
  TagContainer,
  PriceContainer,
} from "./styles";
import IMG from "../../assets/img/img-teste.png";

const Card = () => {
  return (
    <CardContainer>
      <ImgContainer>
        <img src={IMG} alt="" />
      </ImgContainer>
      <h2>Product title stay here - max 1 line</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        repudiandae fugiat perferendis, praesen
      </p>
      <NameContainer>
        <div>
          <span>R</span>
        </div>
        <span>Evelin Camila</span>
      </NameContainer>
      <BaseboardContainer>
        <ParentTagContainer>
          <TagContainer>
            <span>0 KM</span>
          </TagContainer>
          <TagContainer>
            <span>2019</span>
          </TagContainer>
        </ParentTagContainer>
        <PriceContainer>
          <span>R$ 00.000,00</span>
        </PriceContainer>
      </BaseboardContainer>
    </CardContainer>
  );
};
export default Card;
