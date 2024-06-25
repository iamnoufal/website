"use client";

import { useEffect } from "react";

const SpotifyAudio = ({ audio_url }: { audio_url: string }) => {
  useEffect(() => {
    if (document) {
      const audio = document.querySelector("audio");
      const wrapper = document.getElementById("spotifyPlayingWidgetWrapper");
      if (audio && wrapper) {
        wrapper.onmouseover = () => audio.play();
        wrapper.onmouseout = () => audio.pause();
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
