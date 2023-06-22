import { ThemeMode } from "forentor-ui-lib";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: { theme: ThemeMode }) => theme.color.body};
    color: ${({ theme }: { theme: ThemeMode }) => theme.color.text};
    font-family: Arial, Helvetica, sans-serif;
    transition: all 0.5s linear;
  }
`;
