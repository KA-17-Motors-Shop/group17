import styled from "styled-components";

import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.theme.backgroundColors.secondaryBackground};
  border-radius: 0.5rem;
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${({ theme }) => theme.textColors.primaryText};
  }
`;

export const ArrowLeft = styled(BsFillCaretLeftFill)`
  position: relative;
  z-index: 20;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.buttons.primary.background};
`;
export const ArrowRight = styled(BsFillCaretRightFill)`
  position: relative;
  z-index: 20;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.buttons.primary.background};
`;

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;

  > svg:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  .active {
    color: ${({ theme }) => theme.buttons.primary.background};
    width: 2rem;
    height: 2rem;
  }
  .disable {
    color: ${({ theme }) => theme.buttons.negative.color};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 25rem;
  max-height: 25rem;
  background: transparent;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 50%;
  }
`;
