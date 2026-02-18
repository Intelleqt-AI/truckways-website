import { blogPosts } from '@/lib/blog-data';

export async function fetchLocalArticles() {
  return {
    data: blogPosts.map(post => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      description: post.description,
      publishedAt: post.publishedAt,
      readingTime: post.readingTime,
      cover: post.cover,
      author: post.author,
      tags: post.tags,
      content: post.content,
      // For compatibility with Strapi block renderer
      blocks: [],
    })),
  };
}

export async function fetchLocalArticleBySlug(slug) {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return null;
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    description: post.description,
    publishedAt: post.publishedAt,
    readingTime: post.readingTime,
    cover: post.cover,
    author: post.author,
    tags: post.tags,
    content: post.content,
    blocks: [],
  };
}

export function getAllSlugs() {
  return blogPosts.map(p => p.slug);
}
