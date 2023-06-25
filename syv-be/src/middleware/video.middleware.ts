import { body } from "express-validator";

const bodyAddSharedVideo = [
  body("embedId").isString().withMessage("EmbedId is required"),
  body("title").isString().withMessage("Title is required"),
  body("thumbnailUrl").isString().withMessage("ThumbnailUrl is required"),
  body("userId").isMongoId().withMessage("UserId is required"),
];

const bodyGetListSharedVideo = [
  body("pageNumber")
    .optional()
    .isNumeric()
    .withMessage("pageNumber must be a number")
    .isInt({ min: 1 })
    .withMessage("pageNumber must be greater than or equal to 1"),
];

export default {
  bodyAddSharedVideo,
  bodyGetListSharedVideo,
};
