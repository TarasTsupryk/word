import styled from "styled-components";
import { theme } from "styles";

export const StyledInput = styled.input`
  border: solid ${theme.spacings.spacing2} ${theme.colors.lightGray};
  border-radius: ${theme.spacings.spacing12};
  padding: ${theme.spacings.spacing12} ${theme.spacings.spacing24};
  color: ${theme.colors.textPrimary};
  font-size: ${theme.spacings.spacing20};
  font-weight: 500;

  &::placeholder {
    color: ${theme.colors.lightGray};
    font-weight: 500;
    font-size: ${theme.spacings.spacing20};
  }

  &:focus {
    outline: none;
    border: solid ${theme.spacings.spacing2} ${theme.colors.blue};
  }
`;
