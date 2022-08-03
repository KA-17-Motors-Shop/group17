import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 60%;
  margin-right: 1rem;
  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  max-width: 12.5rem;
  gap: 1rem;
  padding-right: 1rem;
  border-right: ${({ theme }) => theme.textColors.primaryText} 0.1rem solid;
`;

export const NotLoggedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  margin-left: 0.5rem;
`;

export const Link = styled.span`
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColors.primaryText};
`;
export const Button = styled.button``;
