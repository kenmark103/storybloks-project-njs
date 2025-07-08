"use client";

import { useStoryblokBridge } from "@storyblok/js";
import { useEffect} from "react";

export default function StoryblokBridge({ story, children }) {
 
  const bridgeReturn = useStoryblokBridge(story, {
    resolveRelations: ["featured_item"],
  });

 //debug the bridge
  useEffect(() => {
    console.log("[Bridge] useStoryblokBridge() called");
    if (typeof window === "undefined") {
      console.error("[Bridge] window is undefined — should never happen in client component");
    } else {
      console.log("[Bridge] window.StoryblokBridge:", window.StoryblokBridge);
      console.log("[Bridge] hook returned:", bridgeReturn);
    }
  }, [bridgeReturn]);

  return <>{children}</>;
}
