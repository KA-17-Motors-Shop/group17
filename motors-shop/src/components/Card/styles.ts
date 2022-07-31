import styled from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 312px;

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.greyScale.grey1};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 15px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.greyScale.grey2};

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const ImgContainer = styled.div`
  max-width: 100%;
  height: 152px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.greyScale.grey7};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorRandomProfile.random1};
    margin-right: 8px;
    span {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      display: block;
    }
  }
  span {
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.greyScale.grey2};
  }
`;

export const BaseboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const ParentTagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 125px;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51px;
  height: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.brand.brand4};
  span {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.brand.brand1};
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    font-family: "Lexend", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.greyScale.grey1};
  }
`;