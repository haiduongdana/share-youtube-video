import { Router } from "express";
import { VideoMiddleware, requestValidation } from "../middleware";
import { VideoController } from "../controllers";
import { requiredSignIn } from "../utils/jwt";

const router = Router();

router.post(
  "/add",
  requiredSignIn,
  VideoMiddleware.bodyAddSharedVideo,
  requestValidation,
  VideoController.addSharedVideo
);

router.get(
  "/",
  VideoMiddleware.bodyGetListSharedVideo,
  requestValidation,
  VideoController.getListSharedVideo
);

export { router as videoRouter };