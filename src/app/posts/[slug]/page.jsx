import { notFound }               from "next/navigation";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export async function generateStaticParams() {
  const sb = getStoryblokApi();

  const { data } = await sb.get("cdn/stories", {
    starts_with: "posts/",
    version: "published",
  });
  return data.stories.map(story => ({ slug: story.full_slug.replace("posts/", "") }));
}

export default async function PostPage({ params }) {
  const isPreview = (await draftMode()).isEnabled;

  const { slug } = params;
  const sb = getStoryblokApi();

  try {
    const { data } = await sb.get(`cdn/stories/posts/${slug}`, {
      version: isPreview ? "draft" : "published",
    });
    if (!data.story) return notFound();

    return (
      <StoryblokServerComponent blok={data.story.content} />
    );
  } catch (e) {
    return notFound();
  }
}
