import styled from "styled-components";

import img_test from "../../../assets/img/vehicles/carro01.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContainerAuction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 735px;
  height: 326px;
  margin-left: 5rem;

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

export const ContainerBottomInfo = styled.div``;
