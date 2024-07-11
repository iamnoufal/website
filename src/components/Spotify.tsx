import getCurrentlyPlaying, { SpotifyData } from "@/helpers/spotify";
import { Box } from "@mui/material";
import Link from "next/link";
import SpotifyAudio from "./SpotifyAudio";

const SpotifyCurrentlyPlaying = async () => {
  const data: SpotifyData = await getCurrentlyPlaying();
  if (data.is_playing == null) return null;
  const playingText = data.is_playing ? "now playing" : "last  played";
  return (
    <Box
      style={{
        position: "absolute",
        top: "100vh",
        right: "5vw",
      }}
      id="spotifyPlayingWidgetWrapper"
    >
      <Box sx={{ position: "relative" }}>
        <img src={data.album_art} alt={data.title} />
        <Box component="span">
          <Box>{data.title}</Box>
        </Box>
        <Link
          href={data.url}
          target="_blank"
          style={{
            position: "absolute",
            display: "none",
            width: "100%",
            height: "100%",
            zIndex: 10,
          }}
        ></Link>
        <svg
          viewBox="0 0 200 200"
          width="200"
          height="200"
          style={{ animationName: data.is_playing ? "rotate-circle" : "" }}
        >
          <defs>
            <path
              id="spotifyPlayingTextPath"
              d="
                M 100, 100
                m -100, 0  
                a 100, 100 0 1, 0 200, 0  
                a 100, 100 0 1, 0 -200, 0
              "
            ></path>
          </defs>
          <text width="400">
            <textPath
              xlinkHref="#spotifyPlayingTextPath"
              style={{
                fill: "white",
                letterSpacing: data.is_playing ? "1.9px" : "2.9px",
              }}
            >
              {playingText} • {playingText} • {playingText} • {playingText} •
            </textPath>
          </text>
        </svg>
      </Box>
      <SpotifyAudio audio_url={data.preview} />
    </Box>
  );
};

export default SpotifyCurrentlyPlaying;
