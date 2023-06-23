import { ThemeMode } from "forentor-ui-lib";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  height: 100%;
  flex-direction: column;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }: { theme: ThemeMode }) => theme.color.background};
`;