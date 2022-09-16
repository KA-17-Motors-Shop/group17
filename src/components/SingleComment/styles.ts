import styled from "styled-components";
import { DescriptionBoxContainer } from "../DescriptionBox/styles";

export const SingleCommetContainer = styled(DescriptionBoxContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    h2 {
      font-size: 16px;
      color: ${({ theme }) => theme.textColors.primaryText};
    }
  }
`;

export const Comment = styled.p`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;
