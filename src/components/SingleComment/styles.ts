import styled from "styled-components";
import { DescriptionBoxContainer } from "../Boxes/DescriptionBox/styles";

export const SingleCommetContainer = styled(DescriptionBoxContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  box-shadow: none;
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
`;

export const Comment = styled.p`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  h2 {
    font-size: 16px;
    color: ${({ theme }) => theme.textColors.primaryText};
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  width: 20%;
  svg {
    color: ${({ theme }) => theme.textColors.primaryText};

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;
