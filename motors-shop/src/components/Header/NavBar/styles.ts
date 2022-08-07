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
<<<<<<< HEAD
=======

export const NameBol = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.brand.brand2};
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.greyScale.whiteFixed};
`;

export const NameSpan = styled.span`
  max-width: 10ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.textColors.primaryText};
`;
>>>>>>> a3f91cdba653ed66b96ea60b9da6d174b6ac7933
