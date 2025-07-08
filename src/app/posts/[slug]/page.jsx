import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import StoryblokProvider from '@/components/StoryblokBridge';
import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import dynamic from 'next/dynamic';

const StoryblokProvider = dynamic(
  () => import("@/components/StoryblokBridge"),
  { ssr: false }
);

export const dynamic = "force-dynamic";

export default async function PostPage({ params }) {
  const { isEnabled } = await draftMode();
  const sb = await getStoryblokApi();

  try {
    const { data } = await sb.get(
      `cdn/stories/posts/${params.slug}`,
      { version: isEnabled ? "draft" : "published" }
    );
    if (!data.story) return notFound();

    return (
      <StoryblokProvider story={data.story}>
        <StoryblokServerComponent blok={data.story.content} />
      </StoryblokProvider>
    );
  } catch {
    return notFound();
  }
}

