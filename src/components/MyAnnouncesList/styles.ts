import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 95%;
  padding-top: 2rem;
`;

export const Title = styled.h1`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;
