"use client";
import { useState, useEffect, use } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, ArrowLeft, Sparkles, User, Share2, Utensils, Check } from 'lucide-react';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { getBlogBySlug, getAllBlogs } from '../../../lib/sanity.queries';

// PortableText Custom Components for Sanity Rich Text rendering
const portableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gold my-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gold my-5">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl sm:text-2xl font-serif font-bold text-gold my-4">{children}</h3>,
    normal: ({ children }) => <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold pl-6 my-8 italic text-gold-light text-lg sm:text-xl font-serif bg-gold/5 py-4 pr-4 rounded-r-xl">
        &ldquo;{children}&rdquo;
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside text-gray-300 font-sans text-base sm:text-lg space-y-2 mb-6 ml-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside text-gray-300 font-sans text-base sm:text-lg space-y-2 mb-6 ml-4">{children}</ol>,
  },
};

export default function BlogDetailPage({ params }) {
  // Handle Next.js 15 params promise or direct params object
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug;

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true);

    Promise.all([getBlogBySlug(slug), getAllBlogs()])
      .then(([singlePost, allPosts]) => {
        setPost(singlePost);
        if (Array.isArray(allPosts)) {
          setRelatedPosts(allPosts.filter((p) => (p.slug || p.id) !== slug).slice(0, 3));
        }
      })
      .catch((err) => console.error('Failed to load blog detail:', err))
      .finally(() => setIsLoading(false));
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="bg-primary-bg min-h-screen text-gray-200 flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-24 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-gold/5 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold font-sans uppercase tracking-widest text-gold/80 hover:text-gold hover:-translate-x-1 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Stories
            </Link>
          </div>

          {isLoading ? (
            <div className="space-y-8 animate-pulse">
              <div className="h-6 bg-white/10 rounded w-1/4" />
              <div className="h-12 bg-white/10 rounded w-3/4" />
              <div className="h-96 bg-white/5 rounded-2xl w-full" />
              <div className="h-4 bg-white/5 rounded w-full" />
              <div className="h-4 bg-white/5 rounded w-5/6" />
            </div>
          ) : !post ? (
            <div className="text-center py-20 space-y-4">
              <Utensils className="w-12 h-12 text-gold/40 mx-auto" />
              <h2 className="font-serif text-3xl font-bold text-white">Story Not Found</h2>
              <p className="text-gray-400 text-sm">The article you are looking for might have been moved or updated.</p>
              <Link
                href="/blog"
                className="inline-block px-6 py-3 rounded-full bg-gold text-primary-dark font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                Return to Blog Listing
              </Link>
            </div>
          ) : (
            <article className="space-y-10">
              {/* Header Info */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase border backdrop-blur-md ${post.categoryColor || 'bg-amber-500/20 text-amber-300 border-amber-500/30'}`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    {post.category || "CHEF'S SECRETS"}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gold/80 font-sans font-medium">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    {post.readTime || '4 min read'}
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wide leading-tight">
                  {post.title}
                </h1>

                {/* Author & Date Card */}
                <div className="flex items-center justify-between border-y border-gold/15 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-bold">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{post.author || 'Chef Rahil Varma'}</p>
                      <p className="text-xs text-gray-400">{post.authorRole || 'Head Culinary Director'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-sans">
                      <Calendar className="w-4 h-4 text-gold" />
                      {post.date || 'Recent'}
                    </span>
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-dark/80 border border-gold/20 text-gold hover:bg-gold hover:text-primary-dark transition-all text-xs font-semibold cursor-pointer"
                      title="Share Article Link"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Link Copied!' : 'Share'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Cover Image */}
              {post.image && (
                <div className="relative h-[300px] sm:h-[450px] rounded-3xl overflow-hidden border border-gold/30 shadow-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Excerpt Summary Box */}
              {post.excerpt && (
                <div className="p-6 rounded-2xl bg-gold/10 border-l-4 border-gold text-gold-light text-base sm:text-lg italic font-serif leading-relaxed">
                  {post.excerpt}
                </div>
              )}

              {/* Main Body Content (Sanity Portable Text OR Raw HTML string fallback) */}
              <div className="prose prose-invert max-w-none font-sans text-gray-300 space-y-6 pt-4 border-t border-gold/10">
                {Array.isArray(post.body) ? (
                  <PortableText value={post.body} components={portableTextComponents} />
                ) : typeof post.content === 'string' ? (
                  <div
                    className="blog-content-body space-y-4"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                ) : (
                  <p className="text-gray-300 leading-relaxed">
                    {post.excerpt || 'Full story content available at Kanary Restaurant.'}
                  </p>
                )}
              </div>

              {/* Bottom Share & Back */}
              <div className="pt-12 border-t border-gold/15 flex flex-wrap justify-between items-center gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-dark border border-gold/30 text-gold hover:bg-gold hover:text-primary-dark text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Explore More Stories
                </Link>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/10 border border-gold/30 text-gold hover:bg-gold hover:text-primary-dark text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  {copied ? 'Link Copied!' : 'Share Article'}
                </button>
              </div>

              {/* Related Articles Section */}
              {relatedPosts.length > 0 && (
                <div className="pt-16 space-y-8">
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide border-b border-gold/15 pb-4">
                    Related Gourmet Stories
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {relatedPosts.map((rel) => {
                      const relSlug = rel.slug || rel.id;
                      return (
                        <Link
                          key={rel._id || rel.id}
                          href={`/blog/${relSlug}`}
                          className="glass-panel rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 shadow-lg flex flex-col justify-between group transition-all p-4"
                        >
                          <div className="h-36 rounded-xl overflow-hidden mb-3">
                            <img
                              src={rel.image}
                              alt={rel.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <h4 className="font-serif text-sm font-bold text-white group-hover:text-gold line-clamp-2 leading-snug">
                            {rel.title}
                          </h4>
                          <p className="text-[11px] text-gold/70 mt-2">{rel.date || 'Recent'}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </article>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
