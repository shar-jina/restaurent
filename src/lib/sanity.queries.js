import { client, urlFor } from './sanity.client';
import { blogPosts as fallbackBlogs } from '../data/blogData';

// GROQ Query for all published blog posts
export const ALL_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  readTime,
  category,
  categoryColor,
  excerpt,
  "author": author->name,
  "authorRole": author->role,
  "authorAvatar": author->image.asset->url,
  "image": mainImage.asset->url,
  body
}`;

// GROQ Query for a single post by slug
export const SINGLE_POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  readTime,
  category,
  categoryColor,
  excerpt,
  "author": author->name,
  "authorRole": author->role,
  "authorAvatar": author->image.asset->url,
  "image": mainImage.asset->url,
  body
}`;

/**
 * Fetch all published blogs from Sanity CMS (with graceful fallback)
 */
export async function getAllBlogs() {
  try {
    const sanityPosts = await client.fetch(ALL_POSTS_QUERY);
    if (Array.isArray(sanityPosts) && sanityPosts.length > 0) {
      return sanityPosts.map(post => ({
        ...post,
        id: post.slug || post._id,
        date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
        image: urlFor(post.image) || 'https://res.cloudinary.com/lzebcil2/image/upload/v1789643306/kanary_restaurant_dishes/ITM0001368_phbmq3.jpg',
      }));
    }
  } catch (err) {
    console.warn('Sanity CMS fetch fallback:', err.message);
  }

  // Fallback to static blogPosts if Sanity is not connected yet
  return fallbackBlogs.map(b => ({
    ...b,
    slug: b.id,
  }));
}

/**
 * Fetch a single blog by slug from Sanity CMS (with graceful fallback)
 */
export async function getBlogBySlug(slug) {
  try {
    const post = await client.fetch(SINGLE_POST_QUERY, { slug });
    if (post) {
      return {
        ...post,
        id: post.slug || post._id,
        date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
        image: urlFor(post.image) || 'https://res.cloudinary.com/lzebcil2/image/upload/v1789643306/kanary_restaurant_dishes/ITM0001368_phbmq3.jpg',
      };
    }
  } catch (err) {
    console.warn('Sanity CMS single post fallback:', err.message);
  }

  // Fallback search in fallback static blog array
  const fallback = fallbackBlogs.find(b => b.id === slug || b.id.toLowerCase() === slug?.toLowerCase());
  if (fallback) {
    return {
      ...fallback,
      slug: fallback.id,
    };
  }

  return null;
}
