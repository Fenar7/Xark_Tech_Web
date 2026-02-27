import groq from "groq";

import { client } from "./client";

export type BlogCardPost = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  image: string;
};

export type BlogDetailPost = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  image: string;
  body: unknown[];
  seoTitle?: string;
  seoDescription?: string;
};

type BlogCardPostRaw = {
  title?: string;
  slug?: string;
  excerpt?: string;
  publishedAt?: string;
  image?: string | null;
};

type BlogDetailPostRaw = BlogCardPostRaw & {
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
};

const BLOG_POSTS_QUERY = groq`
  *[_type == "blogPost"] | order(publishedAt desc, _createdAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "image": mainImage.asset->url
  }
`;

const BLOG_POST_BY_SLUG_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "image": mainImage.asset->url,
    body,
    seoTitle,
    seoDescription
  }
`;

const BLOG_SLUGS_QUERY = groq`
  *[_type == "blogPost" && defined(slug.current)][].slug.current
`;

const DEFAULT_IMAGE = "/images/about-section-image.png";

const normalizeCardPost = (item: BlogCardPostRaw): BlogCardPost | null => {
  if (
    typeof item.title !== "string" ||
    typeof item.slug !== "string" ||
    typeof item.excerpt !== "string" ||
    typeof item.publishedAt !== "string"
  ) {
    return null;
  }

  return {
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    publishedAt: item.publishedAt,
    image: item.image || DEFAULT_IMAGE,
  };
};

const normalizeDetailPost = (item: BlogDetailPostRaw | null): BlogDetailPost | null => {
  if (!item) return null;
  const base = normalizeCardPost(item);
  if (!base) return null;

  return {
    ...base,
    body: Array.isArray(item.body) ? item.body : [],
    seoTitle: item.seoTitle,
    seoDescription: item.seoDescription,
  };
};

export const getBlogPosts = async (limit?: number): Promise<BlogCardPost[]> => {
  try {
    const response = await client.fetch<BlogCardPostRaw[]>(
      BLOG_POSTS_QUERY,
      {},
      { next: { revalidate: 60 } },
    );

    const posts = response
      .map(normalizeCardPost)
      .filter((post): post is BlogCardPost => Boolean(post));

    return typeof limit === "number" ? posts.slice(0, limit) : posts;
  } catch {
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogDetailPost | null> => {
  try {
    const response = await client.fetch<BlogDetailPostRaw | null>(
      BLOG_POST_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 60 } },
    );

    return normalizeDetailPost(response);
  } catch {
    return null;
  }
};

export const getAllBlogSlugs = async (): Promise<string[]> => {
  try {
    const response = await client.fetch<string[]>(
      BLOG_SLUGS_QUERY,
      {},
      { next: { revalidate: 60 } },
    );

    return response.filter((slug): slug is string => typeof slug === "string" && slug.length > 0);
  } catch {
    return [];
  }
};
