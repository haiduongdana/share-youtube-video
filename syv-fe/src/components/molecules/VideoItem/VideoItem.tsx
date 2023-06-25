import React, { useCallback } from "react";
import { VideoItemProps } from "./VideoItem.types";
import { Image, Title, VideoContainer } from "./VideoItem.styled";
import { Container } from "@/components/atoms";
import { formatDate } from "@/utils/date";
import { useRouter } from "next/router";

const VideoItem: React.FC<VideoItemProps> = ({
  _id,
  embedId,
  sharedDate,
  thumbnailUrl,
  title,
  user,
}) => {
  const router = useRouter();

  const onClickHandler = useCallback(() => {
    router.push(`/video/${_id}`);
  }, [_id]);

  return (
    <VideoContainer onClick={onClickHandler}>
      <Image src={thumbnailUrl} alt={title} />
      <Container display="flex" flexDirection="column" gap="4px">
        <Title>{title}</Title>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Shared At: {formatDate(sharedDate)}</p>
      </Container>
    </VideoContainer>
  );
};

export default VideoItem;
