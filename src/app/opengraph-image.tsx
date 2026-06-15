import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Rorich Group — Your Business Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1e3d6e",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Gold accent bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#c9971a",
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-1px",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          The Rorich Group
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.70)",
            letterSpacing: "4px",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Your Business Partner
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: 80,
            height: 3,
            backgroundColor: "#c9971a",
            marginTop: 32,
            borderRadius: 2,
          }}
        />

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            fontSize: 20,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "1px",
          }}
        >
          rorichgroup.co.za
        </div>
      </div>
    ),
    { ...size }
  );
}
