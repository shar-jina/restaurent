"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, User, Search, Utensils, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getAllBlogs } from '../../lib/sanity.queries';

const categories = [
  'All',
  "CHEF'S SECRETS",
  'HERITAGE & HEALTH',
  'AL FAHAM & GRILLS',
  'CULINARY EVENTS',
];

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllBlogs()
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogs(data);
        }
      })
      .catch((err) => console.error('Failed to fetch blogs:', err))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredBlogs = blogs.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      post.category?.toUpperCase() === selectedCategory.toUpperCase();
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-primary-bg min-h-screen text-gray-200 flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-24 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb & Header */}
          <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5 text-gold animate-pulse" />
              Kanary Chronicles
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
              Culinary News & Stories
            </h1>
            <p className="text-gray-400 font-sans text-base sm:text-lg leading-relaxed">
              Step inside our kitchen. Discover traditional recipes, Malabar heritage spice blends, and behind-the-scenes gourmet craft.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="glass-panel rounded-2xl p-6 mb-16 shadow-2xl flex flex-col md:flex-row gap-6 items-center justify-between border border-gold/20">
            {/* Search Box */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-gold/60" />
              <input
                type="text"
                placeholder="Search stories (e.g. Brisket, Ghee, Spices...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-primary-dark/60 border border-gold/20 rounded-full py-3 pl-12 pr-4 text-white font-sans text-sm outline-none focus:border-gold transition-all placeholder-gray-500"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider font-sans border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gold text-primary-dark border-gold shadow-lg shadow-gold/20'
                      : 'bg-primary-dark/40 border-gold/15 text-gray-400 hover:border-gold/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Cards Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((sk) => (
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
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <Utensils className="w-12 h-12 text-gold/40 mx-auto" />
              <h3 className="text-xl font-serif font-bold text-white">No Stories Found</h3>
              <p className="text-gray-400 text-sm">Try changing your search query or selected category.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="px-6 py-2.5 rounded-full bg-gold text-primary-dark font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredBlogs.map((post, idx) => {
                const postSlug = post.slug || post.id;
                return (
                  <motion.div
                    key={post._id || post.id || idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -6 }}
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
                          {/* Date & Read time */}
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

                      {/* Card Footer */}
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
      </main>

      <Footer />
    </div>
  );
}
