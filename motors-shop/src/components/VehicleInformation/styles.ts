import styled from "styled-components";

export const VehicleInformationContainer = styled.div`
  border: solid 1px red;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 326px;
  width: 90%;
  max-width: 752px;
  padding: 44px 28px 28px 28px;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  border-radius: 4px;
  h1 {
    border: solid 1px green;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    line-height: 25px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: ${({ theme }) => theme.greyScale.grey1};

    @media only screen and (min-width: 768px) {
      -webkit-line-clamp: 1;
    }
  }
  button {
    width: 100px;
    height: 38px;
    font-size: 14px;
  }

  @media only screen and (min-width: 768px) {
    height: 239px;
    padding: 44px 44px 28px 44px;
  }
`;

export const MiddleContainer = styled.div`
  border: solid 1px orange;
  width: 100%;
  height: 84px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    border: solid 1px purple;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
`;
