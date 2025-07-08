import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import FeaturedItem from "@/components/FeaturedItem";
import Post from "@/components/Post";
import Top from "@/components/Top";
import PostGridHolder from "@/components/PostGridHolder";
import PostsGrid from "@/components/PostsGrid";

storyblokInit({
  accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
  bridge: true,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    content: Content,
    feature: Feature,
    featured_item: FeaturedItem,
    posts: Post,
    top: Top,
    post_grid_holder: PostGridHolder,
    posts_grid: PostsGrid,
  },
  apiOptions: {
    region: "eu",
  },
});

export const getStoryblokApi = () =>
  import('@storyblok/react/rsc').then((m) => m.getStoryblokApi());
