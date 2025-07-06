import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import { draftMode } from 'next/headers';

export default async function Home() {
 const isPreview = (await draftMode()).isEnabled;

const storyblokApi = getStoryblokApi();

const { data } = await storyblokApi.get(`cdn/stories/tour`, 
	{ 
		version: isPreview ? "draft" : "published" });

return (
	<div className="page">
		<StoryblokStory story={data.story} />
	</div>
);
}
