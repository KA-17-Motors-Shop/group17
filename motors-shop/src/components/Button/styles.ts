import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  button {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.buttonColor.entranceButton};
    color: ${({ theme }) => theme.textColors.subTitlePrimary};
    transition: 0.8s;
    &:hover {
      transform: scale(1.1);
      filter: brightness(1.2);
    }
  }
`;
