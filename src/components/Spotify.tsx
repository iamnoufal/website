import getCurrentlyPlaying from "@/helpers/spotify";
import { Box } from "@mui/material";
import Link from "next/link";

const SpotifyCurrentlyPlaying = async () => {
  const data = await getCurrentlyPlaying();
  if (!data.is_playing) return null;
  return (
    <Link
      style={{
        position: "absolute",
        top: "100vh",
        right: "5vw"
      }}
      id="spotifyPlayingWidgetWrapper"
      href={data.url}
      target="_blank"
    >
      <Box sx={{ position: "relative" }}>
        <img src={data.album_art} alt={data.title} />
        <Box component="span">
          <Box>{data.title}</Box>
        </Box>
        <svg
          id="spotifyPlayingWidget"
          viewBox="0 0 200 200"
          width="200"
          height="200"
        >
          <defs>
            <path
              id="circle"
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
              xlinkHref="#circle"
              className="spotifyPlayingText"
            >
              now playing • now playing • now playing • now playing •
            </textPath>
          </text>
        </svg>
      </Box>
    </Link>
  );
};

export default SpotifyCurrentlyPlaying;
