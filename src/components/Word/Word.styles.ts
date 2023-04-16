import styled from "styled-components";
import { theme } from "styles";

export const StyledWord = styled.h2`
  margin: ${theme.spacings.hasNoSpace};
  font-size: ${theme.spacings.spacing32};
`;

export const WordWithoutLastLetter = styled.span`
  color: ${theme.colors.blue};
`;

export const FirstLetter = styled.span`
  color: ${theme.colors.blue};
`;

export const LastLetter = styled.span`
  color: ${theme.colors.pink};
`;
