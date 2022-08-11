import { MiddleContainer, VehicleInformationContainer } from "./styles";
import {
  ParentTagContainer,
  TagContainer,
  PriceContainer,
} from "../Card/styles";
import { ButtonPrimary } from "../Button";

const VehicleInformation: React.FC = (): JSX.Element => {
  return (
    <VehicleInformationContainer>
      <h1>Mercedes Benz A 200 CGI ADVANCE HATCH Mercedes Benz A 200</h1>
      <MiddleContainer>
        <ParentTagContainer>
          <TagContainer>
            <span>2022</span>
          </TagContainer>
          <TagContainer>
            <span>0 KM</span>
          </TagContainer>
        </ParentTagContainer>
        <PriceContainer>
          <span>R$ 00.000,00</span>
        </PriceContainer>
      </MiddleContainer>
      <ButtonPrimary>Comprar</ButtonPrimary>
    </VehicleInformationContainer>
  );
};
export default VehicleInformation;
