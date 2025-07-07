"use client"

import { useEffect } from "react"
import { loadStoryblokBridge } from "@storyblok/js"

export default function StoryblokBridgeComponent() {
  useEffect(() => {
    loadStoryblokBridge(() => {
      const { StoryblokBridge } = window;
      if (typeof StoryblokBridge !== "undefined") {
        const bridge = new StoryblokBridge()

        bridge.on(["change", "published", "input"], (event) => {
          console.log("🟢 Storyblok event triggered:", event)
          // Instead of reload you can hot-update here too
          location.reload()
        })
        console.log("✅ Storyblok Bridge initialized")
      }
    })
  }, [])

  return null
}
