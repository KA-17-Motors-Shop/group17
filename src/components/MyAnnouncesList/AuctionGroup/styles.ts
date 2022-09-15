import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.textColors.primaryText};
  width: 90%;
`;

export const ContainerGroup = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 90%;
  min-width: 300px;
`;
