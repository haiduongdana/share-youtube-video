export const getYouTubeInfo = async (url: string) => {
  try {
    const videoId = extractVideoId(url);

    const apiUrl = `${process.env.NEXT_PUBLIC_YOUTUBE_API_URL}?part=snippet&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;

    return await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract the embed ID and title from the API response
        const embedId = data.items[0].id;
        const title = data.items[0].snippet.title;

        return { embedId, title };
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  } catch (err) {
    console.log(err);
  }
};

export const extractVideoId = (url: string) => {
  let videoId = "";

  // Extract the video ID using regular expressions
  const regExp =
    /^(?:https?:\/\/(?:www\.youtube\.com\/watch\?v=|youtu\.be\/))(.*?)(?:\?.*|)$/;
  const match = url.match(regExp);

  if (match && match[1].length === 11) {
    videoId = match[1];
  } else {
    throw new Error("Invalid YouTube URL");
  }

  return videoId;
};
