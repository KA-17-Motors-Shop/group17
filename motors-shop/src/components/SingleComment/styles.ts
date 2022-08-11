import styled from "styled-components";
import { DescriptionBoxContainer } from "../DescriptionBox/styles";

export const SingleCommetContainer = styled(DescriptionBoxContainer)`
  /* margin-top: 120px;
  border: solid 1pc blue;
  height: 557px;
  width: 90%;
  max-width: 751px;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  border-radius: 4px;
  padding: 36px 44px 36px 44px;
  gap: 24px;
  @media only screen and (min-width: 768px) {
  } */
  margin-top: 0;
  padding-top: 0;
  border-radius: 0;
  width: 100%;
  p {
    line-height: 24px;
    font-size: 16px;
  }
`;

export const NameContainerProvisorio = styled.div`
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
    img {
      background-color: ${({ theme }) => theme.brand.brand1};
      background-color: #e34d8c;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  span {
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.greyScale.grey2};
  }
`;
