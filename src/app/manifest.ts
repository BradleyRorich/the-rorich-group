import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Rorich Group",
    short_name: "Rorich Group",
    description: "Your Business Partner — industrial printing, sourcing, and logistics.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#1e3d6e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
  };
}
