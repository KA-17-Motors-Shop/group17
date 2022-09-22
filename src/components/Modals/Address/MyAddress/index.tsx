import React, { useCallback, useEffect, useState } from "react";
import Modal from "../..";
import { IResAddress } from "../../../../interfaces/address";
import { useAddress } from "../../../../Providers/Address/listCreateAddress";
import { ButtonPrimary } from "../../../Button";
import { CloseModalBtn } from "../../../Button/CloseModalBtn";
import EmptyMessage from "../../../EmptyMessage";
import LoaderLocalComponent from "../../../Loader/LoaderLocalComponent";
import CreateAddress from "../CreateAddress";
import UpdateAddress from "../UpdateAddress";
import AddressCard from "./AddressCard";
import {
  Container,
  ContainerGroup,
  FooterModal,
  HeaderModal,
  MainModal,
  Title,
} from "./styles";

interface IProps {
  handleModal: () => void;
}

const MyAddress: React.FC<IProps> = ({ handleModal }) => {
  const [newAddress, setNewAddress] = useState(false);
  const [updateAddress, setUpdateAddress] = useState("");

  const [address, setAddress] = useState<IResAddress[]>([]);
  const [loadding, setLoadding] = useState(false);

  const { getMyAddress } = useAddress();

  const handleAddress = useCallback(async () => {
    const myAddress = await getMyAddress();
    setAddress(myAddress);
    setLoadding(false);
  }, [getMyAddress]);

  useEffect(() => {
    setLoadding(true);
    handleAddress();
  }, [handleAddress]);

  return (
    <>
      <Modal show={newAddress} close={() => setNewAddress(false)}>
        <CreateAddress handleModal={() => setNewAddress(false)} />
      </Modal>
      <Modal show={!!updateAddress} close={() => setUpdateAddress("")}>
        <UpdateAddress
          handleModal={() => setUpdateAddress("")}
          id={updateAddress}
        />
      </Modal>
      <>
        <Container>
          <HeaderModal>
            <Title>Endereços cadastrados</Title>
            <CloseModalBtn onClick={handleModal} />
          </HeaderModal>
          <MainModal>
            {loadding ? (
              <LoaderLocalComponent />
            ) : address.length ? (
              <ContainerGroup>
                {address.map((item) => (
                  <>
                    <AddressCard
                      key={item.id}
                      address={item}
                      handleUpdate={() => setUpdateAddress(item.id!)}
                    />
                  </>
                ))}
              </ContainerGroup>
            ) : (
              <EmptyMessage message="Nenhum endereço cadastrado" />
            )}
          </MainModal>
          <FooterModal>
            <ButtonPrimary onClick={() => setNewAddress(true)}>
              Novo Endereço
            </ButtonPrimary>
          </FooterModal>
        </Container>
      </>
    </>
  );
};

export default MyAddress;
