import styled from "styled-components";

export const DescriptionBoxContainer = styled.div`
  margin-top: 120px;
  border: solid 1px green;
  width: 90%;
  max-width: 751px;
  border-radius: 4px;
  padding: 36px 28px 36px 28px;
  text-align: left;
  padding: 36px 28px 36px 28px;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  h1 {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    color: ${({ theme }) => theme.greyScale.grey1};
    margin-bottom: 32px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: ${({ theme }) => theme.greyScale.grey2};
  }

  @media only screen and (min-width: 768px) {
    padding: 36px 44px 36px 44px;
  }
`;
