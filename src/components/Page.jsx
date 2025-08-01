import {
storyblokEditable,
StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function Page({ blok }) {
return (
	<main {...storyblokEditable(blok)}>
		{blok.body.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);
}