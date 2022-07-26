import styled from "styled-components";

export const NameBol = styled.div<{ background: string }>`
  border-radius: 50%;
  background-color: ${({ background }) => background};
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.greyScale.whiteFixed};
`;

export const NameSpan = styled.span`
  max-width: 10ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.textColors.primaryText};
`;
