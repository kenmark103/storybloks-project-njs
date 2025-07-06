import { storyblokEditable } from "@storyblok/react/rsc";

export default function Hero({ blok }) {
  const imageUrl = `${blok.hero_image}/m/1920x1080`;

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
      {...storyblokEditable(blok)}
    >
     
      <div className="absolute inset-0 bg-black/50 z-0"></div>

    
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          {blok.title}
        </h2>
        <p className="text-xl md:text-2xl font-light">{blok.subtitle}</p>
      </div>
    </div>
  );
}
