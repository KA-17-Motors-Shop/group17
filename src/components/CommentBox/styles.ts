import styled from "styled-components";

export const CommentBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
  border-radius: 4px;
  box-shadow: 0 4px 32px -22px #00000062;

  @media only screen and (min-width: 1279px) {
    max-width: 752px;
    margin-bottom: 33px;
  }
`;

export const Title = styled.h2`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;