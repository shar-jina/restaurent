"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, User } from 'lucide-react';
import Link from 'next/link';
import { getAllBlogs } from '../lib/sanity.queries';

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch live blogs from Sanity CMS on mount
  useEffect(() => {
    getAllBlogs()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setBlogs(data.slice(0, 3)); // Display top 3 on homepage
        }
      })
      .catch((err) => console.error('Failed to fetch Sanity blogs:', err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section id="blog" className="py-24 relative bg-primary-bg overflow-hidden border-t border-gold/10">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-center md:text-left space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5 text-gold animate-pulse" />
              Culinary Chronicles
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
              Latest News & Gourmet Stories
            </h2>
            <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
              Explore Chef secrets, heritage spices, and culinary insights behind Kanary&apos;s signature dishes.
            </p>
          </div>

          {/* View All Stories Button */}
          <Link
            href="/blog"
            className="flex items-center gap-2 bg-transparent hover:bg-gold border-2 border-gold text-gold hover:text-primary-dark font-sans px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold/10 hover:scale-105 transition-all cursor-pointer flex-shrink-0"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Skeleton Loading or 3-Card Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((sk) => (
              <div 
                key={sk}
                className="glass-panel rounded-2xl overflow-hidden border border-gold/20 shadow-xl h-96 flex flex-col justify-between animate-pulse p-6 bg-primary-dark/50"
              >
                <div className="h-44 bg-white/5 rounded-xl w-full" />
                <div className="space-y-3 mt-4">
                  <div className="h-4 bg-white/10 rounded w-1/3" />
                  <div className="h-6 bg-white/10 rounded w-full" />
                  <div className="h-4 bg-white/5 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((post, idx) => {
              const postSlug = post.slug || post.id;
              return (
                <motion.div
                  key={post._id || post.id || idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass-panel rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 shadow-xl flex flex-col justify-between group transition-all duration-300 relative"
                >
                  <Link href={`/blog/${postSlug}`} className="flex flex-col h-full justify-between">
                    <div>
                      {/* Image Container */}
                      <div className="relative h-60 w-full overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent" />
                        
                        {/* Category Tag */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border backdrop-blur-md ${post.categoryColor || 'bg-amber-500/20 text-amber-300 border-amber-500/30'}`}>
                            <Sparkles className="w-3 h-3" />
                            {post.category || "CHEF'S SECRETS"}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Meta info: Date & Read Time */}
                        <div className="flex items-center justify-between text-xs text-gold/80 font-sans font-medium">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-gold" />
                            {post.date || 'Recent'}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-gold" />
                            {post.readTime || '4 min read'}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors duration-300 line-clamp-2 leading-snug">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-sans">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer: Author & Read Story link */}
                    <div className="px-6 pb-6 pt-4 border-t border-gold/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white truncate max-w-[120px]">{post.author || 'Chef Rahil Varma'}</p>
                          <p className="text-[10px] text-gray-400 truncate max-w-[120px]">{post.authorRole || 'Culinary Director'}</p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-gold group-hover:translate-x-1 transition-transform">
                        Read Story
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
