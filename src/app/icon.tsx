import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

const logoBase64 = readFileSync(join(process.cwd(), "public", "logo-removebg.png")).toString("base64");
const logoDataUrl = `data:image/png;base64,${logoBase64}`;

export default function Icon() {
  return new ImageResponse(
    <img
      src={logoDataUrl}
      alt="ANtwix logo"
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />,
    {
      ...size,
    }
  );
}