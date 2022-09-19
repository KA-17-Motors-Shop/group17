import React from "react";
import Modal from "../index";
import { Container } from "./styles";

interface IProps {
  show: boolean;
  handle: () => void;
}

const EditAnnounce: React.FC<IProps> = ({ handle, show }) => {
  return (
    <Modal show={show} close={handle} height={"15rem"}>
      <Container>Criar Form</Container>
    </Modal>
  );
};

export default EditAnnounce;
