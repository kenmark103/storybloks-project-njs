export default function StoryblokProvider({ story, children }) {
 
  useStoryblokBridge(story, {
    resolveRelations: ["featured_item"],
    bridge: true,
  });

  return <>{children}</>;
}