import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

// Environment variables or default fallback project config
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kanary-restaurant';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-10-01';

// Create Sanity Client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

// Image Builder for Sanity Image assets
const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return '';
  if (typeof source === 'string') return source;
  try {
    return builder.image(source).url();
  } catch (err) {
    return typeof source === 'object' && source.asset?.url ? source.asset.url : '';
  }
}
