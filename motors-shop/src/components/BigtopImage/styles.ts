import styled from "styled-components";

export const TopImageContainer = styled.div`
  width: 90%;
  max-width: 752px;
  height: 355px;
  position: absolute;
  top: 120px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.greyScale.grey10};
  margin-bottom: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;
