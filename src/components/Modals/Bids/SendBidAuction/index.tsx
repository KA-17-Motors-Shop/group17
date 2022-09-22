import React from "react";
import Modal from "../..";
import { Container } from "./styles";

interface IProps {
  show: boolean;
  handle: () => void;
}

const SendBidAuction: React.FC<IProps> = ({ handle, show }) => {
  return (
    <Modal show={show} close={handle} height={"15rem"}>
      <Container>Criar Form</Container>
    </Modal>
  );
};

export default SendBidAuction;
