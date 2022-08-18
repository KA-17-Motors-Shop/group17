import styled from "styled-components";

import img_test from "../../../assets/img/vehicles/carro02.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  h2 {
    margin: 2rem;
  }
`;

export const ContainerAuction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 735px;
  height: 326px;
  margin-left: 2rem;

  background-image: url(${img_test});
  background-size: cover;

  color: white;
`;

export const ContainerInfo = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  width: 100%;
  height: 100%;
`;

export const ContainerTitle = styled.div``;

export const ContainerAvatar = styled.div``;

export const ContainerBottom = styled.div``;

export const ContainerBottomInfo = styled.div`
  display: flex;
  align-items: center;

  width: 50px;
  height: 32px;
  background: #edeafd;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  color: #4529e6;
`;

export const ButtonAuction = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColors.bannerBackground};
`;
