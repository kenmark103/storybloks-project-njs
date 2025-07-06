"use client";

import { useEffect } from "react";

export default function StoryblokBridge() {
  useEffect(() => {
    const { StoryblokBridge } = window as typeof window & {
      StoryblokBridge?: new () => {
        on: (event: string[], callback: () => void) => void;
      };
    };

    if (typeof StoryblokBridge !== "undefined") {
      const bridgeInstance = new StoryblokBridge();
      bridgeInstance.on(["input", "published", "change"], () => {
        location.reload();
      });
    }
  }, []);

  return null;
}
