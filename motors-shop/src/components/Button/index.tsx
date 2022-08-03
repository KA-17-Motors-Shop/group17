import React from "react";

import {
  ButtonBlack,
  ButtonBrand,
  ButtonGrey,
  ButtonGrey2,
  ButtonGrey3,
} from "./styles";

export interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

// #4529E6 hover: #5126EA
export const ButtonPrimary: React.FC<IButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <ButtonBrand>
      <button {...rest}>{children}</button>
    </ButtonBrand>
  );
};

// #0B0D0D hover: #212529
export const ButtonSecundary: React.FC<IButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <ButtonBlack>
      <button {...rest}>{children}</button>
    </ButtonBlack>
  );
};

// #DEE2E6 hover: #CED4DA
export const ButtonTertiary: React.FC<IButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <ButtonGrey>
      <button {...rest}>{children}</button>
    </ButtonGrey>
  );
};

// #CED4DA hover: #CED4DA color: #FFFFFF
export const ButtonGreyClear: React.FC<IButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <ButtonGrey2>
      <button {...rest}>{children}</button>
    </ButtonGrey2>
  );
};

// #FDFDFD border:#F1F3F5 color: #0B0D0D
export const ButtonGreyWhite: React.FC<IButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <ButtonGrey3>
      <button {...rest}>{children}</button>
    </ButtonGrey3>
  );
};
