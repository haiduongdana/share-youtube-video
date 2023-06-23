import { ThemeMode } from "@/utils/themes";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: ${({ theme }: { theme: ThemeMode }) =>
    theme.color.textButtonHover};
  padding: 12px 0;
`;

export const Logo = styled.div`
  font-weight: ${({ theme }: { theme: ThemeMode }) =>
    theme.typography.weight.bold};
  font-size: ${({ theme }: { theme: ThemeMode }) => theme.typography.size.m2}px;
  text-transform: uppercase;
  color: ${({ theme }: { theme: ThemeMode }) => theme.color.text};
  height: 100%;
  display: flex;
  align-items: center;
`;

export const RouteContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: ${({ theme }: { theme: ThemeMode }) => theme.spacing.padding.medium};
`;
