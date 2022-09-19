import React from "react";
import IndividualImageContainer from "../IndividualImageContainer";
import EmptyMessage from "../EmptyMessage";
import { Empty, ImageGalleryContainer, Title } from "./styles";

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
          <Empty>
            <EmptyMessage message="Nenhuma foto encontrada" />
          </Empty>
        )}
      </div>
    </ImageGalleryContainer>
  );
};

export default GaleryImages;
