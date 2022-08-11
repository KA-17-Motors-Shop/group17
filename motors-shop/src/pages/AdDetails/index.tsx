import MERCEDES from "../../assets/img/mercedes_teste.png";
import {
  AdDetailsContainer,
  AdDetailsMain,
  AdvertiserBoxContainer,
  DescriptionContainer,
  ImageGalleryContainer,
} from "./styles";

import Header from "../../components/Header";
import VehicleInformation from "../../components/VehicleInformation";
import BigTopImage from "../../components/BigtopImage";
import DescriptionBox from "../../components/DescriptionBox";
import IndividualImageContainer from "../../components/IndividualImageContainer";
import { TitleContainer } from "../../components/VehicleInformation/styles";

const AdDetails: React.FC = (): JSX.Element => {
  return (
    <AdDetailsContainer>
      <Header isLogged={false} />
      <AdDetailsMain>
        {/* <BigTopImage MERCEDES={MERCEDES} /> */}
        {/* <DescriptionBox /> */}
        {/* <VehicleInformation /> */}
        <ImageGalleryContainer>
          <TitleContainer>Fotos</TitleContainer>
          <div>
            {Array.from({ length: 6 }).map((_, index) => (
              <IndividualImageContainer key={index} MERCEDES={MERCEDES} />
            ))}
          </div>
        </ImageGalleryContainer>
      </AdDetailsMain>
    </AdDetailsContainer>
  );
};
export default AdDetails;
