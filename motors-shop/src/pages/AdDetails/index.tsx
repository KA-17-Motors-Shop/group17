import Header from "../../components/Header";
import {
  AdDetailsContainer,
  AdDetailsMain,
  BottomContainer,
  TitleContainer,
  ImageGalleryContainer,
  AdvertiserBoxContainer,
  DescriptionContainer,
} from "./styles";
import MERCEDES from "../../assets/img/mercedes_teste.png";
import { Button } from "../../components/ThemeSelector/styles";
import { TagContainer, PriceContainer } from "../../components/Card/styles";
import BigTopImage from "../../components/BigtopImage";

const AdDetails: React.FC = (): JSX.Element => {
  return (
    <AdDetailsContainer>
      <Header isLogged={false} />
      <AdDetailsMain>
        <BottomContainer />
        <BigTopImage MERCEDES={MERCEDES} />
        <TitleContainer>
          <h1>Mercedes Benz A 200 CGI ADVANCE HATCH Mercedes Benz A 200</h1>
          <TagContainer>
            <span></span>
            <span></span>
          </TagContainer>
          <PriceContainer>R$ 00.000,00</PriceContainer>
          <Button>Comprar</Button>
        </TitleContainer>
      </AdDetailsMain>
    </AdDetailsContainer>
  );
};
export default AdDetails;
