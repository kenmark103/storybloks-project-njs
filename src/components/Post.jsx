"use client";

import { richTextResolver } from "@storyblok/richtext";
import { storyblokEditable } from "@storyblok/react/rsc";

const resolver = new richTextResolver({
  nodeResolvers: {
    hard_break: () => "<br/>",
  },
  optimizeImages: {
    class: "w-2/3 h-auto rounded-lg shadow mb-6", 
    loading: "lazy",
    srcset: [400, 800, 1200],
    sizes: ["(max-width: 768px) 100vw", "50vw"],
  },
});

export default function Post({ blok }) {
  return (
    <article
      {...storyblokEditable(blok)}
      className="prose prose-lg max-w-4xl mx-auto my-16 px-4"
    >
   
      <h1 className="text-4xl font-bold mb-6">{blok.title}</h1>

      {blok.background_image && (
        <img
          src={blok.background_image.startsWith("//") ? `https:${blok.background_image}` : blok.background_image}
          alt={blok.title}
          className="w-full h-auto rounded-lg shadow mb-8"
          loading="lazy"
        />
      )}

      
      <div
        className="post-body"
        dangerouslySetInnerHTML={{
          __html: resolver.render(blok.content),
        }}
      />

      {blok.image_array && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {blok.image_array[0].image_array.map((img) => (
            <img
              key={img.id}
              src={img.filename}
              alt={img.alt}
              className="w-full h-40 object-cover rounded-lg"
              loading="lazy"
            />
          ))}
        </div>
      )}
    </article>
  );
}
