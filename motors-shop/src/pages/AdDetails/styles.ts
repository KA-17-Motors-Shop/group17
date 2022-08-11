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

export const ImageGalleryContainer = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 440px;
  height: 359px;
  border-radius: 4px;
  padding: 36px 24px 28px 24px;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  h1 {
    align-self: flex-start;
    margin: 0 0 22px 6px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 8px;
  }
`;
export const AdvertiserBoxContainer = styled.div``;
export const DescriptionContainer = styled.div``;
export const CommentsContainer = styled.div``;
export const TextFieldContainer = styled.div``;
