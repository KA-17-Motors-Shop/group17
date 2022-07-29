import styled from "styled-components";

export const Container = styled.div`
  > svg:hover {
    transform: scale(1.15);
    cursor: pointer;
  }

  @media screen and (min-width: 921px) {
    display: none;
  }
`;
