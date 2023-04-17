import styled from "styled-components";
import { theme } from "styles";

export interface StylesProps {
  width?: string;
  minHeight?: string;
  color?: string;
}

export const PrimaryButton = styled.button<StylesProps>`
  border-radius: ${theme.spacings.spacing12};
  border: none;
  min-height: ${({ minHeight }) => minHeight};
  padding: ${theme.spacings.spacing12};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  color: white;
  width: ${({ width }) => width};
`;
