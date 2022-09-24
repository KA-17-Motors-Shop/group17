import { useState } from "react";
import { IAnnounceRes } from "../../../interfaces/auction";
import { useUser } from "../../../Providers/User";
import { ButtonDisable, ButtonPrimary } from "../../Button";
import Modal from "../../Modals";
import DeleteAd from "../../Modals/Ad/DeleteAd";
import UpdateAd from "../../Modals/Ad/UpdateAd";
import SendBidAuction from "../../Modals/Bids/SendBidAuction";

import {
  VehicleInformationContainer,
  MiddleContainer,
  TitleContainer,
  TagsContainer,
  Tag,
  Price,
  SellerButonContainer,
} from "./styles";

interface IProps {
  announce: IAnnounceRes;
}

const VehicleInformation: React.FC<IProps> = ({ announce }): JSX.Element => {
  const buy = () => {
    console.log(`COMPRAR ${announce.id!}`);
  };

  const { userId } = useUser();
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showBid, setShowBid] = useState(false);

  return (
    <>
      {announce.type! === "auction" && (
        <SendBidAuction show={showBid} handle={() => setShowBid(false)} />
      )}
      <Modal show={showEdit} close={() => setShowEdit(false)}>
        <UpdateAd handleModal={() => setShowEdit(false)} announce={announce} />
      </Modal>
      <Modal
        show={showDelete}
        close={() => setShowDelete(false)}
        height="20rem"
      >
        <DeleteAd handleModal={() => setShowDelete(false)} id={announce.id!} />
      </Modal>
      <VehicleInformationContainer>
        <TitleContainer>
          {announce.title![0].toUpperCase() + announce.title!.slice(1)}
        </TitleContainer>
        <MiddleContainer>
          <TagsContainer>
            <Tag>{announce.year}</Tag>

            <Tag>{announce.km}km</Tag>
          </TagsContainer>
          <Price>
            R$
            {parseInt(announce.price!).toLocaleString("pt-BR")}
          </Price>
        </MiddleContainer>
        {announce.status! === "completed" ? (
          <ButtonDisable>Vendido</ButtonDisable>
        ) : userId === announce.seller!.id ? (
          <SellerButonContainer>
            <ButtonPrimary onClick={() => setShowEdit(true)}>
              Editar
            </ButtonPrimary>
            <ButtonPrimary onClick={() => setShowDelete(true)}>
              Excluir
            </ButtonPrimary>
          </SellerButonContainer>
        ) : announce.type! === "auction" ? (
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