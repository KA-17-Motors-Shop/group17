import styled from "styled-components";

export const UserInfoBoxContainer = styled.div`
  width: 90%;
  height: 397px;
  position: absolute;
  top: 0;
  margin-top: 142px;
  border-radius: 4px;
  padding: 30px 20px 30px 20px;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  z-index: 1;
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    color: ${({ theme }) => theme.greyScale.grey2};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }

  @media only screen and (min-width: 375px) {
    padding: 40px 29px 40px 29px;
    p {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 768px) {
    height: 337px;
    width: 80%;
    p {
      -webkit-line-clamp: 4;
    }
  }
  @media only screen and (min-width: 1600px) {
    height: 327px;
    width: 80%;
  }
`;

export const TopFrontImgContainer = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.brand.brand1};
  margin-bottom: 18px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
`;

export const TopFrontNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  h2 {
    font-weight: 600;
    font-family: "Lexend", sans-serif;
    margin-right: 10px;
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 28px;
    border-radius: 4px;
    font-size: 12px;
    color: ${({ theme }) => theme.brand.brand1};
    background-color: ${({ theme }) => theme.brand.brand4};
  }

  @media only screen and (min-width: 375px) {
    h2 {
      font-size: 20px;
    }
    span {
      font-size: 14px;
      width: 92px;
      height: 32px;
    }
  }
`;
