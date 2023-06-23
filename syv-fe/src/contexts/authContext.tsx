import { createContext } from "react";

export const AuthContext = createContext<{
  username?: string;
  email?: string;
  photo?: string;
  refreshTokens?: string;
}>({});
