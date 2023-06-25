import { ThemeMode } from "@/utils/themes";
import styled from "styled-components";

export const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 8px;

  &:hover {
    background-color: ${({ theme }: { theme: ThemeMode }) =>
      theme.color.textButtonHover};
  }
`;

export const Image = styled.img`
  width: 50%;
  max-width: 360px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const PopUpContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background-color: ${({ theme }: { theme: ThemeMode }) =>
    theme.color.textButtonHover};
`;
