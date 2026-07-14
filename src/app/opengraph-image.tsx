import { ImageResponse } from "next/og";
import { site, getSiteCopy } from "@/content/site";

// Kept in Latin script (brand + English tagline) so the default OG font renders
// cleanly; the on-page metadata is fully localised per locale.
export const alt = `${site.name} — ${getSiteCopy("en").tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(150deg, #FBF8F2 0%, #F1E1C6 55%, #E3C089 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "#B0894F",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 30,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#7B6248",
            }}
          >
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.05,
              color: "#221A10",
              letterSpacing: "-0.02em",
            }}
          >
            Come home to yourself.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              lineHeight: 1.3,
              color: "#5A4530",
              maxWidth: 900,
              fontFamily: "sans-serif",
            }}
          >
            Energy therapy · a transformational game · author’s journeys for
            women.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#7B6248",
            fontFamily: "sans-serif",
          }}
        >
          {site.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
