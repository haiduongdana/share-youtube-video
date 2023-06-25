import { VIDEO_PER_PAGE } from "../config";
import { VideoModel } from "../models";
import { Video } from "../types/video.types";

const newSharedVideo = async (payload: {
  embedId: string;
  title: string;
  userId: string;
  thumbnailUrl: string;
}): Promise<Video> => {
  const video = new VideoModel(payload);
  return await video.save();
};

const getListSharedVideo = async (pageNumber = 1) => {
  const skipCount = (pageNumber - 1) * VIDEO_PER_PAGE;

  return await VideoModel.find()
    .skip(skipCount)
    .limit(VIDEO_PER_PAGE)
    .populate("userId", "_id username email");
};

export default {
  newSharedVideo,
  getListSharedVideo,
};
