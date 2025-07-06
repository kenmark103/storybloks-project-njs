"use client";

import { useEffect } from "react";
import { StoryblokBridge } from "@storyblok/js";

export default function Bridge() {
  useEffect(() => {
    const { StoryblokBridge: Bridge } = window as any;
    if (typeof Bridge !== "undefined") {
      const bridge = new Bridge();
      bridge.on(["input", "published", "change"], () => {
        location.reload();
      });
    }
  }, []);

  return null;
}
