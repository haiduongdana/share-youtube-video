import { RefreshToken } from "./refresh-token";

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  photo: string;
  resetPasswordLink: string;
  isVerified: boolean;
  refreshTokens: RefreshToken[];
  authenticate: (plainPassword: string) => boolean;
  encryptPassword: (password: string) => string;
}
