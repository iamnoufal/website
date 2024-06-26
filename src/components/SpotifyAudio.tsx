"use client";

import { useEffect } from "react";

const SpotifyAudio = ({ audio_url }: { audio_url: string }) => {
  useEffect(() => {
    if (document) {
      const audio = document.querySelector("audio");
      const wrapper = document.getElementById("spotifyPlayingWidgetWrapper");
      if (audio && wrapper) {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
          wrapper.ontouchstart = () => audio.play();
          wrapper.ontouchend = () => audio.pause();
        } else {
          wrapper.onmouseover = () => audio.play();
          wrapper.onmouseout = () => audio.pause();
        }
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
