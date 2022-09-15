import { ButtonPrimary } from "../Button";

import {
  VehicleInformationContainer,
  MiddleContainer,
  TitleContainer,
} from "./styles";

import {
  ParentTagContainer,
  PriceContainer,
  TagContainer,
} from "../Card/SaleCard/styles";

interface IProps {
  title: string;
  year: string;
  km: string;
  price: string;
  id: string;
}

const VehicleInformation: React.FC<IProps> = ({
  km,
  price,
  title,
  year,
  id,
}): JSX.Element => {
  const buy = () => {
    console.log(`COMPRAR ${id}`);
  };

  return (
    <VehicleInformationContainer>
      <TitleContainer>{title}</TitleContainer>
      <MiddleContainer>
        <ParentTagContainer>
          <TagContainer>
            <span>{year}</span>
          </TagContainer>
          <TagContainer>
            <span>{km}km</span>
          </TagContainer>
        </ParentTagContainer>
        <PriceContainer>
          <span>
            R$ {parseInt(price).toFixed(2).toString().replace(".", ",")}
          </span>
        </PriceContainer>
      </MiddleContainer>
      <ButtonPrimary onClick={buy}>Comprar</ButtonPrimary>
    </VehicleInformationContainer>
  );
};

export default VehicleInformation;
