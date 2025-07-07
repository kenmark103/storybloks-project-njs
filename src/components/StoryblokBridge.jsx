"use client";

import { useEffect } from "react";
import { StoryblokBridge } from "@storyblok/js";

export default function StoryblokBridge() {
  useEffect(() => {
    // Instantiate the bridge only if we're inside the Storyblok editor
    if (window.location.search.includes("_storyblok")) {
      const sbBridge = new StoryblokBridge();

      // Reload the page on content change
      sbBridge.on(["change", "published", "input"], () => {
        window.location.reload();
      });
    }
  }, []);

  return null;
}
