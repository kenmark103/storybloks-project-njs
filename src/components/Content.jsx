"use client";
import { richTextResolver } from "@storyblok/richtext";

const resolver = new richTextResolver({
  optimizeImages: {
    class: "rounded-lg shadow mb-6 md:w-1/2 w-full my-8",
    loading: "lazy",
    width: 800,
    height: 600,
    srcset: [400, 800, 1200],
    sizes: ["(max-width: 768px) 100vw", "50vw"],
    filters: {
      format: "webp",
      quality: 70,
    },
  },
});

export default function Content({ blok }) {
  return (
    <section className="my-16 px-4">
      <h3 {...storyblokEditable(blok)} className="text-3xl font-bold text-center my-10">{blok.title}</h3>

      <div className="w-full py-12 ">
        <div className="prose prose-lg max-w-5xl mx-auto px-4">
          <div
            dangerouslySetInnerHTML={{
              __html: resolver.render(blok.content),
            }}
          />
        </div>
      </div>
    </section>
  );
}
