import IMG_MOTO from "../../../assets/img/vehicles/moto_teste.png";

import Card from "../../Card";
import { TitleContainer, CardContainer } from "./styles";

const MotorcyclesList: React.FC = () => {
  return (
    <>
      <TitleContainer>Carros</TitleContainer>
      <CardContainer>
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} IMG={IMG_MOTO} />
        ))}
      </CardContainer>
    </>
  );
};

export default MotorcyclesList;
