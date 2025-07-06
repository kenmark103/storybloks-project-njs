import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function PostGridHolder({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">{blok.title}</h2>

      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {blok.post_grids.map(item => (
            <StoryblokServerComponent blok={item} key={item._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
