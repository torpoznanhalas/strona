import { ImageResponse } from "next/og";

export const alt = "Tor Poznań: hałas, fakty i dokumenty";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          color: "#111111",
          background: "#f4f1ea",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "26px", fontWeight: 800 }}>
          <span style={{ color: "#d52222" }}>●</span>
          TOR POZNAŃ: HAŁAS
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "1040px" }}>
          <div style={{ fontSize: "78px", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-4px" }}>
            Tor przekraczał normy.
          </div>
          <div style={{ color: "#d52222", fontSize: "78px", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-4px" }}>
            Potem ruszyła walka o zmianę zasad.
          </div>
        </div>
        <div style={{ fontSize: "24px" }}>torpoznanhalas.pl · dokumenty · nagrania · poparcie</div>
      </div>
    ),
    size
  );
}
