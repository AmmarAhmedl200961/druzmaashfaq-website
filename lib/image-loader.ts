/**
 * Custom image loader for static export with Vercel deployment
 * This allows Next.js Image component to work with static exports
 * while still benefiting from Vercel's automatic image optimization
 */

export default function imageLoader({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) {
  // For static export, return the original path
  // Vercel will handle optimization at the edge when deployed
  return src;
}
