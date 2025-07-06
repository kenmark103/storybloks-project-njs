import { storyblokEditable } from "@storyblok/react/rsc";
import { richTextResolver } from "@storyblok/richtext";

const resolver = new richTextResolver();

export default function PostsGrid({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white rounded-lg shadow overflow-hidden"
    >
      <img
        src={blok.image}
        alt={blok.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4 prose prose-sm">
        <div dangerouslySetInnerHTML={{ __html: resolver.render(blok.content) }} />
      </div>
    </div>
  );
}
