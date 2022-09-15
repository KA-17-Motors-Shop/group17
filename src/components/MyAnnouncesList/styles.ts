import styled from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 95%;
  padding-top: 2rem;
`;

export const Title = styled.h1`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  color: ${({ theme }) => theme.textColors.primaryText};
`;

export const TabsRoot = styled(Tabs.Root)`
  width: 100%;
`;

export const TabsList = styled(Tabs.List)`
  display: flex;

  justify-content: center;
  gap: 1rem;
`;

export const Trigger = styled(Tabs.Trigger)`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.buttons.outline2.background};
  border: 1.5px solid ${({ theme }) => theme.buttons.outline2.border};
  color: ${({ theme }) => theme.buttons.outline2.color};

  &:hover {
    filter: brightness(1);
    background-color: ${({ theme }) => theme.buttons.outline2.hover};
    border: 1.5px solid ${({ theme }) => theme.buttons.outline2.hover};
  }
`;

export const AnnounceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
