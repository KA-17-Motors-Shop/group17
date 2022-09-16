import React from "react";
import IndividualImageContainer from "../IndividualImageContainer";
import LoadingOrEmpty from "../Loader/LoadingOrEmpty";
import { ImageGalleryContainer, Title } from "./styles";

const GaleryImages: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <ImageGalleryContainer>
      <Title>Fotos</Title>
      <div>
        {images.length ? (
          images.map((item, index) => (
            <IndividualImageContainer key={index} MERCEDES={item} />
          ))
        ) : (
          <LoadingOrEmpty message="Nenhuma foto encontrada" />
        )}
      </div>
    </ImageGalleryContainer>
  );
};

export default GaleryImages;
