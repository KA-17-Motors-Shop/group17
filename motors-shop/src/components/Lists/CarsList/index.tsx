import IMG_CAR from "../../../assets/img/vehicles/car_teste.png";

import Card from "../../Card";
import { TitleContainer, CardContainer } from "./styles";

const CarsList: React.FC = () => {
  return (
    <>
      <TitleContainer>Carros</TitleContainer>
      <CardContainer>
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} IMG={IMG_CAR} />
        ))}
      </CardContainer>
    </>
  );
};

export default CarsList;
