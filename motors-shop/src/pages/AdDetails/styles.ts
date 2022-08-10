import styled from "styled-components";

export const AdDetailsMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BottomContainer = styled.div`
  height: 436px;
  width: 100%;
  background-color: ${({ theme }) => theme.brand.brand1};
`;
export const AdDetailsContainer = styled.div``;

export const TopImageContainer = styled.div`
  width: 90%;
  max-width: 752px;
  height: 355px;
  position: absolute;
  top: 125px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  /* margin-bottom: 5px; */
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

export const TitleContainer = styled.div`
  border: solid 1px orange;
  display: flex;
  flex-direction: column;
  border: solid 1px red;
  height: 326px;
  width: 90%;
  padding: 20px;
  position: absolute;
  top: 497px;
  h1 {
    border: solid 1px green;
    margin-bottom: 15px;
  }
`;
export const ImageGalleryContainer = styled.div``;
export const AdvertiserBoxContainer = styled.div``;
export const DescriptionContainer = styled.div``;
export const CommentsContainer = styled.div``;
export const TextFieldContainer = styled.div``;
