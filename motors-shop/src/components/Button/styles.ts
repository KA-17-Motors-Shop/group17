import styled from "styled-components";

export const Primary = styled.div`
  width: auto;
  height: auto;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 12px 28px;

    background-color: ${({ theme }) => theme.buttons.primary.background};
    color: ${({ theme }) => theme.buttons.color};
    transition: 0.8s;
    border: 1.5px solid ${({ theme }) => theme.buttons.primary.border};
    border-radius: 6px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    &:hover {
      filter: brightness(1);
      background-color: ${({ theme }) => theme.buttons.primary.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.primary.hover};
    }

    @media screen and (max-width: 920px) {
      height: 38px;
      padding: 12px 20px;
      font-size: 14px;
    }
  }
`;

export const Default = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.default.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.default.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.default.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.default.hover};
    }
  }
`;

export const Negative = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.negative.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.negative.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.negative.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.negative.hover};
    }
  }
`;

export const Disable = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.disable.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.disable.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.disable.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.disable.hover};
    }
  }
`;

export const PrimaryOpacity = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.primaryOpacity.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.primaryOpacity.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.primaryOpacity.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.primaryOpacity.hover};
    }
  }
`;

export const Light = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.light.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.light.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.light.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.light.hover};
    }
  }
`;

export const OutlineLight = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.outlineLight.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.outlineLight.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.outlineLight.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.outlineLight.hover};
    }
  }
`;

export const Outline1 = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.outline1.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.outline1.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.outline1.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.outline1.hover};
    }
  }
`;
export const Outline2 = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.outline2.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.outline2.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.outline2.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.outline2.hover};
    }
  }
`;
export const Link = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.link.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.link.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.link.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.link.hover};
    }
  }
`;
export const Alert = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.alert.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.alert.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.alert.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.alert.hover};
    }
  }
`;
export const Success = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.success.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.success.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.success.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.success.hover};
    }
  }
`;
export const PrimaryDisable = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.primaryDisable.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.primaryDisable.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.primaryDisable.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.primaryDisable.hover};
    }
  }
`;

export const PrimaryOutline = styled(Primary)`
  button {
    background-color: ${({ theme }) => theme.buttons.primaryOutline.background};
    border: 1.5px solid ${({ theme }) => theme.buttons.primaryOutline.border};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.primaryOutline.hover};
      border: 1.5px solid ${({ theme }) => theme.buttons.primaryOutline.hover};
    }
  }
`;
