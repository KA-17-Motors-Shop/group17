import { useState } from "react";
import { useUser } from "../../Providers/User/login";
import { ButtonDisable, ButtonPrimary } from "../Button";
import BidsAuction from "../Modal/BidsAuction";
import EditAnnounce from "../Modal/EditAnnounce";

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
  sellerId: string;
  status: string;
}

const VehicleInformation: React.FC<IProps> = ({
  km,
  price,
  title,
  year,
  id,
  type,
  sellerId,
  status,
}): JSX.Element => {
  const buy = () => {
    console.log(`COMPRAR ${id}`);
  };

  const { userId } = useUser();
  const [showEdit, setShowEdit] = useState(false);

  const [showBid, setShowBid] = useState(false);

  return (
    <>
      {type === "auction" && (
        <BidsAuction show={showBid} handle={() => setShowBid(false)} />
      )}
      <EditAnnounce show={showEdit} handle={() => setShowEdit(false)} />
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
        {status === "completed" ? (
          <ButtonDisable>Vendido</ButtonDisable>
        ) : userId === sellerId ? (
          <ButtonPrimary onClick={() => setShowEdit(true)}>
            Editar
          </ButtonPrimary>
        ) : type === "auction" ? (
          userId !== "" ? (
            <ButtonPrimary onClick={() => setShowBid(true)}>
              Lance
            </ButtonPrimary>
          ) : (
            <ButtonDisable>Lance</ButtonDisable>
          )
        ) : userId !== "" ? (
          <ButtonPrimary onClick={buy}>Comprar</ButtonPrimary>
        ) : (
          <ButtonDisable>Comprar</ButtonDisable>
        )}
      </VehicleInformationContainer>
    </>
  );
};

export default VehicleInformation;
