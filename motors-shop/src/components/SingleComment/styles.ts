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
  p {
    line-height: 24px;
    font-size: 16px;
  }
`;
