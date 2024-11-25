import React from "react";

export const Video = () => {
  return (
    <video className="w-full h-full object-cover rounded-xl" width="1200" height="720" autoPlay muted loop>
      <source src="homevideo.mp4" type="video/mp4" />
    </video>
  );
};
