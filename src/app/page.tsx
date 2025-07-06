import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

export default async function Home() {
const storyblokApi = getStoryblokApi();
const { data } = await storyblokApi.get(`cdn/stories/tour`, { version: 'published' });

return (
	<div className="page">
		<StoryblokStory story={data.story} />
	</div>
);
}
