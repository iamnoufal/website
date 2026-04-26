import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "linear-gradient(135deg, #02121F 0%, #052640 45%, #0B3655 100%)",
          color: "#F5F9FC",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-60px",
            width: "320px",
            height: "320px",
            borderRadius: "9999px",
            background: "radial-gradient(circle at center, rgba(79,255,176,0.3) 0%, rgba(79,255,176,0.04) 70%, transparent 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 26,
            letterSpacing: "0.05em",
            color: "#9FBCCF",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              background: "#4FFFB0",
              boxShadow: "0 0 16px rgba(79,255,176,0.8)",
            }}
          />
          <span>noufal.<span style={{color:"#4FFFB0"}}>dev</span></span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "900px" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>
            Noufal Rahman
          </div>
          <div style={{ fontSize: 36, color: "#4FFFB0", fontWeight: 700 }}>
            Full Stack Developer and Creative Thinker
          </div>
          <div style={{ fontSize: 26, color: "#9FBCCF", lineHeight: 1.35 }}>
            Building things that matter with Next.js, TypeScript, and thoughtful UX.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
