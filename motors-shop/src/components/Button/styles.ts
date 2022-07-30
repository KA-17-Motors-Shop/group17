import styled from "styled-components";

// #4529E6 hover: #5126EA
export const ButtonBrand = styled.div`
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
      transform: scale(1.02);
      filter: brightness(1);
      background-color: ${({ theme }) => theme.brand.brand2};
      border: 1.5px solid ${({ theme }) => theme.brand.brand2};
    }

    @media screen and (max-width: 920px) {
      height: 38px;
      padding: 12px 20px;
      font-size: 14px;
    }
  }
`;

// #0B0D0D hover: #212529
export const ButtonBlack = styled(ButtonBrand)`
  button {
    background-color: ${({ theme }) => theme.greyScale.grey0};
    border: 1.5px solid ${({ theme }) => theme.greyScale.grey0};

    &:hover {
      background-color: ${({ theme }) => theme.greyScale.grey1};
      border: 1.5px solid ${({ theme }) => theme.greyScale.grey1};
    }
  }
`;

// #DEE2E6 hover: #CED4DA
export const ButtonGrey = styled(ButtonBrand)`
  button {
    background-color: ${({ theme }) => theme.greyScale.grey6};
    border: 1.5px solid ${({ theme }) => theme.greyScale.grey6};

    &:hover {
      background-color: ${({ theme }) => theme.greyScale.grey5};
      border: 1.5px solid ${({ theme }) => theme.greyScale.grey5};
    }
  }
`;

// #CED4DA hover: #CED4DA color: #FFFFFF
export const ButtonGrey2 = styled(ButtonBrand)`
  button {
    background-color: ${({ theme }) => theme.greyScale.grey6};
    border: 1.5px solid ${({ theme }) => theme.greyScale.grey6};
    color: ${({ theme }) => theme.greyScale.whiteFixed};

    &:hover {
      background-color: ${({ theme }) => theme.greyScale.grey5};
      border: 1.5px solid ${({ theme }) => theme.greyScale.grey5};
    }
  }
`;

// #FDFDFD border:#F1F3F5 color: #0B0D0D
export const ButtonGrey3 = styled(ButtonBrand)`
  button {
    background-color: ${({ theme }) => theme.greyScale.grey10};
    border: 1.5px solid ${({ theme }) => theme.greyScale.grey4};
    color: ${({ theme }) => theme.greyScale.grey0};

    &:hover {
      background-color: ${({ theme }) => theme.greyScale.grey8};
      border: 1.5px solid ${({ theme }) => theme.greyScale.grey4};
    }
  }
`;
