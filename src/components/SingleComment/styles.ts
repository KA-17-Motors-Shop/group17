import styled from "styled-components";
import { DescriptionBoxContainer } from "../DescriptionBox/styles";

export const SingleCommetContainer = styled(DescriptionBoxContainer)`
  width: 100%;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    span {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: ${({ theme }) => theme.textColors.primaryText};
    }
  }
`;

export const Comment = styled.p`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;
