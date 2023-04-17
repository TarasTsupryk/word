import React from "react";
import { PrimaryButton, StylesProps } from "./Button.styles";

enum Type {
  primary = "primary",
}

interface Props extends StylesProps {
  onClick: () => void;
  type?: Type.primary;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ onClick, children, type, ...styleProps }) => {
  return (
    <PrimaryButton onClick={onClick} {...styleProps}>
      {children}
    </PrimaryButton>
  );
};

export default Button;
