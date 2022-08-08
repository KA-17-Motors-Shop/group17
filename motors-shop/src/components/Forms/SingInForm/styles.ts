import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
<<<<<<< HEAD
<<<<<<< HEAD
  background-color: ${({ theme }) => theme.backgroundColors.headerBackground};
=======
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
>>>>>>> 39a701fb1d84baf651c856c52ff13cee5dfebefb
=======

  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};

>>>>>>> 1a88c29749d506331d4cb73a3ead43f5c5c4f0cc
  width: 412px;
  height: 568px;

  gap: 55px;
  padding: 44px 48px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${({ theme }) => theme.textColors.subTitle};
  }

  @media screen and (max-width: 920px) {
    width: 343px;
    height: 542px;
    gap: 32px;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  gap: 20px;
`;

export const SpanText = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
<<<<<<< HEAD
<<<<<<< HEAD
  color: ${({ theme }) => theme.textColors.primaryText};
=======
  color: ${({ theme }) => theme.textColors.spantext};
>>>>>>> 39a701fb1d84baf651c856c52ff13cee5dfebefb
=======

  color: ${({ theme }) => theme.textColors.spantext};

>>>>>>> 1a88c29749d506331d4cb73a3ead43f5c5c4f0cc
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;
`;

export const RequestPassword = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  button {
    background-color: transparent;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    color: ${({ theme }) => theme.textColors.spantext};
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.textColors.spantext};
      transition: width 0.8s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const FooterForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
`;
