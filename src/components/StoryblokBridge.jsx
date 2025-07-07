"use client";

import { useEffect } from "react";
import { loadStoryblokBridge } from "@storyblok/js";

export default function StoryblokBridgeComponent() {
  useEffect(() => {
    if (window.location.search.includes("_storyblok")) {
      loadStoryblokBridge(() => {
        const { StoryblokBridge } = window;
        console.log("✅ Storyblok Bridge loaded");
        if (typeof StoryblokBridge !== "undefined") {
          const sbBridge = new StoryblokBridge();

          sbBridge.on(["change", "published", "input"], (event) => {
            console.log("🟢 Storyblok event triggered:", event);
            window.location.reload();
          });
        }
      });
    }
    else{
        console.log("❌ _storyblok query param missing — bridge not initialized.");
    }
  }, []);

  return null;
}

export function initStoryblokBridge(){
    loadStoryblokBridge().then(()=>{
        if (typeof window.StoryblokBridge !== 'undefined'){
            new window.StoryblokBridge();
        }
    })
}