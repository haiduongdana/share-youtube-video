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

router.get("/user/videos", requiredSignIn, VideoController.getUserSharedVideos);

router.get(
  "/",
  VideoMiddleware.bodyGetListSharedVideo,
  requestValidation,
  VideoController.getListSharedVideo
);

router.get(
  "/:id",
  VideoMiddleware.paramGetSharedVideo,
  requestValidation,
  VideoController.getSharedVideo
);

export { router as videoRouter };
