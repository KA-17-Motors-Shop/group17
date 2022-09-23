import { useState } from "react";
import { CloseModalBtn } from "../../Button/CloseModalBtn";
import {
  ArrowLeft,
  ArrowRight,
  DotsContainer,
  ImgContainer,
  ModalContainer,
  TopModal,
} from "./styles";

import { GoPrimitiveDot } from "react-icons/go";

interface IHandleModal {
  handleModal: () => void;
  images: string[];
  selectImg: number;
}

const ImgVehicle = ({ handleModal, images, selectImg }: IHandleModal) => {
  const [index, setIndex] = useState(selectImg);

  const next = () => {
    if (images.length - 1 > index) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  return (
    <ModalContainer>
      <TopModal>
        <h1>Imagem do veiculo</h1>
        <CloseModalBtn onClick={handleModal} />
      </TopModal>
      <ImgContainer>
        <img src={images[index]} alt="imagem" />
      </ImgContainer>
      <DotsContainer>
        <ArrowLeft onClick={prev} />
        {images.map((_, i) => (
          <GoPrimitiveDot
            onClick={() => setIndex(i)}
            className={index === i ? "active" : "disable"}
          />
        ))}
        <ArrowRight onClick={next} />
      </DotsContainer>
    </ModalContainer>
  );
};

export default ImgVehicle;
