

import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import { draftMode } from 'next/headers';
import StoryblokProvider from '@/components/StoryblokBridge.client';

export const dynamic = "force-dynamic";

export default async function Home() {
  const { isEnabled } = await draftMode();
  const sb = await getStoryblokApi();
  const { data } = await sb.get("cdn/stories/tour", {
    version: isEnabled ? "draft" : "published",
  });

  return (
    <StoryblokProvider story={data.story}>
      <StoryblokStory story={data.story} />
    </StoryblokProvider>
  );
}