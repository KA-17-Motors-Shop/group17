import styled from "styled-components";

export const SpanContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 2rem;
  width: 100%;
  color: ${({ theme }) => theme.textColors.subTitle};
  background-color: ${({ theme }) => theme.borders.headerBorder};
  font-weight: 500;
  font-size: 14px;
`;

export const ButtonActivate = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.textColors.subTitle};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.textColors.subTitle};
    transition: width 0.8s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const ContainerModal = styled.div`
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
