"use client";

import { useEffect } from "react";
import { loadStoryblokBridge } from "@storyblok/js";

export default function StoryblokBridgeComponent() {
  useEffect(() => {
    if (window.location.search.includes("_storyblok")) {
      loadStoryblokBridge(() => {
        const { StoryblokBridge } = window;
        if (typeof StoryblokBridge !== "undefined") {
          const sbBridge = new StoryblokBridge();

          sbBridge.on(["change", "published", "input"], () => {
            location.reload();
          });
        }
      });
    }
  }, []);

  return null;
}
