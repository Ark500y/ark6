import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "ARK — Abdul Rehman Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 800,
            background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(5,5,5,0) 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 160,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.05em",
              lineHeight: 1,
              marginBottom: 20,
            }}
          >
            ARK
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: "#D4AF37",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: 40,
            }}
          >
            Abdul Rehman
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#A1A1AA",
              fontWeight: 400,
            }}
          >
            Graphic Designer & Web Developer
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
