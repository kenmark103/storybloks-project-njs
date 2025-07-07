"use client";

import { useEffect } from "react";
import { StoryblokBridge as SbBridge } from "@storyblok/js";

export default function StoryblokBridgeComponent() {
  useEffect(() => {
    if (window.location.search.includes("_storyblok")) {
      const sbBridge = new SbBridge();

      sbBridge.on(["change", "published", "input"], () => {
        window.location.reload();
      });
    }
  }, []);

  return null;
}
