import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 12px 28px;

    background-color: ${({ theme }) => theme.brand.brand1};
    color: ${({ theme }) => theme.brand.brand4};
    transition: 0.8s;
    border: 1.5px solid ${({ theme }) => theme.brand.brand1};
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    &:hover {
      transform: scale(1.1);
      filter: brightness(1.2);
    }

    @media screen and (max-width: 920px) {
      width: 119px;
      height: 38px;
      padding: 12px 20px;
      font-size: 14px;
    }
  }
`;
