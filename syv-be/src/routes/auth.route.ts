import { Router } from "express";
import { AuthMiddleware, requestValidation } from "../middleware";
import { AuthController } from "../controllers";
import { requiredSignIn } from "../utils/jwt";

const router = Router();

router.post(
  "/signup",
  AuthMiddleware.bodySignUpValidation,
  requestValidation,
  AuthController.signUp
);

router.post(
  "/login",
  AuthMiddleware.bodyLogInValidation,
  requestValidation,
  AuthController.logIn
);

router.post(
  "/refresh",
  AuthMiddleware.bodyRefreshAccessTokenValidation,
  requestValidation,
  requiredSignIn,
  AuthController.refreshAccessToken
);

router.post(
  "/logout",
  AuthMiddleware.bodyLogOutValidation,
  requestValidation,
  requiredSignIn,
  AuthController.logOut
);

export { router as authRouter };
