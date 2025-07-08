"use client";
import Script from "next/script";

export default function BridgeLoader() {
  return (
    <Script
      src="https://app.storyblok.com/f/storyblok-v2-latest.js"
      strategy="beforeInteractive"
      onLoad={() => console.log("✅ Storyblok Bridge loaded")}
    />
  );
}
