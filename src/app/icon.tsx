import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element mimicking the BNS Logo
      <div
        style={{
          fontSize: 14,
          background: "#111827", // matches var(--foreground) in dark/light standard
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          borderRadius: "4px",
          fontFamily: "sans-serif",
          fontWeight: 800,
          letterSpacing: "-1px",
        }}
      >
        <span style={{ marginTop: "1px" }}>BNS</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
