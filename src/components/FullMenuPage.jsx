"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Flame, ArrowLeft, Utensils } from 'lucide-react';
import Link from 'next/link';

export default function FullMenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fullMenu = {
    starters: [
      {
        name: 'Premium Crispy Chicken',
        price: 220,
        description: 'Tender grain-fed chicken strips double-crusted in heritage spices and golden-fried to crisp perfection.',
        spicy: true,
        veg: false,
      },
      {
        name: 'Artisanal Veg Spring Rolls',
        price: 180,
        description: 'Hand-rolled paper-thin pastry wrappers loaded with wok-fried julienned garden vegetables and aromatic spices.',
        spicy: false,
        veg: true,
      },
      {
        name: 'Sizzling Garlic Butter Prawns',
        price: 320,
        description: 'Jumbo ocean prawns sautéed in premium white butter, crushed organic garlic, fresh herbs, and a splash of lemon zest.',
        spicy: false,
        veg: false,
      },
      {
        name: 'Carolina Reaper Alfaham',
        price: 340,
        description: 'Luxury charcoal-grilled chicken infused with the world\'s hottest chili, Greek yoghurt marinade, and Arabic signature spices.',
        spicy: true,
        veg: false,
      },
    ],
    main: [
      {
        name: 'Royal Kerala Fish Curry',
        price: 380,
        description: 'Fresh king fish simmered slowly in a traditional black clay pot with kudampuli (Malabar tamarind), curry leaves, and first-press coconut milk.',
        spicy: true,
        veg: false,
      },
      {
        name: 'Grand Mughal Butter Chicken',
        price: 340,
        description: 'Succulent tandoori-grilled chicken pieces simmered in a velvety, slow-cooked tomato, cashew-nut paste, and butter gravy.',
        spicy: false,
        veg: false,
      },
      {
        name: 'Classic Arabic Mandi',
        price: 390,
        description: 'Authentic Yemenite-style slow-cooked chicken served over smoke-infused long-grain basmati mandi rice, accompanied by spicy salatah.',
        spicy: false,
        veg: false,
      },
      {
        name: 'Aromatic Wok-Tossed Fried Rice',
        price: 220,
        description: 'Fluffy aged basmati rice wok-tossed with fresh farm vegetables, light organic soy sauce, scallions, and cold-pressed oils.',
        spicy: false,
        veg: true,
      },
    ],
    desserts: [
      {
        name: 'Fudge Brownie Elegance',
        price: 180,
        description: 'Decadent, warm chocolate fudge brownie served with a scoop of Madagascar vanilla bean ice cream, hot dark chocolate syrup, and gold-dust garnish.',
        spicy: false,
        veg: true,
      },
      {
        name: 'Exotic Tropical Fruit Melange',
        price: 150,
        description: 'A refreshing medley of seasonal organic fruits glazed with wild forest honey and lime syrup, topped with fresh whipped cream.',
        spicy: false,
        veg: true,
      },
    ]
  };

  return (
    <div className="pt-20 bg-primary-bg min-h-screen">
      {/* 1. Hero Section */}
      <div 
        className="relative h-[45vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/interior_1.png')" }}
      >
        {/* Luxury Gold and Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/80 to-primary-bg backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_70%)]" />

        <div className="relative text-center max-w-3xl px-4 space-y-4 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-full border border-gold flex items-center justify-center bg-primary-dark/60 mx-auto"
          >
            <Utensils className="w-5 h-5 text-gold" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wide"
          >
            Our Culinary Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold font-sans font-medium tracking-widest text-xs sm:text-sm uppercase"
          >
            A Journey of Authentic Kerala, Indian & Global Flavors
          </motion.p>
        </div>
      </div>

      {/* 2. Menu List Directory */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Starters Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gold">Appetizers & Starters</h2>
            <div className="flex-grow border-b border-gold/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {fullMenu.starters.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={idx} 
                className="space-y-1 group"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold transition-colors duration-200 flex items-center gap-2">
                    {item.name}
                    {item.veg && <Leaf className="w-3.5 h-3.5 text-green-500 inline" />}
                    {item.spicy && <Flame className="w-3.5 h-3.5 text-red-500 inline" />}
                  </h3>
                  <div className="flex-grow border-b border-dotted border-gray-700 mx-2" />
                  <span className="text-gold font-sans font-bold text-lg">₹{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed pr-6">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mains Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gold">Main Course</h2>
            <div className="flex-grow border-b border-gold/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {fullMenu.main.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={idx} 
                className="space-y-1 group"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold transition-colors duration-200 flex items-center gap-2">
                    {item.name}
                    {item.veg && <Leaf className="w-3.5 h-3.5 text-green-500 inline" />}
                    {item.spicy && <Flame className="w-3.5 h-3.5 text-red-500 inline" />}
                  </h3>
                  <div className="flex-grow border-b border-dotted border-gray-700 mx-2" />
                  <span className="text-gold font-sans font-bold text-lg">₹{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed pr-6">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desserts Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gold">Sweet Endings</h2>
            <div className="flex-grow border-b border-gold/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {fullMenu.desserts.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={idx} 
                className="space-y-1 group"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold transition-colors duration-200 flex items-center gap-2">
                    {item.name}
                    {item.veg && <Leaf className="w-3.5 h-3.5 text-green-500 inline" />}
                    {item.spicy && <Flame className="w-3.5 h-3.5 text-red-500 inline" />}
                  </h3>
                  <div className="flex-grow border-b border-dotted border-gray-700 mx-2" />
                  <span className="text-gold font-sans font-bold text-lg">₹{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed pr-6">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Back to home trigger */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary-dark font-sans font-bold py-4 px-10 rounded-full text-sm tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] cursor-pointer hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO HOME
          </Link>
        </div>

      </div>
    </div>
  );
}
