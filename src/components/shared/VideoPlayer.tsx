import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoUrl }: any) => {
  const getVideoId = (url: string | URL) => {
    const urlParams = new URL(url);
    return urlParams.searchParams.get("v");
  };
  const videoId = getVideoId(videoUrl);

  const opts = {
    height: "300",
    width: "600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="rounded-3xl overflow-hidden">
      {/* {videoId && <YouTube videoId={videoId} opts={opts} />} */}
      {videoId && (
        <div className="w-full aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3">
          <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
