import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Socket } from "socket.io";
import wrapAsync from "../utils/wrap-async";
import { UserService, VideoService } from "../services";
import { _Request } from "../utils/jwt";
import { UnauthorizedError } from "../errors";
import { io } from "../index";

const addSharedVideo = wrapAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { embedId, title, thumbnailUrl, userId } = req.body;

    const sharedVideo = await VideoService.newSharedVideo({
      embedId,
      title,
      thumbnailUrl,
      userId,
    });

    const user = await UserService.findById(userId);

    await UserService.addSharedVideo(userId, sharedVideo._id);

    io.emit("newVideo", {
      message: `${user.username} has shared a video`,
      video: {
        _id: sharedVideo._id,
        embedId,
        title,
        thumbnailUrl,
        sharedDate: sharedVideo.sharedDate,
        user,
      },
    });

    res.status(StatusCodes.CREATED).json({
      message: "Shared Video Created",
      video: {
        _id: sharedVideo._id,
        embedId,
        title,
        thumbnailUrl,
        userId,
        sharedDate: sharedVideo.sharedDate,
      },
    });
  }
);

const getListSharedVideo = wrapAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { pageNumber } = req.body || {};

    const listShared = await VideoService.getListSharedVideo(pageNumber);

    const _listShared = listShared.map((item) => {
      const { userId, ...rest } = item.toObject();

      return { ...rest, user: userId };
    });

    res.status(StatusCodes.OK).json({
      message: "List shared videos",
      videos: _listShared,
    });
  }
);

const getSharedVideo = wrapAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const sharedVideo = await VideoService.getSharedVideo(id);

    // @ts-ignore
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { userId, ...rest } = sharedVideo?.toObject();

    return res.status(StatusCodes.OK).json({
      sharedVideo: { ...rest, user: userId },
    });
  }
);

const getUserSharedVideos = wrapAsync(
  async (req: _Request, res: Response, next: NextFunction) => {
    const id = req.user?._id;

    if (!id) {
      throw new UnauthorizedError("Unauthorized");
    }

    const user = await UserService.getSharedVideoList(id);

    res.status(StatusCodes.OK).json({
      user: {
        ...user?.toObject(),
        sharedVideos: user?.sharedVideos.map((item) => {
          // @ts-ignore
          // eslint-disable-next-line no-unsafe-optional-chaining
          const { userId, ...rest } = item?.toObject();

          return { ...rest, user: userId };
        }),
      },
    });
  }
);

export default {
  addSharedVideo,
  getListSharedVideo,
  getSharedVideo,
  getUserSharedVideos,
};
