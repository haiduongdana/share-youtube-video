import React from "react";
import { YoutubeEmbedProps } from "./YoutubeEmbed.types";
import { Wrapper } from "./YoutubeEmbed.styled";
import { Container } from "@/components/atoms";

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId }) => {
  return (
    <Container width="100%" display="flex" gap="12px">
      <Wrapper>
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </Wrapper>
    </Container>
  );
};

export default YoutubeEmbed;
