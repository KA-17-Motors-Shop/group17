import styled from "styled-components";

export const ImageGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 50%;
  border-radius: 4px;
  padding: 36px 24px 28px 24px;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  box-shadow: 0 4px 32px -22px #00000062;

  h1 {
    margin-bottom: 22px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 8px;
  }
`;

export const Title = styled.h2`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;
