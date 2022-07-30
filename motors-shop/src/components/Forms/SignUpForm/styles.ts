import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  width: 412px;
  height: 542px;

  gap: 32px;
  padding: 44px 48px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #000;
  }

  @media screen and (max-width: 920px) {
    width: 343px;
    height: 542px;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  gap: 5px;
`;

export const SpanText = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.greyScale.grey2};
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;

  > a {
    color: ${({ theme }) => theme.greyScale.grey2};
    font-weight: 600;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.greyScale.grey2};
      transition: width 0.8s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const SpanPassword = styled.div`
  /* position: absolute; */
  margin: -10% 0% -2% 55%;
  padding: -5% 0% 0% 0%;

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #495057;
    margin: 0% 0% 0% 0%;
    padding: 0% 0% 0% 0%;
  }

  @media screen and (max-width: 920px) {
    margin: -10% 0% -2% 38%;
  }
`;

export const FooterForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
