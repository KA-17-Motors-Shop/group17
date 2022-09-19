import styled from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

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
  gap: 1rem;
  display: flex;
  flex-direction: column;
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

export const ToggleRoot = styled(ToggleGroup.Root)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  height: 50px;
  padding: 0 1rem;
  width: 100%;
`;
export const ToggleItem = styled(ToggleGroup.Item)`
  height: 100%;
  width: 45%;
  font-size: 12px;
  font-weight: 600;

  &[data-state="on"] {
    background-color: ${({ theme }) => theme.buttons.primary.background};
    color: ${({ theme }) => theme.buttons.primary.color};
    border: ${({ theme }) => theme.buttons.primary.border} 1px solid;
  }

  &[data-state="off"] {
    background-color: ${({ theme }) => theme.buttons.outline1.background};
    color: ${({ theme }) => theme.buttons.outline1.color};
    border: ${({ theme }) => theme.buttons.outline1.border} 1px solid;
  }
`;
