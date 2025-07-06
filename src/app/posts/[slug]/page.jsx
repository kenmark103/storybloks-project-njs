
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";


export default async function PostPage({ params }) {

  const isPreview = (await draftMode()).isEnabled;

  const sb = getStoryblokApi();
  try {
    const { data } = await sb.get(`cdn/stories/posts/${params.slug}`, {
      version: isPreview ? "draft" : "published",
    });
    if (!data.story) return notFound();
    return <StoryblokServerComponent blok={data.story.content} />;
  } catch {
    return notFound();
  }
}
