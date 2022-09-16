import { useState } from "react";
import { ButtonPrimary } from "../Button";
import BidsAuction from "../Modal/BidsAuction";

import {
  VehicleInformationContainer,
  MiddleContainer,
  TitleContainer,
  TagsContainer,
  Tag,
  Price,
} from "./styles";

interface IProps {
  title: string;
  year: string;
  km: string;
  price: string;
  id: string;
  type: string;
}

const VehicleInformation: React.FC<IProps> = ({
  km,
  price,
  title,
  year,
  id,
  type,
}): JSX.Element => {
  const buy = () => {
    console.log(`COMPRAR ${id}`);
  };

  const [show, setShow] = useState(false);

  return (
    <>
      {type === "auction" && (
        <BidsAuction show={show} handle={() => setShow(false)} />
      )}
      <VehicleInformationContainer>
        <TitleContainer>
          {title[0].toUpperCase() + title.slice(1)}
        </TitleContainer>
        <MiddleContainer>
          <TagsContainer>
            <Tag>{year}</Tag>

            <Tag>{km}km</Tag>
          </TagsContainer>
          <Price>
            R$ {parseInt(price).toFixed(2).toString().replace(".", ",")}
          </Price>
        </MiddleContainer>
        {type === "auction" ? (
          <ButtonPrimary onClick={() => setShow(true)}>Lance</ButtonPrimary>
        ) : (
          <ButtonPrimary onClick={buy}>Comprar</ButtonPrimary>
        )}
      </VehicleInformationContainer>
    </>
  );
};

export default VehicleInformation;
