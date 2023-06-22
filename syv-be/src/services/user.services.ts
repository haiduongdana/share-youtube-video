import RefreshTokenService from "./refresh-token.services";
import { UnauthenticatedError } from "../errors";
import { UserModel } from "../models";
import { User } from "../types/user.types";

const newUser = async (payload: {
  username: string;
  email: string;
  _password: string;
}): Promise<User> => {
  const user = new UserModel(payload);
  return await user.save();
};

const findByEmail = async (email: string): Promise<User> => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("User not found!");
  }

  return user;
};

const findById = async (_id: string): Promise<User> => {
  const user = await UserModel.findById(_id);

  if (!user) {
    throw new UnauthenticatedError("User not found!");
  }

  return user;
};

const addRefreshToken = async (
  userId: string,
  refreshTokenId: string
): Promise<User | null> => {
  return await UserModel.findByIdAndUpdate(
    userId,
    {
      $push: { refreshTokens: refreshTokenId },
    },
    { new: true, useFindAndModify: false }
  );
};

const removeRefreshToken = async (
  userId: string,
  refreshToken: string
): Promise<User | null> => {
  const _refreshToken = await RefreshTokenService.deleteRefreshToken(
    refreshToken
  );

  if (!_refreshToken) {
    return null;
  }

  return await UserModel.findByIdAndUpdate(
    userId,
    {
      $pull: { refreshTokens: _refreshToken._id },
    },
    { new: true, useFindAndModify: false }
  );
};

export default {
  newUser,
  findByEmail,
  findById,
  addRefreshToken,
  removeRefreshToken,
};
