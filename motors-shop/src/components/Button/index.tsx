import React from "react";

import { Container } from "./styles";

export interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const ButtonPrimary: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <Container>
      <button {...rest}>{children}</button>
    </Container>
  );
};

export default ButtonPrimary;
