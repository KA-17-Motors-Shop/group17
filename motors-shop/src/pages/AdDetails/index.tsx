import MERCEDES from "../../assets/img/mercedes_teste.png";
import {
  AdDetailsContainer,
  AdDetailsMain,
  ImageGalleryContainer,
  AdvertiserBoxContainer,
  DescriptionContainer,
} from "./styles";

import Header from "../../components/Header";
import VehicleInformation from "../../components/VehicleInformation";
import BigTopImage from "../../components/BigtopImage";
import DescriptionBox from "../../components/DescriptionBox";

const AdDetails: React.FC = (): JSX.Element => {
  return (
    <AdDetailsContainer>
      <Header isLogged={false} />
      <AdDetailsMain>
        {/* <BigTopImage MERCEDES={MERCEDES} /> */}
        {/* <DescriptionBox /> */}
        <VehicleInformation />
      </AdDetailsMain>
    </AdDetailsContainer>
  );
};
export default AdDetails;
