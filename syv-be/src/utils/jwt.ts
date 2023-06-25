import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { JWT_LIFETIME, JWT_SECRET } from "../config";
import wrapAsync from "./wrap-async";
import { UnauthenticatedError } from "../errors";

export const generateToken = (
  payload: Record<string, unknown>,
  expires?: string | number
) => {
  return jwt.sign(payload, JWT_SECRET as string, {
    expiresIn: expires?.toString() || JWT_LIFETIME,
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET as string);
};

export const requiredSignIn = wrapAsync(
  (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      throw new UnauthenticatedError("Access token is missing");
    }

    const accessToken = authorizationHeader.split(" ")[1];

    jwt.verify(accessToken, JWT_SECRET as string, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          throw new UnauthenticatedError("Access token has expired");
        } else {
          throw new UnauthenticatedError("Invalid access token");
        }
      }

      next();
    });
  }
);
