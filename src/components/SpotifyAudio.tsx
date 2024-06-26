"use client";

import { useEffect } from "react";

const SpotifyAudio = ({ audio_url }: { audio_url: string }) => {
  useEffect(() => {
    if (document) {
      const audio = document.querySelector("audio");
      const wrapper = document.getElementById("spotifyPlayingWidgetWrapper");
      const audioLink = wrapper?.getElementsByTagName('a')[0];
      if (audio && wrapper && audioLink) {
        wrapper.onmouseover = () => {
          audio.play();
          setTimeout(() => audioLink.style.display = "block", 700);
        };
        wrapper.onmouseout = () => {
          audio.pause();
          audioLink.style.display = "none";
          setTimeout(() => audioLink.style.display = "none", 700);
        };
      }
    }
  }, []);
  return (
    <audio>
      <source src={audio_url} />
    </audio>
  );
};

export default SpotifyAudio;
