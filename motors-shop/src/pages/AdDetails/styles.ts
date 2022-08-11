import styled from "styled-components";

export const AdDetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.greyScale.grey8};
  height: 100vh;
  header {
    position: fixed;
    z-index: 2;
  }
`;

export const AdDetailsMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(#4529e6 86.5%, #f1f3f5 86.5%, #f1f3f5 100%);
`;

export const ImageGalleryContainer = styled.div``;
export const AdvertiserBoxContainer = styled.div``;
export const DescriptionContainer = styled.div``;
export const CommentsContainer = styled.div``;
export const TextFieldContainer = styled.div``;
